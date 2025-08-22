#!/bin/bash

# Mevcut sorunları düzeltmek için hızlı fix script

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${GREEN}Sorunları düzeltiyorum...${NC}"

# 1. Git safe directory
echo -e "${YELLOW}[1/5] Git safe directory ayarlanıyor...${NC}"
git config --global --add safe.directory /var/www/mebtasarlagelistir

# 2. Permissions düzelt
echo -e "${YELLOW}[2/5] Dosya yetkileri düzeltiliyor...${NC}"
sudo chown -R $USER:$USER /var/www/mebtasarlagelistir
cd /var/www/mebtasarlagelistir

# 3. Node modules temizle ve yeniden kur
echo -e "${YELLOW}[3/5] Dependencies yeniden kuruluyor...${NC}"
cd /var/www/mebtasarlagelistir/web
rm -rf node_modules package-lock.json
npm install
npm run build

# Build dizini yetkisi
sudo chown -R www-data:www-data /var/www/mebtasarlagelistir/web/dist

# 4. Nginx config'i düzelt (SSL'siz başla)
echo -e "${YELLOW}[4/5] Nginx config düzeltiliyor...${NC}"
cat << 'EOF' | sudo tee /etc/nginx/sites-available/mebtasarlagelistir
server {
    listen 80;
    server_name mebtasarlagelistir.com www.mebtasarlagelistir.com;
    
    root /var/www/mebtasarlagelistir/web/dist;
    index index.html;
    
    # Gzip
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml text/javascript;
    
    # SPA routing
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Cache static files
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|woff|woff2|ttf|svg)$ {
        expires 30d;
        add_header Cache-Control "public, immutable";
    }
    
    # Security
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
}
EOF

# Default site'ı kaldır
sudo rm -f /etc/nginx/sites-enabled/default

# Nginx test ve restart
sudo nginx -t
if [ $? -eq 0 ]; then
    sudo systemctl restart nginx
    echo -e "${GREEN}✅ Nginx başarıyla başlatıldı!${NC}"
else
    echo -e "${RED}❌ Nginx config hatası!${NC}"
    exit 1
fi

# 5. SSL sertifikası
echo -e "${YELLOW}[5/5] SSL sertifikası alınıyor...${NC}"
sudo certbot --nginx -d mebtasarlagelistir.com -d www.mebtasarlagelistir.com --non-interactive --agree-tos --email mebtasarlagelistir@gmail.com --redirect

echo -e "${GREEN}✅ Tüm sorunlar düzeltildi!${NC}"
echo -e "${GREEN}🌐 Site şu adreste yayında: https://mebtasarlagelistir.com${NC}" 