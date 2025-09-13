import React from 'react';

const committees = [
  {
    icon: "public",
    name: "UNSC",
    agenda: "Peace & Security in a Multipolar World",
    difficulty: "Advanced",
    difficultyColor: "bg-red-500/20 text-red-300"
  },
  {
    icon: "groups",
    name: "GA",
    agenda: "Fostering Global Cooperation and Development",
    difficulty: "Beginner",
    difficultyColor: "bg-green-500/20 text-green-300"
  },
  {
    icon: "diversity_3",
    name: "HRC",
    agenda: "Protecting and Promoting Human Rights",
    difficulty: "Intermediate",
    difficultyColor: "bg-yellow-500/20 text-yellow-300"
  },
  {
    icon: "account_balance",
    name: "ECOSOC",
    agenda: "Sustainable Development and Economic Growth",
    difficulty: "Intermediate",
    difficultyColor: "bg-yellow-500/20 text-yellow-300"
  },
  {
    icon: "gavel",
    name: "ICJ",
    agenda: "Interpreting International Law",
    difficulty: "Advanced",
    difficultyColor: "bg-red-500/20 text-red-300"
  },
  {
    icon: "groups_3",
    name: "AIPPM",
    agenda: "Addressing Political Issues in India",
    difficulty: "Intermediate",
    difficultyColor: "bg-yellow-500/20 text-yellow-300"
  }
];

const Committees = () => {
  return (
    <section 
      id="committees" 
      className="min-h-screen flex flex-col justify-between overflow-x-hidden"
      style={{
        backgroundImage: "linear-gradient(180deg, #1A1D4F 0%, #131320 50%)",
        fontFamily: '"Noto Sans", sans-serif'
      }}
    >
      <main className="flex-grow">
        <div className="p-4">
          <div className="text-center mb-8 pt-8">
            <h1 
              className="text-white text-4xl font-bold tracking-tight mb-2"
              style={{ fontFamily: '"Newsreader", serif' }}
            >
              Our Distinguished Committees
            </h1>
            <div className="h-1 w-24 bg-[#FFB300] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            {committees.map((committee, index) => (
              <div
                key={index}
                className="backdrop-blur-[10px] rounded-xl border border-white/10 p-4 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/20 hover:-translate-y-1"
                style={{
                  background: "rgba(26, 29, 79, 0.5)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)"
                }}
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-[#FFB300] text-3xl">
                      {committee.icon}
                    </span>
                    <div className="flex-grow">
                      <h2 
                        className="text-white text-xl font-bold"
                        style={{ fontFamily: '"Newsreader", serif' }}
                      >
                        {committee.name}
                      </h2>
                      <p className="text-gray-300 text-sm mt-1">
                        {committee.agenda}
                      </p>
                    </div>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${committee.difficultyColor}`}>
                      {committee.difficulty}
                    </span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/10 flex justify-end">
                    <button 
                      className="text-black text-sm font-bold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                      style={{
                        backgroundImage: "linear-gradient(to right, #FFB300, #d4af37)"
                      }}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </section>
  );
};

export default Committees;