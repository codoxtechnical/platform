import { useState } from 'react';
import Hero from '../components/Hero.jsx';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thanks! Your query is rocketing to our team.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <Hero title="Let's Connect" subtitle="Ready to Ignite Your Project? Share Your Vision – We'll Make It Reality." />
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div data-aos="fade-right">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">Get In Touch</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <MapPin size={24} className="text-cyan-400" />
                <div>
                  <p className="font-semibold">Nashville, TN</p>
                  <p className="text-gray-400">123 Innovation St.</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone size={24} className="text-cyan-400" />
                <p className="text-gray-400">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center space-x-4">
                <Mail size={24} className="text-cyan-400" />
                <p className="text-gray-400">info@codoxtechnical.com</p>
              </div>
            </div>
            {/* Map placeholder */}
            <div className="mt-8 h-64 bg-slate-800 rounded-lg flex items-center justify-center">
              <p className="text-gray-400">Interactive Map Here (Google Maps Embed)</p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6" data-aos="fade-left">
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-4 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full p-4 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
              required
            />
            <textarea
              rows="5"
              placeholder="Tell us about your project..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full p-4 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 text-white py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-cyan-700 transition-all"
            >
              Launch Inquiry
            </button>
          </form>
        </div>
      </section>
    </>
  );
}