export default function PortfolioCard({ title, description, image, techs }) {
  return (
    <div className="card-hover group overflow-hidden" data-aos="zoom-in">
      <img src={image} alt={title} className="w-full h-64 object-cover group-hover:scale-110 transition-transform" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-cyan-400">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {techs.map((tech, i) => <span key={i} className="px-3 py-1 bg-cyan-900/50 text-cyan-300 rounded-full text-sm">{tech}</span>)}
        </div>
      </div>
    </div>
  );
}