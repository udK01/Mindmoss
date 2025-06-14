export default function Patreon() {
  return (
    <section className="relative pb-20 w-full h-full min-h-screen">
      {/* Background layer */}
      <div className="absolute w-full h-full bg-beige bg-paper opacity-100 z-0" />

      {/* Decorative tile image */}
      <img
        src="/PatreonImages/Tiles.png"
        className="absolute w-full h-full object-cover z-10"
      />

      {/* Drip image */}
      <img
        src="/GreenDrip.png"
        alt="Paint Drip"
        className="absolute top-0 left-0 w-full 2xs:h-[30%] md:h-[50%] lg:h-[40%] xl:h-[50%] z-20"
      />

      {/* Card container */}

      <div className="absolute inset-0 flex items-center justify-center z-30">
        <div className="px-8 py-6 flex flex-col lg:flex-row items-center pt-40  gap-40 max-w-[90%]">
          <img
            src="/PatreonImages/PatreonCard.png"
            className="w-[350px] max-w-full h-auto pt-20 object-contain"
            alt="Patreon Card"
          />
          <div className="font-pressStart text-white flex flex-col gap-4">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-l-[30px] rounded-tr-[30px] shadow-md p-6">
              <h2 className="text-[72px] font-bold">Patreon</h2>
              <p className="text-[24px]">
                Like what we do?
                <br />
                Help us keep doing it.
              </p>
            </div>

            <div className="w-full flex justify-end">
              <button className="bg-grass px-6 py-2 rounded hover:px-10 transition-all duration-300">
                Support Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
