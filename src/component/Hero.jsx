 
const Hero= () => {
  return (
    <section className="flex justify-between items-center p-8 bg-blue-50">
      <div className="max-w-md">
        <h4 className="text-blue-500">Care For You</h4>
        <h1 className="text-4xl font-bold mt-2">
          Advancing Health
        </h1>
        <h1 className="text-4xl font-bold mt-2">
          Enhancing <span className="bg-blue-800 text-white px-2">Lives</span>
        </h1>
        <p className="text-gray-700 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore consectetur.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded mt-4">
          Log in
        </button>
      </div>
      <div className="relative">
      <img src="/doctor-nurse-removebg-preview.png" alt="Health Professionals" className="max-w-xs" />
        <div className="absolute top-0 right-0 bg-white p-2 rounded text-center shadow">
          <span className="block text-xl font-bold">96%</span>
          <span className="text-gray-700">Success Rate</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
