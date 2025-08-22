import hero from '@/assets/hero.jpg'

export default function Home() {
  return (
    <>
      <section className="section" style={{paddingTop:72, backgroundImage: `linear-gradient(rgba(10,43,46,.7), rgba(10,43,46,.9)), url(${hero})`, backgroundSize:'cover', backgroundPosition:'center'}}>
        <div className="container" style={{textAlign:'center'}}>
          <h1 style={{fontSize:42, marginBottom:12, lineHeight:1.2}}>
            TASARLA GELİŞTİR <span className="brand">ROBOT YARIŞMASI</span>
          </h1>
          <p style={{opacity:.9, maxWidth:720, margin:'0 auto 24px'}}>
            Tema: İstanbul ve Su — Final versiyonu Eylül başında yayınlanacaktır. Yarışma 3–4 Aralık 2025 tarihlerinde gerçekleştirilecektir.
          </p>
          <a className="btn-primary" href="#takvim">Takvimi Gör</a>
        </div>
      </section>

      <section id="kurallar" className="section">
        <div className="container">
          <h2 className="brand" style={{marginTop:0}}>Oyun Özeti</h2>
          <div className="grid cols-3">
            <div className="card">
              <h3>Tema ve Amaç</h3>
              <p>Su kürelerini bendlere ve sarnıçlara taşı, son 30 sn’de kemere tırman.</p>
            </div>
            <div className="card">
              <h3>Maç Akışı</h3>
              <p>30 sn OKS + 120 sn SKS. Rakip bend/sarnıca atılan toplar rakibe puan.</p>
            </div>
            <div className="card">
              <h3>Puan (Kısa)</h3>
              <p>OKS: Bend 1/2/3 = 4/6/8; Sarnıç 7. SKS: 2/4/6; Sarnıç 5. Kemer 15.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="takvim" className="section" style={{background:'rgba(255,255,255,0.03)'}}>
        <div className="container">
          <h2 className="brand" style={{marginTop:0}}>Takvim</h2>
          <ul className="grid cols-2">
            <li className="card"><strong>19 Haziran 2025</strong> — Sezon Başlangıç Semineri</li>
            <li className="card"><strong>26 Haziran 2025</strong> — Kesin kayıtlar başlar</li>
            <li className="card"><strong>24 Eylül 2025</strong> — İkinci bilgilendirme</li>
            <li className="card"><strong>1 Ekim 2025</strong> — Kesin kayıtlar biter</li>
            <li className="card"><strong>25 Kasım 2025</strong> — Listelerin teslimi</li>
            <li className="card"><strong>3–4 Aralık 2025</strong> — Yarışma Tarihi</li>
          </ul>
        </div>
      </section>

      <section id="oduller" className="section">
        <div className="container">
          <h2 className="brand" style={{marginTop:0}}>Ödüller</h2>
          <p className="card">İlham Verici Takım, Yaratıcı Tasarım, Kontrol, Kalite, İletişim, Takım Ruhu, Usta‑Çırak, İlham Veren Danışman, Jüri Özel ve performans odaklı ödüller.</p>
        </div>
      </section>

      <section id="iletisim" className="section" style={{background:'rgba(255,255,255,0.03)'}}>
        <div className="container grid cols-2">
          <div className="card">
            <h3>İletişim</h3>
            <p><a href="mailto:mebtasarlagelistir@gmail.com" className="brand">mebtasarlagelistir@gmail.com</a></p>
            <p><a href="https://groups.google.com/g/istmebtasarlagelistir" target="_blank" rel="noreferrer" className="brand">Google Groups</a></p>
          </div>
          <div className="card">
            <h3>Kaynaklar</h3>
            <p><a className="brand" href="https://github.com/tunapro1234/probot_lib" target="_blank" rel="noreferrer">probot_lib</a></p>
          </div>
        </div>
      </section>
    </>
  )
}


