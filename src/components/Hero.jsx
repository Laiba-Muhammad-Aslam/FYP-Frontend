import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    // <section className="bg-gray-50 text-center py-20 px-6">
    //   <h1 className="text-4xl md:text-6xl font-bold mb-4">
    //     The AI data analyst that works for you
    //   </h1>
    //   <p className="text-lg text-gray-600 mb-6">
    //     Analyze data, create charts, and generate insights instantly — all with AI.
    //   </p>
    //   <button className="bg-black text-white px-6 py-3 rounded-xl text-lg shadow-md hover:bg-gray-800">
    //     Try Julius Free
    //   </button>
    //   <p className="mt-6 text-sm text-gray-500">
    //     Loved by 2,000,000+ users and trusted by leading companies
    //   </p>
    // </section>

    <section className="bg-[#ffffff] md:h-[50vh] text-center flex flex-col justify-center items-center px-5 md:px-10 py-6 md:py-7">
        <div className="rounded-2xl flex gap-2 md:gap-3 m-4 mb-5 md:mb-10 bg-blue-100 px-1 py-1 md:py-2 items-center justify-between">
          <button className='bg-blue-700 hover:bg-blue-800 transition text-white rounded-4xl px-2 py-1 text-sm font-medium'>Register</button>
          <p className='flex font-[600] text-[12px] md:text-[16px]'>August 21 Notebooks Workshop <ChevronRight /></p>
        </div>
        <h1 className=" md:max-w-[50%] text-3xl md:text-5xl font-bold text-[#020817]">What analysis do you want to run?</h1>
        <h4 className="text-xl md:text-2xl font-medium py-4 text-[#404040]">Chat with your data and get expert-level insights in seconds</h4>
    </section>
  );
}
