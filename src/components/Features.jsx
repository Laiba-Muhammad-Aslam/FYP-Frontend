import FeatureCard from "./FeatureCard";
import { Zap, Activity, CloudUpload, ChartColumn, Code, Brain, History } from 'lucide-react';

// // const features = [
// //   { title: "Start in seconds, not hours", desc: "No coding or complex setup required" },
// //   { title: "Upload everything at once", desc: "No batching, no limits, no waiting. Julius supports larger files compared to others" },
// //   { title: "Create stunning charts instantly", desc: "Turn your data into clear visuals that explain your findings" },
// //   { title: "Code when you want", desc: "Switch to R, Python, or SQL anytime for advanced work" },
// //   { title: "Tackle problems generic AI can’t", desc: "Built with advanced capabilities to solve complex data analysis problems" },
// //   { title: "Skip repetitive explanations", desc: "Julius remembers your context and preferences to work faster over time" },
// // ];

// export default function Features() {
//   return (
//     <section className="py-16 bg-white">
//         <h1 className="text-center font-bold pb-3 md:pb-10 text-2xl md:text-4xl">Intuitive and easy to use</h1>
//       <div className="grid mx-auto place-items-center md:grid-cols-3 gap-8 md:gap-8 p-5">
//         <FeatureCard icon={<Zap  size={30} color='#2563eb'/>} title="Start in seconds, not hours" des="No coding or complex setup required"  imgUrl="https://julius.ai/_next/image?url=https%3A%2F%2Fcdn.builder.io%2Fapi%2Fv1%2Fimage%2Fassets%252Fbdb39e2e13de46e3a59494ccdb78c2a3%252Fbbf1ca2f5f974c2a9a4e6e3e0ae85a7d&w=1080&q=75" />

//         <FeatureCard icon={<CloudUpload  size={30} color='#2563eb'/>} title="Start in seconds, not hours" des="No coding or complex setup required"  imgUrl="https://julius.ai/_next/image?url=https%3A%2F%2Fcdn.builder.io%2Fapi%2Fv1%2Fimage%2Fassets%252Fbdb39e2e13de46e3a59494ccdb78c2a3%252Fbbf1ca2f5f974c2a9a4e6e3e0ae85a7d&w=1080&q=75"/>

//         <FeatureCard icon={<ChartColumn  size={30} color='#2563eb'/>} title="Start in seconds, not hours" des="No coding or complex setup required"  imgUrl="https://julius.ai/_next/image?url=https%3A%2F%2Fcdn.builder.io%2Fapi%2Fv1%2Fimage%2Fassets%252Fbdb39e2e13de46e3a59494ccdb78c2a3%252Fbbf1ca2f5f974c2a9a4e6e3e0ae85a7d&w=1080&q=75"/>

//         <FeatureCard icon={<Code  size={30} color='#2563eb'/>} title="Start in seconds, not hours" des="No coding or complex setup required"  imgUrl="https://julius.ai/_next/image?url=https%3A%2F%2Fcdn.builder.io%2Fapi%2Fv1%2Fimage%2Fassets%252Fbdb39e2e13de46e3a59494ccdb78c2a3%252Fbbf1ca2f5f974c2a9a4e6e3e0ae85a7d&w=1080&q=75"/>

//         <FeatureCard icon={<Brain  size={30} color='#2563eb'/>} title="Start in seconds, not hours" des="No coding or complex setup required"  imgUrl="https://julius.ai/_next/image?url=https%3A%2F%2Fcdn.builder.io%2Fapi%2Fv1%2Fimage%2Fassets%252Fbdb39e2e13de46e3a59494ccdb78c2a3%252Fbbf1ca2f5f974c2a9a4e6e3e0ae85a7d&w=1080&q=75"/>

//         <FeatureCard icon={<History  size={30} color='#2563eb'/>} title="Start in seconds, not hours" des="No coding or complex setup required"  imgUrl="https://julius.ai/_next/image?url=https%3A%2F%2Fcdn.builder.io%2Fapi%2Fv1%2Fimage%2Fassets%252Fbdb39e2e13de46e3a59494ccdb78c2a3%252Fbbf1ca2f5f974c2a9a4e6e3e0ae85a7d&w=1080&q=75"/>


//       </div>
//     </section>
//   );
// }


export default function Features() {
  return (
    <section className="py-16 bg-white">
      <h1 className="text-center font-bold pb-8 text-2xl md:text-4xl">
        Intuitive and easy to use
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 px-5">
       <FeatureCard icon={<Zap  size={30} color='#2563eb'/>} title="Start in seconds, not hours" des="No coding or complex setup required"  imgUrl="https://julius.ai/_next/image?url=https%3A%2F%2Fcdn.builder.io%2Fapi%2Fv1%2Fimage%2Fassets%252Fbdb39e2e13de46e3a59494ccdb78c2a3%252Fbbf1ca2f5f974c2a9a4e6e3e0ae85a7d&w=1080&q=75" />

        <FeatureCard icon={<CloudUpload  size={30} color='#2563eb'/>} title="Start in seconds, not hours" des="No coding or complex setup required"  imgUrl="https://julius.ai/_next/image?url=https%3A%2F%2Fcdn.builder.io%2Fapi%2Fv1%2Fimage%2Fassets%252Fbdb39e2e13de46e3a59494ccdb78c2a3%252Fbbf1ca2f5f974c2a9a4e6e3e0ae85a7d&w=1080&q=75"/>

        <FeatureCard icon={<ChartColumn  size={30} color='#2563eb'/>} title="Start in seconds, not hours" des="No coding or complex setup required"  imgUrl="https://julius.ai/_next/image?url=https%3A%2F%2Fcdn.builder.io%2Fapi%2Fv1%2Fimage%2Fassets%252Fbdb39e2e13de46e3a59494ccdb78c2a3%252Fbbf1ca2f5f974c2a9a4e6e3e0ae85a7d&w=1080&q=75"/>

        <FeatureCard icon={<Code  size={30} color='#2563eb'/>} title="Start in seconds, not hours" des="No coding or complex setup required"  imgUrl="https://julius.ai/_next/image?url=https%3A%2F%2Fcdn.builder.io%2Fapi%2Fv1%2Fimage%2Fassets%252Fbdb39e2e13de46e3a59494ccdb78c2a3%252Fbbf1ca2f5f974c2a9a4e6e3e0ae85a7d&w=1080&q=75"/>

        <FeatureCard icon={<Brain  size={30} color='#2563eb'/>} title="Start in seconds, not hours" des="No coding or complex setup required"  imgUrl="https://julius.ai/_next/image?url=https%3A%2F%2Fcdn.builder.io%2Fapi%2Fv1%2Fimage%2Fassets%252Fbdb39e2e13de46e3a59494ccdb78c2a3%252Fbbf1ca2f5f974c2a9a4e6e3e0ae85a7d&w=1080&q=75"/>

        <FeatureCard icon={<History  size={30} color='#2563eb'/>} title="Start in seconds, not hours" des="No coding or complex setup required"  imgUrl="https://julius.ai/_next/image?url=https%3A%2F%2Fcdn.builder.io%2Fapi%2Fv1%2Fimage%2Fassets%252Fbdb39e2e13de46e3a59494ccdb78c2a3%252Fbbf1ca2f5f974c2a9a4e6e3e0ae85a7d&w=1080&q=75"/>
      </div>
    </section>
  );
}
