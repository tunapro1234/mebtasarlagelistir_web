#!/bin/bash

# Renkli output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

DEPLOY_DIR="/var/www/mebtasarlagelistir"

echo -e "${GREEN}Güncelleme başlatılıyor...${NC}"

# 1. Son değişiklikleri çek
echo -e "${YELLOW}[1/3] GitHub'dan değişiklikler çekiliyor...${NC}"
cd $DEPLOY_DIR
git pull origin stable

# 2. Dependencies güncelle ve build al
echo -e "${YELLOW}[2/3] Build alınıyor...${NC}"
cd $DEPLOY_DIR/web
npm ci
npm run build

# 3. Nginx reload (config değişmediyse restart gerekmez)
echo -e "${YELLOW}[3/3] Nginx yenileniyor...${NC}"
sudo systemctl reload nginx

echo -e "${GREEN}✅ Güncelleme tamamlandı!${NC}" 