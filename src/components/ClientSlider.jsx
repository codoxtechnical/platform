const clients = [
  { name: 'CSIR National Chemical Lab', logo: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=100&q=80' }, // Placeholder
  { name: 'NPTEL', logo: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=100&q=80' },
  { name: 'Indian Institute of Science', logo: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=100&q=80' },
  { name: 'Adani Tech (Dummy)', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&q=80' },
  { name: 'GlobalFin Solutions (Dummy)', logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&q=80' },
];

export default function ClientSlider() {
  return (
    <section className="py-16" data-aos="fade-up">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-cyan-400">Trusted by Leading Innovators</h2>
        <div className="grid md:grid-cols-5 gap-8">
          {clients.map((client, i) => (
            <div key={i} className="flex justify-center p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors" data-aos="slide-left" data-aos-delay={i * 100}>
              <img src={client.logo} alt={client.name} className="h-16 object-contain grayscale hover:grayscale-0 transition-all" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}