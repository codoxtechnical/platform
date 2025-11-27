import React from 'react';
import { Code2, Database, Server } from 'lucide-react'; // Lucide icons for stacks

const techs = [
  { name: 'MERN Stack', icon: <Code2 size={48} className="text-cyan-400" />, desc: 'MongoDB, Express, React, Node.js for dynamic, scalable full-stack apps' },
  { name: 'Laravel', icon: <Server size={48} className="text-cyan-400" />, desc: 'Robust PHP framework for secure, enterprise-grade web solutions' },
  { name: 'CodeIgniter', icon: <Database size={48} className="text-cyan-400" />, desc: 'Lightweight PHP for rapid, efficient custom development' },
];

export default function TechStack() {
  return (
    <section className="py-16" data-aos="fade-up">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">Technology Arsenal</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {techs.map((tech, i) => (
            <div key={i} className="text-center p-8 bg-slate-800 rounded-xl hover:bg-slate-700 transition-colors" data-aos="slide-up" data-aos-delay={i * 200}>
              <div className="text-6xl mb-4 mx-auto">{tech.icon}</div>
              <h3 className="text-xl font-bold mb-2">{tech.name}</h3>
              <p className="text-gray-300">{tech.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}