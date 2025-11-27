import Hero from '../components/Hero.jsx';
import StatsCounter from '../components/StatsCounter.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import TechStack from '../components/TechStack.jsx';
import TestimonialCarousel from '../components/TestimonialCarousel.jsx';
import ClientSlider from '../components/ClientSlider.jsx';
import { Code2, Smartphone, Zap } from 'lucide-react';

const services = [
  {
    id: 'web',
    title: 'Custom Web Mastery',
    description: 'Craft lightning-fast, scalable web apps that captivate users and skyrocket conversions—tailored to your vision.',
    icon: <Code2 size={48} className="text-blue-400" />,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80',
    keywords: ['custom web applications', 'MERN stack development', 'responsive design']
  },
  {
    id: 'mobile',
    title: 'Mobile Innovation',
    description: 'Build intuitive apps that engage on-the-go audiences, blending seamless UX with cutting-edge tech.',
    icon: <Smartphone size={48} className="text-blue-400" />,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&q=80',
    keywords: ['mobile app development', 'cross-platform solutions', 'user-centric design']
  },
  {
    id: 'consulting',
    title: 'Strategic IT Consulting',
    description: 'Navigate digital chaos with expert guidance—optimize infrastructure, adopt AI, and fuel sustainable growth.',
    icon: <Zap size={48} className="text-blue-400" />,
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&q=80',
    keywords: ['IT consulting services', 'digital transformation strategy', 'AI adoption']
  },
];

export default function Home() {
  return (
    <>
      <Hero subtitle="Unlock exponential growth with bespoke software that redefines your digital edge. 50+ projects, 100% client success." />
      {/* Counters directly below Hero */}
      <StatsCounter />
      <section className="py-16 bg-white" id="services">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-400" data-aos="fade-up">Services That Transform</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => <ServiceCard key={service.id} {...service} />)}
          </div>
        </div>
      </section>
      <TechStack />
      <TestimonialCarousel />
      <ClientSlider />
    </>
  );
}