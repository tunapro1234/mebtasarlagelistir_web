## Tasarla Geliştir Robot Yarışması — “İstanbul ve Su” (Özet Not)

- Son durum: Kılavuzun final versiyonu Eylül başında yayınlanacaktır (Rev 19.06.2025 taslak). Site içeriği "taslak" ibaresiyle güncellenecek ve final çıktığında senkronize edilecektir.

### Takvim (2025)
- 19 Haziran: Sezon başlangıç semineri
- 26 Haziran: Kesin kayıtların başlangıcı
- 24 Eylül (Çarş.): İkinci bilgilendirme toplantısı
- 1 Ekim: Kesin kayıtların sonu
- 25 Kasım: Öğrenci ve öğretmen listelerinin teslimi
- 3–4 Aralık: Yarışma tarihi

### Katılım ve Takım Yapısı
- Takım: En az 5, en fazla 15 öğrenci; en fazla 3 danışman öğretmen
- Lise seviyesi liderliğinde; en az 3 ortaokul öğrencisi içerir
- Karma okullarda dengeli cinsiyet dağılımı tavsiye edilir

### Oyun Özeti
- Tema: İstanbul ve Su
- Sahadaki 4 robot (2’şerli ittifaklar: Kırmızı/Mavi)
- Amaç: "Su küreleri" (bilardo topları, Ø57.2 mm, ~178 g) bendlere ve sarnıçlara taşınır; son 30 sn’de su kemerine tırmanılır
- Saha: 3.60 m × 3.60 m EVA zemin; çevresi polikarbon kaplı profil çerçeve
- Elemanlar: Bend (3 seviye), Sarnıç (2 adet/takım), Kaynak (top giriş/çıkış platformu), Su kemeri (tırmanma barları)
- Top setleri: Mavi düz (1–7), Kırmızı çizgili (9–15); ek olarak 4 beyaz (Mavi) ve 4 siyah (Kırmızı)
- Her robot maç boyunca aynı anda yalnız 1 su küresi taşıyabilir; fırlatma yasak

### Maç Akışı
- OKS (Otonom): 30 sn — Kırmızı siyah topları, Mavi beyaz topları kullanır
- SKS (Sürücü): 120 sn — Takımlar kendi setlerinden topları kaynaktan sahaya sürer
- Rakip bend/sarnıca bırakılan toplar rakibe puan kazandırır; rakip top taşımak yasak (dokunma serbest)

### Puan (Kısa Özet)
- OKS: Başlangıç alanını terk +3; Bend 1: +4, 2: +6, 3: +8; Sarnıç: +7
- OKS: Bend 2’de farklı numaraya +3; Bend 3’te farklı numaraya +4
- SKS: Bend 1: +2, 2: +4, 3: +6; Sarnıç: +5; Kaynaktan düşüp Bend 1’den kendiliğinden geçen top: +2
- Tırmanış (son 30 sn): Kemer barına yükselen her robot: +15

### Robot Kuralları (Öne Çıkanlar)
- Başlangıç boyutu: 457.2 mm küp içinde (istisnalar hariç)
- Ağırlık sınırı yok; zemin ve saha elemanlarına zarar verilmemeli, keskin kenar yok
- Yatay genişleme sınırı: Yer matına paralel 50.8 cm × 73.8 cm; dikey sınır yok
- Elektronik kartlar kapalı muhafaza içinde olmalı; pnömatik/hidrolik yasak

Donanım:
- Motorlar: Yalnız fırçalı DC (12 V, ≲180 W, ≲~15 A zorlanma; form: 375/520/550/555); en çok 8 adet
- Servolar: 5–6 V; ≲~8 W; durma akımı ≲~4 A; tipik tork < 30 kgf·cm; en çok 12 adet
- Mikrodenetleyici (ana): ESP32-S3 / ESP32-WROOM serisi / NodeMCU (tek birim operatör konsoluyla haberleşir)
- Yardımcı denetleyiciler görüntü işleme vb. için serbest; motor sürme yetkisi yok
- Motor sürücüler: 9–18 V, sürekli 10–20 A, tepe ≤40 A, PWM/CAN/RS485’den en az biri

Enerji ve Kablolama:
- Pil: 12 V nominal NiMH, 3000 mAh, XT30 (erkek), ana sigorta 20 A; sürücüler öncesi 5–20 A
- Maks. gezebilecek voltaj: 24 V; şarj ortalama akımı ≤3 A; krokodil kabloyla şarj yasak
- Ana enerji anahtarı zorunlu (≥20 A @12 V, XT30 ile)
- Kablo kesitleri (örnek): 18 AWG (ana güç/motor), 22 AWG (PWM/servo/≤10 A), 28 AWG (≤1 A)
- Renk kodu: + hatlar kırmızı/sarı/beyaz/kahverengi; −/ortak siyah/mavi

### Etkinlik ve Jüri — Portfolyo
- Etkinlik akışı: Giriş, teftiş, deneme, sıralama, jüri mülakatları, play-off, törenler
- Portfolyo: 15 sayfa sınırı (A4, ≥10 pt); kapak + içerik, takım yapısı, plan, süreç, sponsorluk, robot vb.
- Jüri mülakatı: 8 dk kesintisiz sunum + 5 dk soru-cevap; harici linkler dikkate alınmaz

### İletişim ve Kaynaklar
- Mail grubu: `https://groups.google.com/g/istmebtasarlagelistir`
- E-posta: `mebtasarlagelistir@gmail.com`
- Örnek bağlantı/kod/iletişim için: `https://github.com/tunapro1234/probot_lib`

— Bu not, hızlı referans amacıyla hazırlanmıştır. Detaylar ve istisnalar için resmi kılavuza bakınız; final versiyon yayımlandığında içerik güncellenecektir.


