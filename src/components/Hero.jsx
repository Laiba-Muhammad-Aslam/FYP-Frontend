import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-[#ffffff] text-center flex flex-col justify-center items-center px-5 md:px-10 py-6 md:py-7">
        <div className="rounded-2xl flex gap-2 md:gap-3 m-4 mb-5 md:mb-10 bg-blue-100 px-1 py-1 md:py-2 items-center justify-between">
          <button className='bg-blue-700 hover:bg-blue-800 transition text-white rounded-4xl px-2 py-1 text-sm font-medium'>Register</button>
          <p className='flex font-[600] text-[12px] md:text-[16px]'>August 21 Notebooks Workshop <ChevronRight /></p>
        </div>
        <h1 className=" md:max-w-[50%] text-3xl md:text-5xl font-bold text-[#020817]">What analysis do you want to run?</h1>
        <h4 className="text-xl md:text-2xl font-medium py-4 text-[#404040]">Chat with your data and get expert-level insights in seconds</h4>
        <button className='cursor-pointer flex bg-[#2563eb] hover:bg-blue-800 transition py-2 md:py-3 text-white font-medium rounded-3xl px-3 md:px-6'>Try Julius free <ChevronRight /></button>
    </section>
  );
}
