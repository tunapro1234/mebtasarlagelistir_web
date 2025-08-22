import { Link } from 'react-router-dom'
import hero from '@/assets/hero.jpg'

export default function Home() {
  return (
    <>
      <section className="hero-section section" style={{
        paddingTop: 100, 
        paddingBottom: 100,
        backgroundImage: `linear-gradient(rgba(12, 74, 110, 0.7), rgba(7, 89, 133, 0.85)), url(${hero})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        position: 'relative'
      }}>
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <h1 style={{ 
            fontSize: 48, 
            marginBottom: 16, 
            lineHeight: 1.2,
            animation: 'fadeInUp 0.8s ease'
          }}>
            TASARLA GELİŞTİR <span className="brand">ROBOT YARIŞMASI</span>
          </h1>
          <p style={{ 
            opacity: 0.95, 
            maxWidth: 720, 
            margin: '0 auto 32px',
            fontSize: 20,
            animation: 'fadeInUp 0.8s ease 0.2s backwards'
          }}>
            <strong>Tema: İstanbul ve Su</strong> — Geleceğin mühendisleri, teknoloji ve inovasyonla buluşuyor. 
            3-4 Aralık 2025 tarihlerinde düzenlenecek heyecanlı yarışmaya hazır mısın?
          </p>
          
          <div style={{ 
            display: 'flex', 
            gap: 16, 
            justifyContent: 'center', 
            flexWrap: 'wrap',
            animation: 'fadeInUp 0.8s ease 0.4s backwards'
          }}>
            <Link className="btn-primary" to="/kurallar" style={{ minWidth: 150 }}>
              📖 Kuralları İncele
            </Link>
            <Link className="btn-primary" to="/takvim" style={{ minWidth: 150 }}>
              📅 Takvimi Gör
            </Link>
            <Link className="btn-primary" to="/oduller" style={{ minWidth: 150 }}>
              🏆 Ödüller
            </Link>
            <Link className="btn-primary" to="/destekciler" style={{ minWidth: 150 }}>
              🤝 Destekçiler
            </Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 60, paddingBottom: 60 }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: 40, color: 'var(--gold-500)' }}>
            Hızlı Bilgiler
          </h2>
          
          <div className="grid cols-4">
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 36, marginBottom: 8 }}>🎯</div>
              <h3 style={{ color: 'var(--blue-400)', marginBottom: 8 }}>Hedef</h3>
              <p style={{ fontSize: 14 }}>Su kürelerini bendlere ve sarnıçlara taşı</p>
            </div>
            
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 36, marginBottom: 8 }}>⏱️</div>
              <h3 style={{ color: 'var(--blue-400)', marginBottom: 8 }}>Süre</h3>
              <p style={{ fontSize: 14 }}>30 sn OKS + 120 sn SKS</p>
            </div>
            
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 36, marginBottom: 8 }}>🤖</div>
              <h3 style={{ color: 'var(--blue-400)', marginBottom: 8 }}>Takımlar</h3>
              <p style={{ fontSize: 14 }}>4 robot, 2'şerli ittifaklar</p>
            </div>
            
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 36, marginBottom: 8 }}>🏗️</div>
              <h3 style={{ color: 'var(--blue-400)', marginBottom: 8 }}>Final</h3>
              <p style={{ fontSize: 14 }}>Su kemerine tırman +15 puan</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ 
        paddingTop: 60, 
        paddingBottom: 60,
        background: 'rgba(255,255,255,0.03)'
      }}>
        <div className="container">
          <div className="grid cols-2">
            <div className="card" style={{ 
              background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(245, 158, 11, 0.05) 100%)',
              borderColor: 'var(--gold-500)'
            }}>
              <h3 style={{ marginBottom: 16 }}>📚 Yarışmaya Hazırlık</h3>
              <p style={{ marginBottom: 16 }}>
                Yarışma kurallarını inceleyin, robot tasarımınızı planlayın ve takımınızı oluşturun. 
                Teknik dokümanlara ve örnek kodlara GitHub üzerinden ulaşabilirsiniz.
              </p>
              <div style={{ display: 'flex', gap: 12 }}>
                <Link to="/kurallar" className="btn-primary">
                  Kurallara Git
                </Link>
                <a 
                  href="https://github.com/tunapro1234/probot_lib" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn-primary"
                  style={{ background: 'var(--blue-600)' }}
                >
                  GitHub
                </a>
              </div>
            </div>
            
            <div className="card" style={{ 
              background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.15) 0%, rgba(14, 165, 233, 0.05) 100%)',
              borderColor: 'var(--blue-500)'
            }}>
              <h3 style={{ marginBottom: 16 }}>✉️ İletişimde Kalın</h3>
              <p style={{ marginBottom: 16 }}>
                Yarışma güncellemeleri, teknik destek ve sorularınız için bizimle iletişime geçin. 
                En geç 2 iş günü içinde dönüş sağlıyoruz.
              </p>
              <div style={{ display: 'flex', gap: 12 }}>
                <Link to="/iletisim" className="btn-primary">
                  İletişim Bilgileri
                </Link>
                <a 
                  href="mailto:mebtasarlagelistir@gmail.com" 
                  className="btn-primary"
                  style={{ background: 'var(--blue-600)' }}
                >
                  E-posta Gönder
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 60, paddingBottom: 60 }}>
        <div className="container">
          <div className="card" style={{ 
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(14, 165, 233, 0.1) 100%)',
            borderColor: 'var(--gold-500)',
            padding: 40
          }}>
            <h2 style={{ marginBottom: 20, color: 'var(--gold-500)' }}>
              🚀 Yarışmaya Katılmaya Hazır Mısın?
            </h2>
            <p style={{ marginBottom: 24, maxWidth: 600, margin: '0 auto 24px' }}>
              Türkiye'nin en büyük lise robotik yarışmasında yerinizi alın. Takımınızı kurun, 
              robotunuzu tasarlayın ve İstanbul'un su kaynaklarını koruma görevine katılın!
            </p>
            <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontSize: 36, fontWeight: 'bold', color: 'var(--gold-500)' }}>500+</div>
                <div style={{ opacity: 0.8 }}>Öğrenci</div>
              </div>
              <div>
                <div style={{ fontSize: 36, fontWeight: 'bold', color: 'var(--gold-500)' }}>50+</div>
                <div style={{ opacity: 0.8 }}>Takım</div>
              </div>
              <div>
                <div style={{ fontSize: 36, fontWeight: 'bold', color: 'var(--gold-500)' }}>30+</div>
                <div style={{ opacity: 0.8 }}>Okul</div>
              </div>
              <div>
                <div style={{ fontSize: 36, fontWeight: 'bold', color: 'var(--gold-500)' }}>9</div>
                <div style={{ opacity: 0.8 }}>Ödül Kategorisi</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


