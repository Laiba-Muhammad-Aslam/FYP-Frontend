import FeatureCard from "./FeatureCard";
import { Zap, Activity, CloudUpload, ChartColumn, Code, Brain, History } from 'lucide-react';

export default function Features() {
  return (
    <section className="py-16 bg-white" id="features">
      <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-none max-w-[32rem] sm:max-w-[36rem] md:max-w-[42rem] lg:max-w-[48rem] mx-auto px-4 text-center text-[#020817] pb-15">
        Intuitive and easy to use
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 px-5">
        <FeatureCard
          icon={<Zap size={30} color="#2563eb" />}
          title="Start in seconds, not hours"
          des="No coding or complex setup required"
          imgUrl={"/assets/features/feature_1.webp"}
        />

        <FeatureCard
          icon={<CloudUpload size={30} color="#2563eb" />}
          title="Upload everything at once"
          des="No limits, no waiting. Volt AI supports larger SQL files compared to others"
          imgUrl={"/assets/features/feature_2.webp"}
        />

        <FeatureCard
          icon={<ChartColumn size={30} color="#2563eb" />}
          title="Create stunning charts instantly"
          des="Turn your data into clear visuals that explain your findings"
          imgUrl={"/assets/features/feature_3.webp"}
        />

        <FeatureCard
          icon={<Code size={30} color="#2563eb" />}
          title="A place for every team"
          des="Collaborate in real time to uncover insights instantly."
          imgUrl={"/assets/features/feature_4.webp"}
        />

        <FeatureCard
          icon={<Brain size={30} color="#2563eb" />}
          title="Tackle problems generic AI can’t"
          des="Built with advanced capabilities to solve complex data analysis problems"
          imgUrl={"/assets/features/feature_5.webp"}
        />

        <FeatureCard
          icon={<History size={30} color="#2563eb" />}
          title="Skip repetitive explanations"
          des="Volt AI table names and preferences to work faster over time"
          imgUrl={"/assets/features/feature_6.webp"}
        />
      </div>
    </section>
  );
}
