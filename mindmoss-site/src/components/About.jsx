export default function About() {
  return (
    <section className="bg-beige h-full min-h-screen py-[150px]">
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
      <div className="flex w-[80%] mx-auto py-20 -space-x-40 justify-center">
        <img src="./AboutImages/2021Image.png" />
        <div className="flex flex-col space-y-2">
          <div className="w-full flex">
            <div className="relative w-fit h-fit">
              <img
                src="./BrushStrokes/Title.png"
                className="h-[70px] w-auto z-0"
                alt="Brush stroke"
              />
              <div className="absolute inset-0 flex items-center pb-4 justify-center z-10 font-finger text-[60px] text-beige">
                2021
              </div>
            </div>
          </div>

          {/* Background */}
          <div className="relative bg-grass w-[600px] p-4 rounded-[30px]">
            <img
              src="./AboutImages/Drip.png"
              className="absolute left-0 top-[80%] w-[600px]"
            />
            <div className="relative z-10 font-poppins text-[20px] text-beige">
              We met during our second year at Swansea University — our first
              time on campus after Covid-19 restrictions eased. That initial lab
              project marked the beginning of our collaboration.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
