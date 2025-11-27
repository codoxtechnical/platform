import Hero from '../components/Hero.jsx';
import StatsCounter from '../components/StatsCounter.jsx';
import TechStack from '../components/TechStack.jsx';

export default function About() {
  return (
    <>
      <Hero title="About Codox Technical" subtitle="Pioneering Digital Frontiers Since 2020 – Where Innovation Meets Execution." />
      <section className="py-16 bg-slate-900" data-aos="fade-up">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h1 className="text-4xl font-bold mb-8 text-cyan-400">Our Story</h1>
          <p className="text-lg text-gray-300 mb-8">
            Founded in the heart of tech innovation, Codox Technical started as a spark of passion for solving real-world challenges through code. Today, we're a global force in bespoke software, empowering 20+ enterprises—from labs to institutes—with solutions that scale ambitions into realities. We blend strategic consulting with technical wizardry to deliver not just apps, but transformations.
          </p>
          <h2 className="text-3xl font-bold mb-4 text-cyan-400">Our Mission</h2>
          <p className="text-lg text-gray-300">
            To democratize cutting-edge tech, helping organizations harness MERN, Laravel, and AI to unlock efficiencies, revenue, and futures. We're not vendors—we're co-creators of your success story.
          </p>
        </div>
      </section>
      <StatsCounter />
      <TechStack />
    </>
  );
}