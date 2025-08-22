const team = [
  {
    name: "Laiba Muhammad Aslam",
    role: "Software Engineer",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg/800px-Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg", // replace with actual image
    description:
      "Laiba is a Software Engineer with over 2 years of implementing leading-edge technologies including Cloud, AI/ML and Data & Analytics.", // Intro
  },
  {
    name: "Kamil Raza",
    role: "Enterprise Solutions Expert",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg/800px-Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg", // replace with actual image
    description:
      "Kamil's experience ranges from building successful enterprise-grade ERPs to eCommerce platforms serving over a million users per month.", // Intro
  },
  {
    name: "Muhammad Ausaf Jamal",
    role: "Software Engineer & Consultant",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg/800px-Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg", // replace with actual image
    description:
      "Ausaf has experience in software engineering, strategy consulting, and product management internationally.", // Intro
  },
  {
    name: "Hamza Ali Shah",
    role: "SaaS Solutions Expert",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg/800px-Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg", // replace with actual image
    description:
      "Hamza has experience building SaaS solutions, enterprise solutions, ERP systems, eCommerce stores, and bespoke software.", // Intro
  },
];

export default function TeamSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 md:text-[36px] text-gray-800">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {team.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow hover:shadow-2xl transition"
            >
              {/* <img
                src={member.img}
                alt={member.name}
                className="w-42 h-42 rounded-full object-cover border-5 border-transparent hover:border-[#2563eb] transition mb-4"
              /> */}
               <img
                src={member.img}
                alt={member.name}
                className="w-50 h-50 rounded-lg object-cover border-5 border-transparent hover:border-[#2563eb] transition mb-4"
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
