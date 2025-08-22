# MEB Tasarla Geliştir Robot Yarışması Web Sitesi

İstanbul İl Milli Eğitim Müdürlüğü tarafından düzenlenen Tasarla Geliştir Robot Yarışması'nın resmi web sitesi.

## 🚀 Özellikler

- **Modern Tasarım**: Canlı renkler, animasyonlar ve responsive düzen
- **SPA (Single Page Application)**: React Router ile hızlı sayfa geçişleri
- **Detaylı İçerik**: Kurallar, takvim, ödüller ve yarışma bilgileri
- **Interaktif Takvim**: Eylül-Aralık arası önemli tarihler
- **Accordion Menüler**: Organize edilmiş kural ve bilgi bölümleri

## 📁 Proje Yapısı

```
meb_websitesi/
├── web/                    # Frontend (React + Vite)
│   ├── src/
│   │   ├── pages/         # Sayfa componentleri
│   │   ├── styles/        # CSS dosyaları
│   │   └── assets/        # Görseller
│   └── package.json
├── deploy/                 # Deployment scriptleri
│   ├── nginx.conf         # Nginx konfigürasyonu
│   ├── deploy.sh          # İlk kurulum scripti
│   └── update.sh          # Güncelleme scripti
├── docker/                 # Docker konfigürasyonu
└── docker-compose.yml
```

## 🛠️ Geliştirme

### Gereksinimler
- Node.js 20+
- npm veya yarn

### Kurulum
```bash
# Repo'yu klonla
git clone https://github.com/tunapro1234/mebtasarlagelistir_web.git
cd mebtasarlagelistir_web

# Dependencies kurulumu
cd web
npm install

# Development server
npm run dev
```

Site `http://localhost:5173` adresinde açılacaktır.

### Build
```bash
npm run build
```

## 🌐 Production Deployment

### Domain Ayarları
Domain'inizi sunucu IP'sine yönlendirin:
- A Record: `@` → `SUNUCU_IP`
- A Record: `www` → `SUNUCU_IP`

### Sunucuda Kurulum

1. **SSH ile sunucuya bağlanın:**
```bash
ssh kullanici@sunucu_ip
```

2. **Repo'yu klonlayın:**
```bash
git clone -b stable https://github.com/tunapro1234/mebtasarlagelistir_web.git /var/www/mebtasarlagelistir
cd /var/www/mebtasarlagelistir
```

3. **Deploy scriptini çalıştırın:**
```bash
chmod +x deploy/deploy.sh
./deploy/deploy.sh
```

Script otomatik olarak:
- Node.js, Nginx kurulumu yapacak
- Dependencies kurulumu ve build alacak
- Nginx konfigürasyonu yapacak
- SSL sertifikası (Let's Encrypt) alacak

### Güncelleme
```bash
cd /var/www/mebtasarlagelistir
chmod +x deploy/update.sh
./deploy/update.sh
```

## 🐳 Docker ile Çalıştırma

```bash
docker-compose up --build -d
```

Site `http://localhost:8080` adresinde açılacaktır.

## 📝 Sayfalar

- **Ana Sayfa**: Hero, hızlı bilgiler, CTA butonları
- **Kurallar**: Oyun özeti, maç formatı, robot teknik şartnamesi
- **Takvim**: Önemli tarihler ve interaktif takvim
- **Ödüller**: Ödül kategorileri ve kazanma kriterleri
- **Destekçiler**: Sponsorlar ve destekçiler
- **Hakkında**: Misyon, vizyon ve yarışma süreci
- **İletişim**: İletişim bilgileri ve destek saatleri

## 🔧 Teknolojiler

- **Frontend**: React 18, TypeScript, Vite
- **Routing**: React Router v6
- **Styling**: CSS3 (Animations, Gradients, Grid)
- **Server**: Nginx
- **SSL**: Let's Encrypt
- **Container**: Docker

## 📧 İletişim

- **E-posta**: mebtasarlagelistir@gmail.com
- **GitHub**: https://github.com/tunapro1234/probot_lib (Örnek kodlar)

## 📄 Lisans

© 2025 İstanbul İl Milli Eğitim Müdürlüğü 