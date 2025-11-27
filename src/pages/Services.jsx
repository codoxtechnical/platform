import { Code2, Smartphone, Users, Zap } from 'lucide-react';
import Hero from '../components/Hero.jsx';
import ServiceCard from '../components/ServiceCard.jsx';

const detailedServices = [
  {
    id: 'custom-dev',
    title: 'Bespoke Software Engineering',
    description: 'From ideation to deployment, engineer custom solutions that automate workflows and amplify ROI—powered by full-stack mastery.',
    icon: <Code2 size={48} className="text-cyan-400" />,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&q=80',
    keywords: ['bespoke software development', 'full-stack JavaScript', 'enterprise apps']
  },
  {
    id: 'web-dev',
    title: 'Dynamic Web Ecosystems',
    description: 'Design immersive, SEO-optimized sites that convert visitors into loyal advocates—static or dynamic, always pixel-perfect.',
    icon: <Zap size={48} className="text-cyan-400" />,
    image: 'https://images.unsplash.com/photo-1547658719-da2b848c1f2a?w=400&q=80',
    keywords: ['web development agency', 'PHP Laravel frameworks', 'e-commerce platforms']
  },
  // Add 2 more for grid
  {
    id: 'ui-ux',
    title: 'UX/UI Design Excellence',
    description: 'Human-centered designs that intuit user needs, boosting engagement by 40%+ through intuitive interfaces.',
    icon: <Smartphone size={48} className="text-cyan-400" />,
    image: 'https://images.unsplash.com/photo-1559028005-2237eccc1f3f?w=400&q=80',
    keywords: ['UI/UX design services', 'prototyping', 'user experience optimization']
  },
  {
    id: 'consulting',
    title: 'Digital Strategy Consulting',
    description: 'Audit, strategize, and implement roadmaps for cloud migration, AI integration, and sustainable tech evolution.',
    icon: <Users size={48} className="text-cyan-400" />,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80',
    keywords: ['digital consulting firm', 'tech strategy', 'business transformation']
  },
];

export default function Services() {
  return (
    <>
      <Hero title="Our Services" subtitle="Tailored Tech That Powers Your Vision – From Concept to Conquest." />
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center mb-12 text-cyan-400" data-aos="fade-up">Expertise Redefined</h1>
          <div className="grid md:grid-cols-2 gap-8">
            {detailedServices.map((service) => <ServiceCard key={service.id} {...service} />)}
          </div>
        </div>
      </section>
    </>
  );
}