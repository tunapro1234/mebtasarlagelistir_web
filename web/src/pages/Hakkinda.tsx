import React from 'react'

export default function Hakkinda() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="brand" style={{ marginTop: 0, marginBottom: 8 }}>Hakkımızda</h1>
        <p style={{ marginBottom: 40, opacity: 0.9, fontSize: 18 }}>
          Tasarla Geliştir Robot Yarışması, İstanbul İl Milli Eğitim Müdürlüğü tarafından düzenlenen, 
          öğrencilerin 21. yüzyıl becerilerini geliştirmeyi hedefleyen kapsamlı bir STEM eğitim programıdır.
        </p>

        <div className="grid cols-2" style={{ marginBottom: 40 }}>
          <div className="card">
            <h2 style={{ color: 'var(--gold-500)' }}>🎯 Misyonumuz</h2>
            <p>
              Öğrencilere mühendislik, tasarım ve takım çalışması becerilerini uygulamalı olarak öğretmek, 
              teknoloji ve inovasyona olan ilgiyi artırmak ve geleceğin mucit ve girişimcilerini yetiştirmektir.
            </p>
            <p>
              Yarışma sürecinde öğrenciler gerçek mühendislik problemleriyle karşılaşır, çözüm üretir ve 
              projelerini hayata geçirirler. Bu deneyim, teorik bilgiyi pratiğe dökme fırsatı sunar.
            </p>
          </div>

          <div className="card">
            <h2 style={{ color: 'var(--gold-500)' }}>🌟 Vizyonumuz</h2>
            <p>
              Türkiye'nin teknoloji ve mühendislik alanında küresel rekabet gücünü artıracak, yaratıcı ve 
              yenilikçi nesiller yetiştirmek. Her öğrencinin potansiyelini keşfetmesine olanak tanımak.
            </p>
            <p>
              Yarışmamız, sadece teknik beceriler değil, aynı zamanda liderlik, iletişim ve problem çözme 
              gibi hayati soft skill'lerin gelişimine de odaklanır.
            </p>
          </div>
        </div>

        <div className="card" style={{ 
          marginBottom: 40, 
          background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(14, 165, 233, 0.1) 100%)',
          borderColor: 'var(--gold-500)'
        }}>
          <h2 style={{ marginBottom: 20 }}>📊 Yarışma Etki Alanı</h2>
          <div className="grid cols-4">
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 32, fontWeight: 'bold', color: 'var(--gold-500)' }}>500+</div>
              <div style={{ opacity: 0.8 }}>Öğrenci</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 32, fontWeight: 'bold', color: 'var(--gold-500)' }}>50+</div>
              <div style={{ opacity: 0.8 }}>Takım</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 32, fontWeight: 'bold', color: 'var(--gold-500)' }}>30+</div>
              <div style={{ opacity: 0.8 }}>Okul</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 32, fontWeight: 'bold', color: 'var(--gold-500)' }}>2</div>
              <div style={{ opacity: 0.8 }}>Gün Etkinlik</div>
            </div>
          </div>
        </div>

        <h2 style={{ marginBottom: 20 }}>🚀 Yarışma Süreci</h2>
        <div className="accordion">
          <div className="card" style={{ marginBottom: 16 }}>
            <h3>1. Hazırlık Dönemi (Haziran - Eylül)</h3>
            <p>
              Takımlar kurulur, ilk eğitimler verilir. Öğrenciler robot tasarımı, programlama ve mekanik 
              konularında temel bilgileri edinir. Mentorlar ve danışman öğretmenler rehberlik sağlar.
            </p>
          </div>

          <div className="card" style={{ marginBottom: 16 }}>
            <h3>2. Geliştirme Dönemi (Eylül - Kasım)</h3>
            <p>
              Takımlar robotlarını tasarlar ve üretir. Deneme-yanılma yöntemiyle öğrenme gerçekleşir. 
              Teknik problemler çözülür, stratejiler geliştirilir. Takım içi işbirliği güçlenir.
            </p>
          </div>

          <div className="card" style={{ marginBottom: 16 }}>
            <h3>3. Yarışma Günleri (Aralık)</h3>
            <p>
              İki gün süren heyecanlı yarışma etkinliği. İlk gün teftiş ve deneme maçları, ikinci gün 
              sıralama maçları ve finaller. Jüri sunumları ve ödül töreni ile tamamlanır.
            </p>
          </div>
        </div>

        <h2 style={{ marginTop: 40, marginBottom: 20 }}>💡 Neden Robotik?</h2>
        <div className="grid cols-3">
          <div className="card">
            <h4 style={{ color: 'var(--blue-400)' }}>Disiplinlerarası Öğrenme</h4>
            <p>
              Robotik; matematik, fizik, bilgisayar bilimi, mühendislik ve tasarımı bir araya getirir. 
              Öğrenciler farklı disiplinleri entegre etmeyi öğrenir.
            </p>
          </div>
          <div className="card">
            <h4 style={{ color: 'var(--blue-400)' }}>Gerçek Dünya Problemleri</h4>
            <p>
              Yarışma görevleri, gerçek hayattan ilham alır. İstanbul ve Su teması, sürdürülebilirlik 
              ve kaynak yönetimi konularında farkındalık yaratır.
            </p>
          </div>
          <div className="card">
            <h4 style={{ color: 'var(--blue-400)' }}>Kariyer Hazırlığı</h4>
            <p>
              Edinilen beceriler, öğrencileri üniversite ve iş hayatına hazırlar. STEM kariyerleri 
              için güçlü bir temel oluşturur.
            </p>
          </div>
        </div>

        <div className="card" style={{ 
          marginTop: 40, 
          background: 'rgba(14, 165, 233, 0.1)',
          borderColor: 'var(--blue-500)'
        }}>
          <h3 style={{ marginBottom: 16 }}>🌍 Sosyal Sorumluluk</h3>
          <p>
            Tasarla Geliştir Robot Yarışması, sadece bir yarışma değil, aynı zamanda bir eğitim hareketidir. 
            Tüm sosyoekonomik kesimlerden öğrencilere eşit fırsat sunmayı hedefler. Destekçilerimiz sayesinde, 
            maddi imkanları kısıtlı okullar da yarışmaya katılabilmektedir.
          </p>
          <p style={{ marginTop: 16, marginBottom: 0 }}>
            <strong>Hedefimiz:</strong> Her çocuğun içindeki potansiyeli ortaya çıkarmak ve Türkiye'nin 
            teknoloji üretim kapasitesine katkıda bulunacak nesiller yetiştirmek.
          </p>
        </div>
      </div>
    </section>
  )
} 