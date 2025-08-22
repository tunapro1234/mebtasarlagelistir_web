import React, { useState } from 'react'

export default function Kurallar() {
  const [activeSection, setActiveSection] = useState<string | null>('oyun-ozeti')

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section)
  }

  return (
    <section className="section">
      <div className="container">
        <h1 className="brand" style={{ marginTop: 0, marginBottom: 8 }}>Kurallar ve Yönetmelik</h1>
        <p style={{ marginBottom: 32, opacity: 0.9 }}>
          Tasarla Geliştir Robot Yarışması kuralları, teknik şartnameler ve yarışma formatı hakkında detaylı bilgiler.
        </p>

        {/* Quick links to documents */}
        <div className="card" style={{ marginBottom: 32, background: 'rgba(245, 158, 11, 0.1)', borderColor: 'var(--gold-500)' }}>
          <h3 style={{ marginBottom: 16 }}>📚 Yarışma Dokümanları</h3>
          <div className="grid cols-3">
            <a href="https://github.com/tunapro1234/probot_lib" target="_blank" rel="noreferrer" className="btn-primary">
              Örnek Kod Kütüphanesi
            </a>
            <a href="#" className="btn-primary" style={{ opacity: 0.7, cursor: 'not-allowed' }}>
              Kılavuz (Eylül'de Yayınlanacak)
            </a>
            <a href="mailto:mebtasarlagelistir@gmail.com" className="btn-primary">
              Teknik Destek
            </a>
          </div>
        </div>

        <div className="accordion">
          {/* Oyun Özeti */}
          <div className={`accordion-item ${activeSection === 'oyun-ozeti' ? 'active' : ''}`}>
            <div className="accordion-header" onClick={() => toggleSection('oyun-ozeti')}>
              <h2>🎮 Oyun Özeti ve Tema</h2>
              <span className="accordion-icon">▼</span>
            </div>
            {activeSection === 'oyun-ozeti' && (
              <div className="accordion-content">
                <h3 className="brand">İstanbul ve Su Teması</h3>
                <p>
                  Bu yılki yarışmamızın teması "İstanbul ve Su" olarak belirlenmiştir. Robotlar, tarihi İstanbul'un 
                  su yapılarından ilham alınarak tasarlanan sahada, su kürelerini (bilardo topları) bendlere ve 
                  sarnıçlara taşıyacak, final aşamasında ise su kemerine tırmanacaktır.
                </p>
                
                <h3 className="brand" style={{ marginTop: 24 }}>Saha Özellikleri</h3>
                <ul style={{ lineHeight: 1.8 }}>
                  <li>📐 Boyut: 3.60m × 3.60m EVA zemin</li>
                  <li>🏗️ Çevre: Polikarbon kaplı profil çerçeve</li>
                  <li>🎯 Elemanlar: Bend (3 seviye), Sarnıç (2 adet/takım), Kaynak platformu, Su kemeri</li>
                  <li>⚪ Toplar: Standart bilardo topları (Ø57.2mm, ~178g)</li>
                </ul>

                <h3 className="brand" style={{ marginTop: 24 }}>Takım Yapısı</h3>
                <p>
                  Sahada aynı anda 4 robot bulunur - 2'şerli ittifaklar halinde (Kırmızı ve Mavi). 
                  Her robot maç boyunca aynı anda yalnızca 1 su küresi taşıyabilir, topların fırlatılması yasaktır.
                </p>
              </div>
            )}
          </div>

          {/* Maç Formatı */}
          <div className={`accordion-item ${activeSection === 'mac-formati' ? 'active' : ''}`}>
            <div className="accordion-header" onClick={() => toggleSection('mac-formati')}>
              <h2>⏱️ Maç Formatı ve Aşamalar</h2>
              <span className="accordion-icon">▼</span>
            </div>
            {activeSection === 'mac-formati' && (
              <div className="accordion-content">
                <h3 className="brand">OKS - Otonom Kontrol Süresi (30 saniye)</h3>
                <p>
                  Maçın ilk 30 saniyesi otonom kontrolle geçer. Bu sürede robotlar önceden programlanmış 
                  hareketlerle sahada hareket eder. Kırmızı takım siyah topları, Mavi takım beyaz topları kullanır.
                </p>
                <ul style={{ lineHeight: 1.8, marginTop: 12 }}>
                  <li>✅ Başlangıç alanını terk etmek: +3 puan</li>
                  <li>✅ Bend'e top yerleştirme: Seviye 1: +4, Seviye 2: +6, Seviye 3: +8 puan</li>
                  <li>✅ Sarnıca top yerleştirme: +7 puan</li>
                  <li>✅ Bonus puanlar: Farklı numaralı toplar için ek puan</li>
                </ul>

                <h3 className="brand" style={{ marginTop: 24 }}>SKS - Sürücü Kontrol Süresi (120 saniye)</h3>
                <p>
                  Ana oyun süresi 120 saniyedir. Bu sürede takımlar kendi operatörleri tarafından kontrol edilir. 
                  Takımlar kendi setlerinden topları kaynaktan sahaya sürer.
                </p>
                <ul style={{ lineHeight: 1.8, marginTop: 12 }}>
                  <li>✅ Bend'e top yerleştirme: Seviye 1: +2, Seviye 2: +4, Seviye 3: +6 puan</li>
                  <li>✅ Sarnıca top yerleştirme: +5 puan</li>
                  <li>✅ Kaynaktan düşüp Bend 1'den geçen top: +2 puan</li>
                </ul>

                <h3 className="brand" style={{ marginTop: 24 }}>Final Aşaması (Son 30 saniye)</h3>
                <p>
                  Maçın son 30 saniyesinde robotlar su kemerine tırmanabilir. Kemer barına başarıyla yükselen 
                  her robot takımına +15 puan kazandırır.
                </p>

                <div className="card" style={{ marginTop: 24, background: 'rgba(245, 158, 11, 0.1)' }}>
                  <p style={{ margin: 0 }}>
                    <strong>⚠️ Önemli Kural:</strong> Rakip bend veya sarnıca bırakılan toplar rakibe puan kazandırır! 
                    Rakip toplarına dokunmak serbest ancak taşımak yasaktır.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Robot Teknik Şartname */}
          <div className={`accordion-item ${activeSection === 'robot-teknik' ? 'active' : ''}`}>
            <div className="accordion-header" onClick={() => toggleSection('robot-teknik')}>
              <h2>🤖 Robot Teknik Şartnamesi</h2>
              <span className="accordion-icon">▼</span>
            </div>
            {activeSection === 'robot-teknik' && (
              <div className="accordion-content">
                <h3 className="brand">Boyut ve Yapı Kuralları</h3>
                <ul style={{ lineHeight: 1.8 }}>
                  <li>📏 Başlangıç boyutu: Maksimum 457.2mm küp içinde</li>
                  <li>📐 Yatay genişleme: Maks. 50.8cm × 73.8cm (yer matına paralel)</li>
                  <li>↕️ Dikey genişleme: Sınır yok</li>
                  <li>⚖️ Ağırlık: Sınır yok (zemine zarar vermemek koşuluyla)</li>
                  <li>🛡️ Güvenlik: Keskin kenar yasak, elektronik kartlar kapalı muhafazada olmalı</li>
                </ul>

                <h3 className="brand" style={{ marginTop: 24 }}>Motor ve Aktüatörler</h3>
                <div className="grid cols-2">
                  <div className="card">
                    <h4>DC Motorlar</h4>
                    <ul>
                      <li>Tip: Fırçalı DC (12V)</li>
                      <li>Güç: ≤180W</li>
                      <li>Akım: ≤15A (zorlanma)</li>
                      <li>Form: 375/520/550/555</li>
                      <li>Adet: Maksimum 8</li>
                    </ul>
                  </div>
                  <div className="card">
                    <h4>Servo Motorlar</h4>
                    <ul>
                      <li>Voltaj: 5-6V</li>
                      <li>Güç: ≤8W</li>
                      <li>Durma akımı: ≤4A</li>
                      <li>Tork: &lt;30 kgf·cm</li>
                      <li>Adet: Maksimum 12</li>
                    </ul>
                  </div>
                </div>

                <h3 className="brand" style={{ marginTop: 24 }}>Kontrol Sistemi</h3>
                <div className="card">
                  <h4>Ana Mikrodenetleyici</h4>
                  <p>ESP32-S3 / ESP32-WROOM serisi / NodeMCU (Tek birim, operatör konsoluyla haberleşir)</p>
                  
                  <h4 style={{ marginTop: 16 }}>Yardımcı Denetleyiciler</h4>
                  <p>Görüntü işleme vb. için kullanılabilir ancak motor sürme yetkisi yoktur.</p>
                  
                  <h4 style={{ marginTop: 16 }}>Motor Sürücüler</h4>
                  <ul>
                    <li>Voltaj: 9-18V</li>
                    <li>Sürekli akım: 10-20A</li>
                    <li>Tepe akım: ≤40A</li>
                    <li>Haberleşme: PWM/CAN/RS485'den en az biri</li>
                  </ul>
                </div>

                <h3 className="brand" style={{ marginTop: 24 }}>Enerji ve Kablolama</h3>
                <ul style={{ lineHeight: 1.8 }}>
                  <li>🔋 Pil: 12V nominal NiMH, 3000mAh, XT30 (erkek)</li>
                  <li>⚡ Ana sigorta: 20A, sürücü öncesi: 5-20A</li>
                  <li>🔌 Ana enerji anahtarı zorunlu (≥20A @12V)</li>
                  <li>🚫 Pnömatik/hidrolik sistemler yasak</li>
                </ul>
              </div>
            )}
          </div>

          {/* Takım Yapısı */}
          <div className={`accordion-item ${activeSection === 'takim-yapisi' ? 'active' : ''}`}>
            <div className="accordion-header" onClick={() => toggleSection('takim-yapisi')}>
              <h2>👥 Takım Yapısı ve Katılım</h2>
              <span className="accordion-icon">▼</span>
            </div>
            {activeSection === 'takim-yapisi' && (
              <div className="accordion-content">
                <h3 className="brand">Takım Üyeleri</h3>
                <ul style={{ lineHeight: 1.8 }}>
                  <li>👨‍🎓 Öğrenci sayısı: En az 5, en fazla 15</li>
                  <li>👩‍🏫 Danışman öğretmen: En fazla 3</li>
                  <li>🎓 Lise seviyesi liderliğinde olmalı</li>
                  <li>📚 En az 3 ortaokul öğrencisi içermeli</li>
                  <li>⚖️ Karma okullarda dengeli cinsiyet dağılımı tavsiye edilir</li>
                </ul>

                <h3 className="brand" style={{ marginTop: 24 }}>Portfolyo ve Sunum</h3>
                <p>
                  Takımlar yarışma sürecinde bir portfolyo hazırlamalıdır:
                </p>
                <ul style={{ lineHeight: 1.8, marginTop: 12 }}>
                  <li>📄 Maksimum 15 sayfa (A4, min. 10pt font)</li>
                  <li>📋 İçerik: Takım yapısı, planlama, süreç, sponsorluk, robot tasarımı</li>
                  <li>🎤 Jüri mülakatı: 8 dakika kesintisiz sunum + 5 dakika soru-cevap</li>
                  <li>🔗 Harici linkler değerlendirmeye alınmaz</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
} 