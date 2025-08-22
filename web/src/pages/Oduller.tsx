import React from 'react'

export default function Oduller() {
  const awards = [
    {
      title: '🏆 İlham Verici Takım',
      description: 'Diğer takımlara ilham veren, pozitif enerji yayan ve yarışma ruhunu en iyi yansıtan takım.',
      criteria: [
        'Takım ruhu ve dayanışma',
        'Diğer takımlarla olumlu iletişim',
        'Sportmenlik ve fair play'
      ],
      skills: ['Liderlik', 'Takım çalışması', 'Sosyal beceriler', 'Empati']
    },
    {
      title: '🎨 Yaratıcı Tasarım',
      description: 'En özgün ve yaratıcı robot tasarımını ortaya koyan takım.',
      criteria: [
        'Özgün mekanik çözümler',
        'Estetik ve fonksiyonel tasarım',
        'Malzeme kullanımında yaratıcılık'
      ],
      skills: ['Yaratıcı düşünce', 'Problem çözme', 'CAD tasarım', 'Mühendislik']
    },
    {
      title: '⚙️ Kontrol Ödülü',
      description: 'Robotunu en hassas ve etkili şekilde kontrol eden takım.',
      criteria: [
        'Otonom modda başarı',
        'Hassas hareket kontrolü',
        'Yazılım kalitesi ve karmaşıklığı'
      ],
      skills: ['Programlama', 'Algoritma geliştirme', 'Sensör entegrasyonu', 'Kontrol sistemleri']
    },
    {
      title: '✨ Kalite Ödülü',
      description: 'İşçilik kalitesi ve profesyonel yaklaşımıyla öne çıkan takım.',
      criteria: [
        'Temiz ve düzenli robot yapısı',
        'Kablolama ve montaj kalitesi',
        'Güvenlik standartlarına uyum'
      ],
      skills: ['Detay odaklılık', 'Kalite kontrol', 'Proje yönetimi', 'Dokümantasyon']
    },
    {
      title: '💬 İletişim Ödülü',
      description: 'Sunum ve iletişim becerilerinde üstün performans gösteren takım.',
      criteria: [
        'Etkili portfolyo hazırlama',
        'Jüri sunumunda başarı',
        'Teknik konuları anlaşılır anlatma'
      ],
      skills: ['Sunum becerileri', 'Teknik yazım', 'Görsel tasarım', 'Hikaye anlatımı']
    },
    {
      title: '🤝 Takım Ruhu',
      description: 'En uyumlu çalışan ve dayanışma gösteren takım.',
      criteria: [
        'Görev paylaşımı ve organizasyon',
        'Üyeler arası uyum',
        'Sorunlara birlikte çözüm üretme'
      ],
      skills: ['İşbirliği', 'Zaman yönetimi', 'Çatışma çözümü', 'Organizasyon']
    },
    {
      title: '👨‍🏫 Usta-Çırak Ödülü',
      description: 'Bilgi transferi ve mentorluk konusunda başarılı takım.',
      criteria: [
        'Lise-ortaokul öğrenci etkileşimi',
        'Bilgi paylaşımı ve öğretme',
        'Deneyim aktarımı'
      ],
      skills: ['Mentorluk', 'Öğretme', 'Sabır', 'Pedagojik yaklaşım']
    },
    {
      title: '🌟 İlham Veren Danışman',
      description: 'Öğrencilere en iyi rehberlik eden danışman öğretmen.',
      criteria: [
        'Öğrenci motivasyonu sağlama',
        'Teknik ve moral destek',
        'Öğrenme ortamı yaratma'
      ],
      skills: ['Koçluk', 'Motivasyon', 'Rehberlik', 'Eğitim liderliği']
    },
    {
      title: '⭐ Jüri Özel Ödülü',
      description: 'Jürinin takdir ettiği özel bir başarı veya yaklaşım.',
      criteria: [
        'Beklenmedik başarılar',
        'Örnek davranışlar',
        'Özel durumlar ve hikayeler'
      ],
      skills: ['Değişken - başarıya göre belirlenir']
    }
  ]

  return (
    <section className="section">
      <div className="container">
        <h1 className="brand" style={{ marginTop: 0, marginBottom: 8 }}>Ödüller ve Başarı Kriterleri</h1>
        <p style={{ marginBottom: 32, opacity: 0.9 }}>
          Tasarla Geliştir Robot Yarışması'nda yalnızca saha performansı değil, takım çalışması, yaratıcılık ve 
          mühendislik becerileri de ödüllendirilir. Her ödül, öğrencilere farklı yetkinlikler kazandırır.
        </p>

        <div className="grid cols-2" style={{ marginBottom: 32 }}>
          <div className="card" style={{ background: 'rgba(245, 158, 11, 0.1)', borderColor: 'var(--gold-500)' }}>
            <h3>🎯 Performans Ödülleri</h3>
            <p>Saha performansına dayalı ödüller, sıralama maçları sonucunda belirlenir ve takımların 
            robot tasarımı ile kontrol becerilerini ödüllendirir.</p>
          </div>
          <div className="card" style={{ background: 'rgba(14, 165, 233, 0.1)', borderColor: 'var(--blue-500)' }}>
            <h3>🌟 Jüri Ödülleri</h3>
            <p>Jüri değerlendirmesi ile verilen ödüller, portfolyo, sunum ve takım dinamiklerini 
            değerlendirir. Teknik başarının ötesinde soft skill'leri geliştirir.</p>
          </div>
        </div>

        <div className="accordion" style={{ marginTop: 40 }}>
          {awards.map((award, index) => (
            <div key={index} className="card" style={{ marginBottom: 24 }}>
              <h2 style={{ marginBottom: 16, color: 'var(--gold-500)' }}>{award.title}</h2>
              <p style={{ marginBottom: 20, fontSize: 16 }}>{award.description}</p>
              
              <div className="grid cols-2">
                <div>
                  <h4 style={{ marginBottom: 12, color: 'var(--blue-400)' }}>📋 Kazanma Kriterleri</h4>
                  <ul style={{ lineHeight: 1.8 }}>
                    {award.criteria.map((criterion, i) => (
                      <li key={i}>• {criterion}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 style={{ marginBottom: 12, color: 'var(--blue-400)' }}>💡 Kazandırdığı Beceriler</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {award.skills.map((skill, i) => (
                      <span 
                        key={i} 
                        style={{
                          background: 'rgba(255,255,255,0.1)',
                          padding: '4px 12px',
                          borderRadius: 16,
                          fontSize: 14,
                          border: '1px solid rgba(255,255,255,0.2)'
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="card" style={{ 
          marginTop: 40, 
          background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(14, 165, 233, 0.1) 100%)',
          borderColor: 'var(--gold-500)'
        }}>
          <h3 style={{ marginBottom: 16 }}>🎓 Neden Bu Ödüller Önemli?</h3>
          <p>
            Tasarla Geliştir Robot Yarışması ödülleri, öğrencilerin 21. yüzyıl becerilerini geliştirmesini hedefler. 
            Her ödül kategorisi, üniversite başvurularında ve iş hayatında değerli olan farklı yetkinlikleri ön plana çıkarır:
          </p>
          <ul style={{ lineHeight: 1.8, marginTop: 16 }}>
            <li>• <strong>STEM Becerileri:</strong> Mühendislik, programlama ve problem çözme</li>
            <li>• <strong>Soft Skills:</strong> İletişim, takım çalışması ve liderlik</li>
            <li>• <strong>Proje Yönetimi:</strong> Planlama, organizasyon ve zaman yönetimi</li>
            <li>• <strong>Yaratıcılık:</strong> İnovatif düşünce ve özgün çözümler</li>
          </ul>
        </div>
      </div>
    </section>
  )
} 