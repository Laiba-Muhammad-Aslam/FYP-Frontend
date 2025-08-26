import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section
      className="bg-[#ffffff] text-center flex flex-col justify-center items-center px-5 md:px-10 py-6 md:py-7 h-[calc(100vh-4rem)]"
      style={{
        backgroundImage: `url('public/assets/hero_bg_1.png'), url('public/assets/hero_bg_2.png')`,
        backgroundSize: "cover, cover",
        backgroundPosition: "center center, bottom center",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundBlendMode: "multiply",
      }}
    >
      <div className="rounded-2xl flex gap-2 md:gap-3 m-4 mb-5 md:mb-5 bg-blue-100 px-1 py-1 md:py-2 items-center justify-between">
        <button className="bg-blue-700 hover:bg-blue-800 transition text-white rounded-4xl px-2 py-1 text-sm font-medium">
          Boom
        </button>
        <p className="flex font-[600] text-[12px] md:text-[16px] items-center">
          No SQL expertise required <ChevronRight />
        </p>
      </div>
      <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-none max-w-[32rem] sm:max-w-[36rem] md:max-w-[42rem] lg:max-w-[48rem] mx-auto px-4 text-center text-[#020817]">
        Get expert analysis from your raw SQL data instantly.
      </h1>
      <h4 className="text-lg lg:text-2xl md:text-xl font-medium py-4 text-[#404040] max-w-sm md:max-w-xl lg:max-w-2xl mx-auto">
        Simplifying complex data analysis by leveraging AI to interpret and
        analyze SQL databases through conversational interfaces
      </h4>
      <button className="cursor-pointer flex bg-[#2563eb] hover:bg-blue-800 transition py-2 md:py-3 text-white font-medium rounded-lg px-3 md:px-6">
        See Volt AI In Action <ChevronRight />
      </button>
    </section>
  );
}
