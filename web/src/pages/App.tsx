import { Link } from 'react-router-dom'
import Home from './Home'

export default function App() {
  return (
    <div>
      <header className="site-header">
        <div className="container" style={{display:'flex',alignItems:'center',justifyContent:'space-between',height:64}}>
          <div style={{display:'flex',gap:12,alignItems:'center'}}>
            <div style={{width:36,height:36,borderRadius:8,background:'var(--gold-600)'}} />
            <strong className="brand">Tasarla Geliştir</strong>
          </div>
          <nav style={{display:'flex',gap:16,fontWeight:600}}>
            <Link to="/">Ana Sayfa</Link>
            <a href="#kurallar">Kurallar</a>
            <a href="#takvim">Takvim</a>
            <a href="#oduller">Ödüller</a>
            <a href="#iletisim">İletişim</a>
          </nav>
        </div>
      </header>

      <main>
        <Home />
      </main>

      <footer className="site-footer">
        <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:12,flexWrap:'wrap'}}>
          <span>© 2025 İstanbul İl Milli Eğitim Müdürlüğü</span>
          <span className="brand">mebtasarlagelistir.com</span>
        </div>
      </footer>
    </div>
  )
}


