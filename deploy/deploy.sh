#!/bin/bash

# Renkli output için
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}MEB Tasarla Geliştir Web Sitesi Deployment Script${NC}"
echo "================================================"

# Variables
REPO_URL="https://github.com/tunapro1234/mebtasarlagelistir_web.git"
DEPLOY_DIR="/var/www/mebtasarlagelistir"
NGINX_SITE="/etc/nginx/sites-available/mebtasarlagelistir"
DOMAIN="mebtasarlagelistir.com"

# 1. Git kurulu mu kontrol et
echo -e "${YELLOW}[1/8] Git kontrolü...${NC}"
if ! command -v git &> /dev/null; then
    echo -e "${RED}Git kurulu değil! Kurulum yapılıyor...${NC}"
    sudo apt update && sudo apt install -y git
fi

# 2. Node.js kurulu mu kontrol et
echo -e "${YELLOW}[2/8] Node.js kontrolü...${NC}"
if ! command -v node &> /dev/null; then
    echo -e "${RED}Node.js kurulu değil! Kurulum yapılıyor...${NC}"
    curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
    sudo apt install -y nodejs
fi

# 3. Nginx kurulu mu kontrol et
echo -e "${YELLOW}[3/8] Nginx kontrolü...${NC}"
if ! command -v nginx &> /dev/null; then
    echo -e "${RED}Nginx kurulu değil! Kurulum yapılıyor...${NC}"
    sudo apt update && sudo apt install -y nginx
fi

# 4. Deploy dizinini oluştur ve repo'yu çek
echo -e "${YELLOW}[4/8] Kod çekiliyor...${NC}"
if [ -d "$DEPLOY_DIR" ]; then
    # Git safe directory ekle
    git config --global --add safe.directory $DEPLOY_DIR
    cd $DEPLOY_DIR
    git pull origin stable
else
    sudo mkdir -p $DEPLOY_DIR
    sudo chown -R $USER:$USER $DEPLOY_DIR
    git clone -b stable $REPO_URL $DEPLOY_DIR
    cd $DEPLOY_DIR
fi

# 5. Dependencies kurulumu ve build
echo -e "${YELLOW}[5/8] Dependencies kuruluyor ve build alınıyor...${NC}"
cd $DEPLOY_DIR/web

# Permission sorunlarını çöz
sudo chown -R $USER:$USER $DEPLOY_DIR
rm -rf node_modules package-lock.json

# Dependencies kur ve build al
npm install
npm run build

# Build dizininin yetkilerini ayarla
sudo chown -R www-data:www-data $DEPLOY_DIR/web/dist

# 6. İlk basit Nginx konfigürasyonu (SSL'siz)
echo -e "${YELLOW}[6/8] Nginx konfigürasyonu...${NC}"
cat << 'EOF' | sudo tee $NGINX_SITE
server {
    listen 80;
    server_name mebtasarlagelistir.com www.mebtasarlagelistir.com;
    
    root /var/www/mebtasarlagelistir/web/dist;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|woff|woff2|ttf|svg)$ {
        expires 30d;
        add_header Cache-Control "public, immutable";
    }
}
EOF

# Nginx config'i etkinleştir
sudo ln -sf $NGINX_SITE /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t && sudo systemctl reload nginx

# 7. SSL sertifikası (Let's Encrypt)
echo -e "${YELLOW}[7/8] SSL sertifikası alınıyor...${NC}"
if ! command -v certbot &> /dev/null; then
    sudo apt install -y certbot python3-certbot-nginx
fi

# SSL sertifikası al
sudo certbot --nginx -d $DOMAIN -d www.$DOMAIN --non-interactive --agree-tos --email mebtasarlagelistir@gmail.com --redirect

# 8. Nginx'i yeniden başlat
echo -e "${YELLOW}[8/8] Nginx yeniden başlatılıyor...${NC}"
sudo systemctl restart nginx
sudo systemctl enable nginx

echo -e "${GREEN}✅ Deployment tamamlandı!${NC}"
echo -e "${GREEN}🌐 Site şu adreste yayında: https://${DOMAIN}${NC}" 