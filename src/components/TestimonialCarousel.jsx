import { useState } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  { quote: "Codox transformed our outdated system into a scalable powerhouse—3x faster and 100% secure!", author: "Dr. Raj Patel, CSIR National Chemical Lab", rating: 5 },
  { quote: "Their MERN expertise delivered an e-learning platform that engaged 10k+ users overnight.", author: "Prof. Anjali Singh, NPTEL", rating: 5 },
  { quote: "Strategic consulting that unlocked new revenue streams. True partners in innovation.", author: "Dr. Vikram Rao, Indian Institute of Science", rating: 5 },
  { quote: "Laravel app scaled seamlessly for our global ops. Highly recommend!", author: "Sarah Lee, Adani Tech (Dummy)", rating: 5 },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  return (
    <section className="py-16 bg-slate-900" data-aos="fade-up">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-cyan-400">What Our Clients Say</h2>
        <div className="max-w-2xl mx-auto">
          <div className="bg-slate-800 p-8 rounded-xl">
            <p className="text-lg italic mb-6">"{testimonials[current].quote}"</p>
            <div className="flex justify-center mb-4">
              {[...Array(testimonials[current].rating)].map((_, i) => <Star key={i} className="text-yellow-400 fill-current" size={20} />)}
            </div>
            <p className="font-semibold text-cyan-400">- {testimonials[current].author}</p>
          </div>
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} className={`w-3 h-3 rounded-full ${i === current ? 'bg-cyan-400' : 'bg-gray-600'}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}