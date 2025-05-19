export default function About() {
  const aboutInfo = [
    {
      year: "2021",
      sideImage: "./AboutImages/2021Image.png",
      backgroundText:
        "We met during our second year at Swansea University — our first time on campus after Covid-19 restrictions eased. That initial lab project marked the beginning of our collaboration.",
    },
    {
      year: "2023",
      sideImage: "./AboutImages/2023Image.png",
      backgroundText:
        "Our shared passion for game development led us to participate in multiple game jams, where we explored creativity, rapid prototyping, and teamwork.",
    },
    {
      year: "2024",
      sideImage: "./AboutImages/2024Image.png",
      backgroundText:
        "We entered the NSE Game Development Challenge with our project Defiled West and proudly took home the Design Muse Award, recognizing our creativity and innovation.",
    },
    {
      year: "2025",
      sideImage: "./AboutImages/2025Image.png",
      backgroundText:
        "After years of collaboration, we realized how much we enjoyed making games together. That shared passion led to the creation of Mindmoss — our way of continuing the journey as a team.",
    },
  ];

  const AboutComponent = ({
    year = "9999",
    sideImage = "./AboutImages/2021Image.png",
    backgroundText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    left = false,
  }) => {
    return (
      <div
        className={`flex ${
          left ? "flex-row" : "flex-row-reverse space-x-reverse"
        } w-[80%] mx-auto -space-x-40 justify-center items-center`}
      >
        <img src={sideImage} alt="Side" />
        <div className="flex flex-col space-y-2">
          {/* Year + Brush Stroke */}
          <div className={`w-full flex ${!left && "justify-end"}`}>
            <div className="relative w-fit h-fit">
              <img
                src="./BrushStrokes/Title.png"
                className="h-[70px] w-auto z-0"
                alt="Brush stroke"
              />
              <div className="absolute inset-0 flex items-center pb-4 justify-center z-10 font-finger text-[60px] text-beige">
                {year}
              </div>
            </div>
          </div>

          {/* Background text block */}
          <div className="relative bg-grass w-[600px] p-4 rounded-[30px]">
            <img
              src="./AboutImages/Drip.png"
              className="absolute left-0 top-[80%] w-[600px]"
              alt="Drip"
            />
            <div className="relative z-10 font-poppins text-[20px] text-beige">
              {backgroundText}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="bg-beige h-full min-h-screen py-[150px] space-y-40">
      {/* Title */}
      <div className="relative w-full flex items-center justify-center">
        <div className="font-finger text-[72px] text-beige z-10">
          Who are we?
        </div>
        <img
          src="./BrushStrokes/Title.png"
          className="absolute object-cover scale-x-110"
        />
      </div>

      {aboutInfo.map((a, i) => (
        <AboutComponent
          key={i}
          year={a.year}
          sideImage={a.sideImage}
          backgroundText={a.backgroundText}
          left={i % 2 === 0}
        />
      ))}
    </section>
  );
}

// <div className="flex w-[80%] mx-auto py-20 -space-x-40 justify-center">
//   <img src="./AboutImages/2021Image.png" />
//   <div className="flex flex-col space-y-2">
//     <div className="w-full flex">
//       <div className="relative w-fit h-fit">
//         <img
//           src="./BrushStrokes/Title.png"
//           className="h-[70px] w-auto z-0"
//           alt="Brush stroke"
//         />
//         <div className="absolute inset-0 flex items-center pb-4 justify-center z-10 font-finger text-[60px] text-beige">
//           2021
//         </div>
//       </div>
//     </div>

//     {/* Background */}
//     <div className="relative bg-grass w-[600px] p-4 rounded-[30px]">
//       <img
//         src="./AboutImages/Drip.png"
//         className="absolute left-0 top-[80%] w-[600px]"
//       />
//       <div className="relative z-10 font-poppins text-[20px] text-beige">
//         We met during our second year at Swansea University — our first
//         time on campus after Covid-19 restrictions eased. That initial lab
//         project marked the beginning of our collaboration.
//       </div>
//     </div>
//   </div>
// </div>
