# Tasarla Geliştir Web Sitesi - Uygulama Planı

Bu dosya, mevcut Vite + React + TS projesini çok sayfalı yapıya geçirme, stil düzenlemeleri ve içerik eklemeleri için net bir uygulama planı sağlar. Bu planı izleyerek proje başka bir AI veya geliştirici tarafından sürdürülebilir şekilde ilerletilebilir.

## 1) Hedefler
- Çok sayfalı yönlendirme (React Router) kurulumu
- Sayfalar: Ana Sayfa, Kurallar, Takvim, Ödüller, Destekçiler, Hakkında, İletişim
- Navigasyonun bu sayfalara bağlanması (SPA linkleri)
- Ana sayfa düzeni sadeleştirme (hero + CTA)
- Global stil iyileştirmeleri: arka plan geçişleri, bölüm aralıkları, kart ve grid tutarlılığı
- Destekçiler sayfasında sponsor/partner tanıtımı + resmi bağlantılar
- Meta/SEO iyileştirmeleri (title/description/OG)
- Docker ile üretim derlemesi ve Nginx SPA fallback’in doğrulanması

## 2) Yapılacaklar (Adım Adım)
1. Router kurulumunu genişlet:
   - `web/src/main.tsx`: `createBrowserRouter` ile nested routing.
   - `App`’i layout olarak kullan, `<Outlet />` ile child route’ları yerleştir.
2. Yeni sayfaları oluştur:
   - `web/src/pages/Kurallar.tsx`
   - `web/src/pages/Takvim.tsx`
   - `web/src/pages/Oduller.tsx`
   - `web/src/pages/Destekciler.tsx`
   - `web/src/pages/Hakkinda.tsx`
   - `web/src/pages/Iletisim.tsx`
3. `web/src/pages/App.tsx` navigasyonunu route link’lerine çevir (`Link to="/..."`).
4. `web/src/pages/Home.tsx`’i sadeleştir:
   - Hero + kısa açıklama + CTA butonları: Kurallar, Takvim, Ödüller, Destekçiler
   - Alt bölümde 2 kart: “Kısaca oyun özeti”, “İletişim”
5. Stil iyileştirmeleri (`web/src/styles/index.css`):
   - Arkaplan geçişini tek tip tut (zaten mevcut gradient iyi; hero’da overlay zaten var)
   - `.section` boşlukları; `.card`, `.grid` tutarlılık
   - Header stickiness ve blur korunur; footer basit
6. Destekçiler sayfasını doldur:
   - Kategoriler: “Ana Paydaşlar / Organizasyon”, “Destekçiler (Büyük)”, “Destekçiler (Diğer)”
   - Her bir kartta logo (placeholder), kısa tanım, “Siteye Git” butonu (yeni sekme)
   - Linkler aşağıdaki “Kaynak Linkler” bölümüne göre eklenecek
7. Meta/SEO:
   - `web/index.html` içinde `<meta>` description güncelle
   - OG/Twitter meta etiketlerini ekle (başlık, açıklama, hero görseli varsa)
8. Docker ile test:
   - `docker compose up --build -d`
   - `http://localhost:8080` kontrol

## 3) Örnek Kod Edits (özet)
- `web/src/main.tsx` (imports + routes):
  - `Home`, `Kurallar`, `Takvim`, `Oduller`, `Destekciler`, `Hakkinda`, `Iletisim` import et
  - `children: [{ index: true, element: <Home /> }, { path: 'kurallar', ...}, ...]`
- `web/src/pages/App.tsx`:
  - `<nav>` içindeki `a href="#..."` yerine `<Link to="/...">` kullan
  - `<main>` içinde `<Outlet />`
- `web/src/pages/Home.tsx`:
  - React Router’dan `Link` import et
  - CTA butonlarını `Link` ile oluştur
  - İçerik sadeleştir
- Yeni sayfalar (örnek şablon):
  - `Kurallar.tsx`: Oyun amacı, maç akışı, robot sınırları, puanlama özet kartları
  - `Takvim.tsx`: mevcut tarihleri liste olarak kartlarda göster
  - `Oduller.tsx`: ödülleri listele (kısa açıklamalarla)
  - `Destekciler.tsx`: kart grid — isim, logo (placeholder), link
  - `Hakkinda.tsx`: yarışmanın amacı ve organizasyon hakkında kısa metin
  - `Iletisim.tsx`: e‑posta, Google Groups linki, gerekli ise form placeholder

## 4) İçerik Notları
- Metinler Türkçe kalmalı.
- “Tema: İstanbul ve Su” vurgusu sürsün.
- Kurallar ve puanlama daha sonra güncellenecek şekilde net bölümlenmiş olmalı.

## 5) Kaynak Linkler (Destekçiler ve Paydaşlar)
Lütfen slidedaki doğrulanmış bağlantılarla değiştirin. Aşağıdaki linkler referans amaçlıdır; markaların ismi ve alanı benzer olduğundan doğrulama gerektirir.

- ACROME (resmi ürün sayfaları):
  - `https://acrome.net/product/acrobot`  [Kaynak: acrome.net]
  - `https://acrome.net/product/delta-robot`  [Kaynak: acrome.net]
  - `https://acrome.net/product/linear-inverted-pendulum`  [Kaynak: acrome.net]
  - `https://acrome.net/product/ball-balancing-table`  [Kaynak: acrome.net]
- Boardoza (Özdisan ile ilişkili ifade edilmiş; resmi “Boardoza” sitesi net tespit edilemedi):
  - Slidedaki bağlantıyı KULLANIN. Genel aramalarda benzer isimli alakasız sonuçlar dönüyor; doğrulama şart.
- Wattos Otomasyon (muhtemelen “Wattsu” ile karışabiliyor):
  - “Wattos Otomasyon” için net resmi site bulunamadı. “Wattsu” resmi sitesi: `https://wattsu.com/`  [Kaynak: wattsu.com]
  - Slidedaki Wattos linkini KULLANIN (adı “Wattos” ise özel firma olabilir).
- NFR Products (adı çok benzer farklı kuruluşlar var):
  - Otomotiv “NRF”: `https://www.nrf.eu/`  [Kaynak: nrf.eu] — Ancak bu “NFR Products” olmayabilir.
  - Slidedaki NFR Products linkini KULLANIN; alan adı bu şirket için belirleyicidir.
- Fikret Yüksel Vakfı:
  - Slidedaki resmi linki KULLANIN (kamusal doğrulama için vakfın resmi alan adı tercih edilmeli).

Not: Slideda verilen linkleri tek kaynak olarak esas alın. Genel web aramalarındaki benzer adlı yabancı/ilgisiz şirketlerle karıştırmayın.

## 6) Dosya/Dizin Değişiklikleri
- main/router:
  - `web/src/main.tsx`: nested route yapılandırması
- layout:
  - `web/src/pages/App.tsx`: `<Outlet />` + `<Link>` navigasyon
- sayfalar:
  - `web/src/pages/Kurallar.tsx`
  - `web/src/pages/Takvim.tsx`
  - `web/src/pages/Oduller.tsx`
  - `web/src/pages/Destekciler.tsx`
  - `web/src/pages/Hakkinda.tsx`
  - `web/src/pages/Iletisim.tsx`
- stil:
  - `web/src/styles/index.css`: küçük iyileştirmeler
- meta:
  - `web/index.html`: description + OG/Twitter meta

## 7) Test ve Dağıtım
- Geliştirme:
  - `cd web && npm i && npm run dev` → `http://localhost:5173`
- Docker (prod benzeri):
  - `docker compose up --build -d` → `http://localhost:8080`
- Nginx SPA fallback zaten `docker/nginx.conf` içinde `try_files $uri $uri/ /index.html;` ile tanımlı.

## 8) Ek Notlar
- TS path alias’ları (`@/assets` vb.) Vite ile uyumlu, mevcut ayarlar korunmalı.
- Yeni görsel/logo eklenecekse `web/src/assets/` altına yerleştirin; henüz yoksa kartlarda metin + link yeterli.
- Linkler `target="_blank" rel="noreferrer"` ile açılmalı.

---

# Hızlı Yapılacaklar Listesi
1. Router’ı nested olacak şekilde genişlet (main.tsx)
2. App’i layout + Outlet’e çevir (App.tsx)
3. Home’u sadeleştir, CTA’ları yönlendir
4. Yeni sayfaları ekle (Kurallar, Takvim, Ödüller, Destekçiler, Hakkında, İletişim)
5. Destekçiler sayfasına slidedaki resmi linklerle kartları koy
6. Meta/OG güncelle
7. Docker ile doğrula

# Sürümleme Önerisi
- PR başlığı: “Routing + Pages + Sponsors: initial multi-page setup”
- Commitler:
  - feat(router): nested routes + layout outlet
  - feat(pages): add Kurallar, Takvim, Oduller, Destekciler, Hakkinda, Iletisim
  - refactor(home): simplify hero and CTAs
  - style(global): minor polish for sections/cards
  - chore(meta): update description and add OG/Twitter tags
  - chore(docker): verify build 