
export default function WhyUs() {
  return (
    <div className="bg-transparent py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-light mb-4 text-black uppercase">WHY US</h2>
        <h1 className="text-2xl font-semibold mb-6 text-[#4A60A1] uppercase">BECAUSE YOUR SUCCESS IS OUR PRIORITY</h1>
        <div className="flex flex-col justify-center items-center space-y-4 sm:flex-row sm:space-y-0">
          <div className="w-full sm:w-1/2 text-center">
            <h2 className="text-xl font-semibold text-black capitalize">Independence</h2>
            <p className="text-lg text-black p-4">
              When you choose our company, you choose independence as a key principle. We are not limited by tradition; we value the freedom to explore customized solutions that fit your needs. This independence motivates us to find unique approaches to deliver exceptional results.
            </p>
          </div>
          <div className="w-full sm:w-1/2 text-center">
            <h2 className="text-xl font-semibold text-black capitalize">Results-Oriented</h2>
            <p className="text-lg text-black p-4">
              At our company, results are not just words, they are our compass. From the start, we take a rigorous, results-oriented approach. We work tirelessly to exceed your expectations and meet your objectives. Every action has a clear purpose: <b>to offer you impactful solutions that speak for themselves.</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
