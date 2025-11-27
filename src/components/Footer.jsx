import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 py-12 mt-12 border-t border-slate-800">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold text-cyan-400 mb-4">Codox Technical</h3>
          <p className="text-gray-400 mb-4">Your partner in digital transformation. Innovate. Consult. Develop.</p>
          <div className="flex space-x-4">
            <a href="https://linkedin.com/company/codox-technical" className="text-cyan-400 hover:text-cyan-300"><Linkedin size={20} /></a>
            <a href="#" className="text-cyan-400 hover:text-cyan-300"><Twitter size={20} /></a>
            <a href="#" className="text-cyan-400 hover:text-cyan-300"><Github size={20} /></a>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/services" className="hover:text-cyan-400">Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-cyan-400">Portfolio</Link></li>
            <li><Link to="/about" className="hover:text-cyan-400">About</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="/services#web" className="hover:text-cyan-400">Web Development</a></li>
            <li><a href="/services#mobile" className="hover:text-cyan-400">Mobile Apps</a></li>
            <li><a href="/services#consulting" className="hover:text-cyan-400">IT Consulting</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <p className="text-gray-400">codox.technical@gmail.com<br />+91 73859 75192</p>
        </div>
      </div>
      <div className="border-t border-slate-800 mt-8 pt-6 text-center text-gray-400">
        &copy; 2025 Codox Technical. All rights reserved.
      </div>
    </footer>
  );
}