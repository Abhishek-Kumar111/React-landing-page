const Hero = () => {
  return (
    <section className="h-[80vh] flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Build Stunning Websites
      </h1>
      <p className="text-lg md:text-xl mb-6">
        Fast • Responsive • Modern
      </p>
      <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
        Get Started
      </button>
    </section>
  );
};

export default Hero;
