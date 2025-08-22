import React, { useState } from 'react'

export default function Takvim() {
  const [selectedDate, setSelectedDate] = useState<string | null>(null)

  const events: Record<string, string> = {
    '24-9': 'İkinci Bilgilendirme Toplantısı',
    '1-10': 'Kesin Kayıtların Sonu',
    '25-11': 'Öğrenci ve Öğretmen Listelerinin Teslimi',
    '3-12': 'Yarışma 1. Gün',
    '4-12': 'Yarışma 2. Gün'
  }

  const months = [
    { name: 'Eylül 2025', days: 30, firstDay: 1, month: 9 },
    { name: 'Ekim 2025', days: 31, firstDay: 3, month: 10 },
    { name: 'Kasım 2025', days: 30, firstDay: 6, month: 11 },
    { name: 'Aralık 2025', days: 31, firstDay: 1, month: 12 }
  ]

  const weekDays = ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz']

  const renderCalendar = (month: typeof months[0]) => {
    const days = []
    
    // Add empty cells for days before month starts
    for (let i = 0; i < month.firstDay - 1; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>)
    }
    
    // Add days of the month
    for (let day = 1; day <= month.days; day++) {
      const dateKey = `${day}-${month.month}`
      const hasEvent = events[dateKey]
      const isSelected = selectedDate === dateKey
      
      days.push(
        <div
          key={day}
          className={`calendar-day ${hasEvent ? 'event' : ''} ${isSelected ? 'selected' : ''}`}
          onClick={() => hasEvent && setSelectedDate(dateKey)}
          title={hasEvent || ''}
        >
          {day}
        </div>
      )
    }
    
    return days
  }

  return (
    <section className="section">
      <div className="container">
        <h1 className="brand" style={{ marginTop: 0, marginBottom: 8 }}>Yarışma Takvimi</h1>
        <p style={{ marginBottom: 32, opacity: 0.9 }}>
          2025 yılı Tasarla Geliştir Robot Yarışması için önemli tarihler ve etkinlik programı.
        </p>

        {/* Important dates highlight */}
        <h2 style={{ marginBottom: 20 }}>📅 Önemli Tarihler</h2>
        <div className="grid cols-2" style={{ marginBottom: 48 }}>
          <div className="card" style={{ background: 'rgba(245, 158, 11, 0.1)', borderColor: 'var(--gold-500)' }}>
            <h3>🎯 Kayıt Dönemi</h3>
            <ul style={{ lineHeight: 1.8, marginTop: 12 }}>
              <li><strong>19 Haziran 2025</strong> - Sezon Başlangıç Semineri</li>
              <li><strong>26 Haziran 2025</strong> - Kesin Kayıtların Başlangıcı</li>
              <li><strong>1 Ekim 2025</strong> - Kesin Kayıtların Sonu ⚠️</li>
            </ul>
          </div>
          
          <div className="card" style={{ background: 'rgba(245, 158, 11, 0.1)', borderColor: 'var(--gold-500)' }}>
            <h3>🏆 Yarışma Dönemi</h3>
            <ul style={{ lineHeight: 1.8, marginTop: 12 }}>
              <li><strong>24 Eylül 2025</strong> - İkinci Bilgilendirme Toplantısı</li>
              <li><strong>25 Kasım 2025</strong> - Listelerin Teslimi</li>
              <li><strong>3-4 Aralık 2025</strong> - Yarışma Günleri 🎉</li>
            </ul>
          </div>
        </div>

        {/* Selected event display */}
        {selectedDate && (
          <div className="card" style={{ 
            marginBottom: 32, 
            background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.2) 0%, rgba(245, 158, 11, 0.1) 100%)', 
            borderColor: 'var(--gold-500)' 
          }}>
            <h3>📍 Seçili Etkinlik</h3>
            <p style={{ margin: 0, fontSize: 18 }}>
              <strong>{selectedDate.split('-').reverse().join('.')}.2025:</strong> {events[selectedDate]}
            </p>
          </div>
        )}

        {/* Calendar grid */}
        <h2 style={{ marginBottom: 20 }}>📆 Takvim Görünümü</h2>
        <div className="calendar-container">
          <div className="grid cols-2">
            {months.map((month) => (
              <div key={month.name} className="calendar-month">
                <h3>{month.name}</h3>
                <div className="calendar-grid">
                  {/* Week day headers */}
                  {weekDays.map(day => (
                    <div key={day} className="calendar-day header">{day}</div>
                  ))}
                  {/* Calendar days */}
                  {renderCalendar(month)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="card" style={{ marginTop: 32 }}>
          <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div className="calendar-day event" style={{ width: 32, height: 32 }}></div>
              <span>Önemli Tarih</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div className="calendar-day" style={{ width: 32, height: 32 }}></div>
              <span>Normal Gün</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 