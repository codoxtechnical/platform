import React from 'react';

export default function ServiceCard({ title, description, icon, image, keywords, id }) {
  return (
    <article className="card-hover group border border-gray-200" data-aos="fade-up" data-aos-delay="100"> {/* Light border */}
      <img src={image} alt={`${title} - Custom ${title}`} className="w-full h-48 object-cover rounded-t-xl mb-4" />
      <div className="text-4xl mb-4 text-blue-400">{icon}</div> {/* Blue icon */}
      <h3 className="text-2xl font-bold mb-3 text-blue-400" id={id}>{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p> {/* Darker gray text */}
      <ul className="text-sm text-gray-600 space-y-1"> {/* Lighter gray list */}
        {keywords.slice(0, 3).map((kw, i) => <li key={i}>• {kw}</li>)}
      </ul>
    </article>
  );
}