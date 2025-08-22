import React from 'react'

export default function Destekciler() {
  const sponsors = [
    {
      name: 'İstanbul İl Milli Eğitim Müdürlüğü',
      description: 'Yarışmanın ana organizatörü ve resmi eğitim paydaşı. İstanbul genelinde eğitim kalitesini artırmak için teknoloji ve inovasyonu destekler.',
      website: 'https://istanbul.meb.gov.tr/',
      category: 'organizator'
    },
    {
      name: 'Fikret Yüksel Vakfı',
      description: 'Bilim, teknoloji ve eğitim alanında öğrencilere destek sağlayan, STEM eğitimini teşvik eden köklü bir vakıf.',
      website: null,
      category: 'main'
    },
    {
      name: 'ACROME Robotik',
      description: 'Eğitim robotları ve STEM kitleri üreten, yerli teknoloji şirketi. Yarışmaya teknik ekipman desteği sağlıyor.',
      website: 'https://acrome.net/',
      category: 'technical'
    },
    {
      name: 'Wattos Otomasyon',
      description: 'Endüstriyel otomasyon ve kontrol sistemleri alanında uzman firma. Yarışmaya sensör ve elektronik komponent desteği veriyor.',
      website: null,
      category: 'technical'
    },
    {
      name: 'Boardoza',
      description: 'Elektronik geliştirme kartları ve maker ekipmanları tedarikçisi. Öğrencilere uygun fiyatlı elektronik çözümler sunuyor.',
      website: null,
      category: 'supplier'
    },
    {
      name: 'NFR Products',
      description: 'Mekanik komponentler ve yapısal malzemeler konusunda destek sağlayan tedarikçi firma.',
      website: null,
      category: 'supplier'
    }
  ]

  return (
    <section className="section">
      <div className="container">
        <h1 className="brand" style={{ marginTop: 0, marginBottom: 8 }}>Yarışma Destekçileri</h1>
        <p style={{ marginBottom: 40, opacity: 0.9 }}>
          Tasarla Geliştir Robot Yarışması'nı mümkün kılan değerli destekçilerimiz ve sponsorlarımız. 
          Bu kurumlar, gençlerimizin teknoloji ve mühendislik alanında gelişmesine katkı sağlıyor.
        </p>

        {/* Teşekkür mesajı */}
        <div className="card" style={{ 
          marginBottom: 40, 
          background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(14, 165, 233, 0.1) 100%)',
          borderColor: 'var(--gold-500)',
          textAlign: 'center'
        }}>
          <h3 style={{ marginBottom: 12 }}>🙏 Teşekkürler</h3>
          <p style={{ margin: 0 }}>
            Yarışmamıza verdikleri destek için tüm sponsorlarımıza ve paydaşlarımıza teşekkür ederiz. 
            Sizin katkılarınız sayesinde binlerce öğrenci robotik ve teknoloji ile tanışıyor.
          </p>
        </div>

        {/* Sponsors grid */}
        <div className="grid cols-3">
          {sponsors.map((sponsor, index) => (
            <div 
              key={index} 
              className="card" 
              style={{ 
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                minHeight: 200,
                background: sponsor.category === 'organizator' 
                  ? 'linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(245, 158, 11, 0.05) 100%)'
                  : 'rgba(255,255,255,0.08)',
                borderColor: sponsor.category === 'organizator' ? 'var(--gold-500)' : undefined
              }}
            >
              {/* Category badge */}
              <div style={{
                position: 'absolute',
                top: -10,
                right: 16,
                background: sponsor.category === 'organizator' ? 'var(--gold-600)' 
                  : sponsor.category === 'main' ? 'var(--blue-600)'
                  : sponsor.category === 'technical' ? 'var(--blue-500)'
                  : 'var(--blue-400)',
                color: '#1a1a1a',
                padding: '4px 12px',
                borderRadius: 12,
                fontSize: 12,
                fontWeight: 600
              }}>
                {sponsor.category === 'organizator' ? 'ORGANİZATÖR' 
                  : sponsor.category === 'main' ? 'ANA DESTEK'
                  : sponsor.category === 'technical' ? 'TEKNİK DESTEK'
                  : 'TEDARİKÇİ'}
              </div>

              <h3 style={{ marginTop: 20, marginBottom: 12, color: 'var(--gold-500)' }}>
                {sponsor.name}
              </h3>
              
              <p style={{ flex: 1, marginBottom: 20, lineHeight: 1.6 }}>
                {sponsor.description}
              </p>
              
              {sponsor.website ? (
                <a 
                  href={sponsor.website} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn-primary"
                  style={{ alignSelf: 'flex-start' }}
                >
                  Web Sitesini Ziyaret Et →
                </a>
              ) : (
                <span style={{ 
                  opacity: 0.6, 
                  fontSize: 14,
                  fontStyle: 'italic'
                }}>
                  Web sitesi yakında eklenecek
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Sponsor olma çağrısı */}
        <div className="card" style={{ 
          marginTop: 40, 
          background: 'rgba(14, 165, 233, 0.1)',
          borderColor: 'var(--blue-500)',
          textAlign: 'center'
        }}>
          <h3 style={{ marginBottom: 16 }}>🤝 Sponsor Olmak İster Misiniz?</h3>
          <p style={{ marginBottom: 20 }}>
            Geleceğin mühendis ve bilim insanlarının yetişmesine katkı sağlamak için yarışmamıza sponsor olabilirsiniz. 
            Sponsorluk seçenekleri ve detaylı bilgi için bizimle iletişime geçin.
          </p>
          <a href="mailto:mebtasarlagelistir@gmail.com" className="btn-primary">
            Sponsorluk İçin İletişime Geçin
          </a>
        </div>
      </div>
    </section>
  )
} 