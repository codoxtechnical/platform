import { Link } from "react-router-dom";
import herobg from "../assets/herobgwood.jpg";

export default function Hero({
  title = "INNOVATE  CONSULT  DEVELOP",
  subtitle = "Elevate Your Digital Future with Bespoke Solutions That Drive 3x Growth.",
}) {
  return (
    <section
      className="relative h-[90vh] md:h-screen bg-gradient-to-br from-white via-blue-50/50 to-white overflow-hidden flex items-center justify-center"
      data-aos="fade-up"
    >

      {/* Background Image (fixed for parallax) */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${herobg})` }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">

        {/* Title */}
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6
          text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.45)]"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          {title}
        </h1>

        {/* Subtitle */}
        <p
          className="text-lg md:text-xl text-gray-100 mb-8 max-w-3xl mx-auto drop-shadow-[0_2px_6px_rgba(0,0,0,0.25)]"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {subtitle}
        </p>

        {/* Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <Link
            to="/services"
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4
            rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all
            shadow-lg hover:shadow-blue-500/25 text-base md:text-lg"
          >
            Explore Services
          </Link>

          <Link
            to="/portfolio"
            className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg
            font-semibold hover:bg-blue-400 hover:text-white transition-all shadow-lg
            hover:shadow-blue-500/25 text-base md:text-lg"
          >
            View Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
