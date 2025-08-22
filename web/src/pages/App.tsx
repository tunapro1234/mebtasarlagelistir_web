import { Link, Outlet } from 'react-router-dom'
import React from 'react'

export default function App() {
  return (
    <div style={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
      <header className="site-header">
        <div className="container" style={{display:'flex',alignItems:'center',justifyContent:'space-between',height:72}}>
          <div style={{display:'flex',gap:16,alignItems:'center'}}>
            <div style={{
              width:40,
              height:40,
              borderRadius:10,
              background:'linear-gradient(135deg, var(--gold-600) 0%, var(--gold-500) 100%)',
              display:'flex',
              alignItems:'center',
              justifyContent:'center',
              fontWeight:'bold',
              color:'#1a1a1a',
              fontSize:20
            }}>TG</div>
            <div>
              <strong className="brand" style={{fontSize:20}}>Tasarla Geliştir</strong>
              <div style={{fontSize:12, opacity:0.8}}>Robot Yarışması 2025</div>
            </div>
          </div>
          <nav>
            <Link to="/" className="nav-tooltip" data-tooltip="Ana sayfa ve hızlı erişim">Ana Sayfa</Link>
            <Link to="/kurallar" className="nav-tooltip" data-tooltip="Yarışma kuralları ve dokümanlar">Kurallar</Link>
            <Link to="/takvim" className="nav-tooltip" data-tooltip="Önemli tarihler ve etkinlik takvimi">Takvim</Link>
            <Link to="/oduller" className="nav-tooltip" data-tooltip="Ödül kategorileri ve kazanım kriterleri">Ödüller</Link>
            <Link to="/destekciler" className="nav-tooltip" data-tooltip="Yarışma destekçileri ve sponsorlar">Destekçiler</Link>
            <Link to="/hakkinda" className="nav-tooltip" data-tooltip="Yarışma hakkında detaylı bilgi">Hakkında</Link>
            <Link to="/iletisim" className="nav-tooltip" data-tooltip="Bizimle iletişime geçin">İletişim</Link>
          </nav>
        </div>
      </header>

      <main style={{flex: 1}}>
        <Outlet />
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


