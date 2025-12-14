const Features = () => {
  return (
    <section className="py-16 px-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">
        Features
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
         <h3 className="font-bold text-xl mt-3">Fast Performance</h3>
          <p className="text-gray-600 mt-2">
            Optimized using React and Tailwind CSS.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="font-bold text-xl mt-3">Responsive Design</h3>
          <p className="text-gray-600 mt-2">
            Works on all devices seamlessly.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="font-bold text-xl mt-3">Modern UI</h3>
          <p className="text-gray-600 mt-2">
            Clean and attractive UI components.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
