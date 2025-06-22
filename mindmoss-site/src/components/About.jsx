import { useEffect, useState } from "react";

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
    index,
    year = "9999",
    sideImage = "./AboutImages/2021Image.png",
    backgroundText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    left = false,
  }) => {
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        },
        { threshold: 0.2 }
      );

      const element = document.getElementById(`about-info-${index}`);
      if (element) observer.observe(element);

      return () => {
        if (element) observer.unobserve(element);
      };
    }, [index]);

    return (
      <div
        id={`about-info-${index}`}
        className={`flex w-[80%] mx-auto justify-center 2xs:space-y-52 2xs:items-start md:items-center md:flex-row
    md:-space-x-[18rem] lg:-space-x-[30rem] xl:-space-x-40
  `}
      >
        <img
          src={sideImage}
          alt="Side"
          className={`2xs:absolute md:static ${left ? "order-1" : "order-2"}  ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } transition-all duration-700`}
        />
        <div
          className={`flex flex-col space-y-2 ${left ? "order-1" : "order-2"} `}
        >
          {/* Year + Brush Stroke */}
          <div className={`w-full flex ${!left && "justify-end"}`}>
            <div
              className={`relative w-fit h-fit ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              } transition-all duration-1000`}
            >
              <img
                src="./BrushStrokes/Title.png"
                className="h-[70px] w-auto z-0"
                alt="Brush stroke"
              />
              <div className="absolute inset-0 flex items-center pb-4 justify-center z-10 font-finger 2xs:text-[24px] md:text-[48px] lg:text-[60px] text-beige">
                {year}
              </div>
            </div>
          </div>

          {/* Background text block */}
          <div className="relative bg-grass 2xs:w-[300px] md:w-[400px] lg:w-[600px] p-4 rounded-t-[30px]">
            <img
              src="./AboutImages/Drip.png"
              className={`absolute left-0 2xs:top-[85%] md:top-[80%] w-[600px] ${
                isInView ? "translate-y-0" : "-translate-y-[5rem]"
              } transition-all duration-[1400ms] ease-in-out`}
              alt="Drip"
            />
            <div
              className={`relative text-beige z-10 font-poppins sm:text-[12px] md:text-[16px] lg:text-[20px] `}
            >
              {backgroundText}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="relative bg-beige min-h-screen py-[150px] space-y-40 overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full bg-beige bg-paper bg-repeat-y opacity-[66%] z-0"
        style={{ backgroundSize: "100% auto" }}
      />

      <div className="relative z-10">
        {/* Title */}
        <div className="w-full flex items-center justify-center animate-up">
          <div className="font-finger 2xs:text-[40px] md:text-[60px] lg:text-[72px] text-beige z-10">
            Who are we?
          </div>
          <img
            src="./BrushStrokes/Title.png"
            className="absolute object-cover 2xs:scale-x-100 md:scale-x-110"
          />
        </div>

        {aboutInfo.map((a, i) => (
          <AboutComponent
            key={i}
            index={i}
            year={a.year}
            sideImage={a.sideImage}
            backgroundText={a.backgroundText}
            left={i % 2 === 0}
          />
        ))}
      </div>
    </section>
  );
}
