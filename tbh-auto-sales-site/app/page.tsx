import Image from 'next/image';

export default function Page() {
  const car = {
    year: 2018,
    make: 'Nissan',
    model: 'Sentra',
    price: '$12,995',
    miles: '148,000 miles',
    highlights: [
      'One Owner',
      'Clean Carfax',
      'Very Clean Inside & Out',
      'New Verified Low-Mileage Transmission',
    ],
  };

  return (
    <main style={{ minHeight: '100vh', background: '#000', color: '#fff' }}>
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 30,
          borderBottom: '1px solid rgba(234,179,8,.2)',
          background: 'rgba(0,0,0,.85)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            padding: '16px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 16,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Image src="/logo.png" alt="TBH Auto Sales logo" width={48} height={48} style={{ borderRadius: 9999, border: '1px solid rgba(234,179,8,.3)' }} />
            <div>
              <div style={{ fontSize: 20, fontWeight: 700, color: '#facc15' }}>TBH Auto Sales</div>
              <div style={{ fontSize: 12, color: '#9ca3af' }}>Reliable • Affordable • Approved</div>
            </div>
          </div>

          <a
            href="tel:6193661457"
            style={{
              background: '#facc15',
              color: '#000',
              padding: '10px 16px',
              borderRadius: 16,
              fontWeight: 700,
            }}
          >
            Call Now
          </a>
        </div>
      </header>

      <section
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '64px 24px',
          display: 'grid',
          gap: 40,
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          alignItems: 'center',
        }}
      >
        <div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', margin: 0, fontWeight: 800, color: '#facc15', lineHeight: 1.05 }}>
            {car.year} {car.make} {car.model}
          </h1>
          <p style={{ marginTop: 16, color: '#d1d5db', fontSize: 18, lineHeight: 1.7 }}>
            Reliable, clean, and ready to drive. Perfect for daily commuting or first-time buyers.
          </p>

          <div style={{ marginTop: 24, fontSize: 36, fontWeight: 800 }}>{car.price}</div>
          <div style={{ color: '#9ca3af', marginTop: 6 }}>{car.miles}</div>

          <ul style={{ marginTop: 24, paddingLeft: 20, color: '#d1d5db', lineHeight: 1.9 }}>
            {car.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div style={{ marginTop: 32, display: 'flex', flexWrap: 'wrap', gap: 16 }}>
            <a href="tel:6193661457" style={{ background: '#facc15', color: '#000', padding: '14px 24px', borderRadius: 16, fontWeight: 700 }}>
              Call Now
            </a>
            <a href="#lead" style={{ border: '1px solid #facc15', color: '#facc15', padding: '14px 24px', borderRadius: 16, fontWeight: 700 }}>
              Get Approved
            </a>
          </div>
        </div>

        <div style={{ display: 'grid', gap: 16 }}>
          <div style={{ borderRadius: 24, overflow: 'hidden', border: '1px solid rgba(255,255,255,.1)' }}>
            <Image src="/car1.jpeg" alt="2018 Nissan Sentra rear side view" width={1200} height={900} />
          </div>
          <div style={{ borderRadius: 24, overflow: 'hidden', border: '1px solid rgba(255,255,255,.1)' }}>
            <Image src="/car2.jpeg" alt="2018 Nissan Sentra front side view" width={1200} height={900} />
          </div>
        </div>
      </section>

      <section style={{ background: 'rgba(255,255,255,.05)', padding: '64px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontSize: 36, margin: 0, color: '#facc15' }}>Easy Financing Available</h2>
          <p style={{ marginTop: 16, color: '#d1d5db', fontSize: 18, lineHeight: 1.7 }}>
            Bad credit, no credit, first-time buyer — we can help get you approved.
          </p>
          <a href="#lead" style={{ marginTop: 24, display: 'inline-block', background: '#facc15', color: '#000', padding: '14px 24px', borderRadius: 16, fontWeight: 700 }}>
            Apply Now
          </a>
        </div>
      </section>

      <section id="lead" style={{ maxWidth: 760, margin: '0 auto', padding: '64px 24px' }}>
        <div style={{ background: '#000', border: '1px solid rgba(234,179,8,.2)', borderRadius: 24, padding: 32 }}>
          <h3 style={{ fontSize: 32, marginTop: 0 }}>Get Pre-Approved</h3>
          <div style={{ marginTop: 24, display: 'grid', gap: 16 }}>
            <input style={inputStyle} placeholder="Full Name" />
            <input style={inputStyle} placeholder="Phone" />
            <input style={inputStyle} placeholder="Email" />
            <a href="mailto:TBHautosales@gmail.com?subject=Pre-Approval%20Request" style={{ ...buttonStyle, textAlign: 'center' }}>
              Submit
            </a>
          </div>
        </div>
      </section>

      <section style={{ textAlign: 'center', padding: '64px 24px' }}>
        <h2 style={{ fontSize: 36, margin: 0, color: '#facc15' }}>Why Buy From Us?</h2>
        <p style={{ margin: '16px auto 0', color: '#d1d5db', maxWidth: 760, lineHeight: 1.8 }}>
          Backed by TBH Complete Auto Care — every vehicle is inspected and ready for the road. No games, no pressure, just solid cars and honest service.
        </p>
      </section>

      <section style={{ textAlign: 'center', padding: '0 24px 64px' }}>
        <p style={{ color: '#d1d5db' }}>7979 Aero Drive, San Diego, CA 92111</p>
        <p style={{ color: '#d1d5db' }}>(619) 366-1457</p>
        <p style={{ color: '#d1d5db' }}>TBHautosales@gmail.com</p>
      </section>
    </main>
  );
}

const inputStyle = {
  background: 'rgba(255,255,255,.05)',
  border: '1px solid rgba(255,255,255,.1)',
  padding: '14px 16px',
  borderRadius: 16,
  color: '#fff',
} as const;

const buttonStyle = {
  background: '#facc15',
  color: '#000',
  padding: '14px 16px',
  borderRadius: 16,
  fontWeight: 700,
} as const;
