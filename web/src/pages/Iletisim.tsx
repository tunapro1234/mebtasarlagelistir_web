import React from 'react'

export default function Iletisim() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="brand" style={{ marginTop: 0, marginBottom: 8 }}>İletişim</h1>
        <p style={{ marginBottom: 40, opacity: 0.9 }}>
          Tasarla Geliştir Robot Yarışması hakkında sorularınız için bizimle iletişime geçebilirsiniz. 
          Teknik destek, kayıt işlemleri ve genel bilgi için aşağıdaki kanalları kullanabilirsiniz.
        </p>

        <div className="grid cols-2" style={{ marginBottom: 40 }}>
          <div className="card" style={{ 
            background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(245, 158, 11, 0.05) 100%)',
            borderColor: 'var(--gold-500)'
          }}>
            <h2 style={{ color: 'var(--gold-500)', marginBottom: 20 }}>📧 E-posta</h2>
            <p style={{ marginBottom: 16 }}>
              Yarışma ile ilgili tüm sorularınız için resmi e-posta adresimiz:
            </p>
            <a 
              href="mailto:mebtasarlagelistir@gmail.com" 
              className="btn-primary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}
            >
              <span>mebtasarlagelistir@gmail.com</span>
            </a>
            <p style={{ marginTop: 16, fontSize: 14, opacity: 0.8 }}>
              E-postalarınıza en geç 2 iş günü içinde dönüş yapılmaktadır.
            </p>
          </div>

          <div className="card">
            <h2 style={{ color: 'var(--blue-500)', marginBottom: 20 }}>🕐 Destek Saatleri</h2>
            <ul style={{ lineHeight: 2 }}>
              <li>📅 <strong>Pazartesi - Cuma:</strong> 09:00 - 17:00</li>
              <li>📅 <strong>Cumartesi:</strong> 10:00 - 14:00</li>
              <li>🚫 <strong>Pazar:</strong> Kapalı</li>
            </ul>
            <p style={{ marginTop: 16, fontSize: 14, opacity: 0.8 }}>
              Resmi tatil günlerinde destek verilmemektedir.
            </p>
          </div>
        </div>

        <h2 style={{ marginBottom: 20 }}>❓ Sık Sorulan Konular</h2>
        <div className="grid cols-3" style={{ marginBottom: 40 }}>
          <div className="card">
            <h4 style={{ color: 'var(--blue-400)', marginBottom: 12 }}>📝 Kayıt İşlemleri</h4>
            <ul style={{ fontSize: 14, lineHeight: 1.8 }}>
              <li>• Takım oluşturma</li>
              <li>• Kayıt formları</li>
              <li>• Son başvuru tarihleri</li>
              <li>• Katılım şartları</li>
            </ul>
          </div>
          
          <div className="card">
            <h4 style={{ color: 'var(--blue-400)', marginBottom: 12 }}>🔧 Teknik Destek</h4>
            <ul style={{ fontSize: 14, lineHeight: 1.8 }}>
              <li>• Robot özellikleri</li>
              <li>• Programlama sorunları</li>
              <li>• Donanım gereksinimleri</li>
              <li>• Kural açıklamaları</li>
            </ul>
          </div>
          
          <div className="card">
            <h4 style={{ color: 'var(--blue-400)', marginBottom: 12 }}>📍 Organizasyon</h4>
            <ul style={{ fontSize: 14, lineHeight: 1.8 }}>
              <li>• Yarışma yeri ve zamanı</li>
              <li>• Konaklama önerileri</li>
              <li>• Ulaşım bilgileri</li>
              <li>• Etkinlik programı</li>
            </ul>
          </div>
        </div>

        <div className="card" style={{ 
          background: 'rgba(14, 165, 233, 0.1)',
          borderColor: 'var(--blue-500)'
        }}>
          <h3 style={{ marginBottom: 16 }}>💡 Hızlı İpuçları</h3>
          <div className="grid cols-2">
            <div>
              <h4 style={{ color: 'var(--gold-500)', marginBottom: 8 }}>E-posta Gönderirken:</h4>
              <ul style={{ fontSize: 14, lineHeight: 1.8 }}>
                <li>• Konu başlığına takım adınızı yazın</li>
                <li>• Okul ve il bilginizi belirtin</li>
                <li>• Sorularınızı net ve kısa ifade edin</li>
                <li>• Varsa ekran görüntüleri ekleyin</li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: 'var(--gold-500)', marginBottom: 8 }}>Acil Durumlar İçin:</h4>
              <p style={{ fontSize: 14, lineHeight: 1.8 }}>
                Yarışma günlerinde acil teknik destek için yarışma alanında bulunan 
                teknik destek masasına başvurunuz. E-posta konusuna "ACİL" yazarak 
                öncelikli değerlendirme talep edebilirsiniz.
              </p>
            </div>
          </div>
        </div>

        <div className="card" style={{ 
          marginTop: 40,
          textAlign: 'center',
          background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(14, 165, 233, 0.1) 100%)'
        }}>
          <h3 style={{ marginBottom: 16 }}>🚀 Sosyal Medya</h3>
          <p style={{ marginBottom: 20 }}>
            Yarışma güncellemeleri ve duyurular için bizi takip edin!
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href="https://github.com/tunapro1234/probot_lib" 
              target="_blank" 
              rel="noreferrer" 
              className="btn-primary"
            >
              GitHub - Örnek Kodlar
            </a>
            <span style={{ 
              padding: '12px 24px',
              background: 'rgba(255,255,255,0.1)',
              borderRadius: 8,
              opacity: 0.6
            }}>
              Diğer platformlar yakında...
            </span>
          </div>
        </div>
      </div>
    </section>
  )
} 