import { Users, Code, Award, Clock } from 'lucide-react';

const stats = [
  { value: 50, label: 'Projects Delivered', icon: <Code size={24} className="text-blue-400" /> },
  { value: 20, label: 'Happy Clients', icon: <Users size={24} className="text-blue-400" /> },
  { value: 5, label: 'Years Experience', icon: <Award size={24} className="text-blue-400" /> },
  { value: 100, label: '% Satisfaction', icon: <Clock size={24} className="text-blue-400" /> },
];

export default function StatsCounter() {
  return (
    <section className="py-16 bg-gray-50" data-aos="fade-up"> {/* Light gray bg */}
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="p-6 bg-white rounded-xl shadow-sm border border-gray-200" data-aos="zoom-in" data-aos-delay={i * 200}>
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold text-blue-400 mb-2">{stat.value}+</div>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}