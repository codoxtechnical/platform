import Hero from '../components/Hero.jsx';
import PortfolioCard from '../components/PortfolioCard.jsx';

const projects = [
  {
    title: 'E-Learning Platform',
    description: 'Revolutionary MERN app for 10k+ users, with real-time quizzes and analytics.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80',
    techs: ['MERN', 'React', 'Node.js']
  },
  {
    title: 'Secure Lab Management System',
    description: 'Laravel-based dashboard for chemical tracking, enhancing lab efficiency by 50%.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&q=80',
    techs: ['Laravel', 'PHP', 'MySQL']
  },
  {
    title: 'AI-Driven Analytics Tool',
    description: 'Custom CodeIgniter solution for research data visualization and predictive insights.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80',
    techs: ['CodeIgniter', 'AI Integration', 'Charts']
  },
  // Add more for grid
  {
    title: 'Global E-Commerce Hub (Dummy)',
    description: 'Scalable platform for Adani Tech, handling 1M+ transactions with zero downtime.',
    image: 'https://images.unsplash.com/photo-1555066931-4365a3b06a9c?w=400&q=80',
    techs: ['MERN', 'Stripe', 'AWS']
  },
];

export default function Portfolio() {
  return (
    <>
      <Hero title="Our Portfolio" subtitle="Real-World Impact: Projects That Shaped Industries and Ignited Growth." />
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center mb-12 text-cyan-400" data-aos="fade-up">Featured Creations</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, i) => <PortfolioCard key={i} {...project} data-aos="fade-up" data-aos-delay={i * 200} />)}
          </div>
        </div>
      </section>
    </>
  );
}