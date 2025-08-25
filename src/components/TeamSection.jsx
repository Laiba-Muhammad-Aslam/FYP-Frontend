const team = [
  {
    name: "Laiba M. Aslam",
    role: "Software Engineer",
    img: "src/assets/team/laiba.png",
    description:
      "I'm Laiba M. Aslam, a Software Engineer who writes purposeful logic and builds experiences connecting people to tech.",
  },
  {
    name: "M. Ausaf Jamal",
    role: "Software Engineer",
    img: "src/assets/team/ausaf.png",
    description:
      "M. Ausaf Jamal — A digital architect whose mind speaks in algorithms and passion flows through innovative loops.", // Intro
  },
  {
    name: "Kamil Raza",
    role: "Software Engineer",
    img: "src/assets/team/kamil.png",
    description:
      "I'm Kamil Raza. A web maestro with a heart that beats in lines of code and a mind that dreams in vibrant designs.",
  },
  {
    name: "Hamza Ali Shah",
    role: "Technical Consultant",
    img: "src/assets/team/Hamza.png", // replace with actual image
    description:
      "Hamza has experience in software engineering, strategy consulting, and product management internationally", // Intro
  },
];

export default function TeamSection() {
  return (
    <section className="py-16 bg-white" id="our-team">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4 md:text-[36px] text-[#020817]">
          Meet Our Team
        </h2>
        <p className="text-[#404040] md:text-lg font-medium max-w-2xl mx-auto mb-10 text-center">
          Volt AI is our Final Year Project—a culmination of our computer
          science journey. We've built a platform that bridges complex SQL
          queries and simple conversations using advanced AI, turning our
          academic knowledge into a practical solution.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {team.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow transition"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-70 rounded-lg object-cover border-5 border-transparent hover:border-[#2563eb] transition mb-4 cursor-pointer"
              />
              <h3 className="text-xl font-semibold text-[#2563eb] mb-1">
                {member.name}
              </h3>
              <p className="text-sm font-medium text-gray-500 mb-3">
                {member.role}
              </p>
              <p className="text-gray-600 text-sm">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
