export default function Contact() {
  return (
    <section className="bg-beige w-full h-full min-h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center w-[80%] space-y-[50px]">
        {/* Title */}
        <div className="relative flex items-center justify-center w-fit px-28 -ml-10">
          <div className="font-finger text-[72px] text-beige z-10">
            Contact Us
          </div>
          <img
            src="./BrushStrokes/Title.png"
            className="absolute object-cover"
          />
        </div>

        <form className="flex flex-col space-y-10">
          <input
            type="text"
            id="name"
            name="name"
            required
            inputMode="text"
            className="bg-transparent rounded-[4px] focus:outline-none text-[48px] font-patrick px-[4px] border-b-2 border-dashed border-dark_gray placeholder-dark_gray"
            placeholder="Name"
          />
          <input
            type="email"
            id="email"
            name="email"
            required
            inputMode="email"
            className="bg-transparent rounded-[4px] focus:outline-none text-[48px] font-patrick px-[4px] border-b-2 border-dashed border-dark_gray placeholder-dark_gray"
            placeholder="Email"
          />
          <textarea
            id="message"
            name="message"
            required
            rows="2"
            className="bg-transparent rounded-[4px] focus:outline-none text-[48px] font-patrick px-[4px] py-2 border-b-2 border-dashed border-dark_gray placeholder-dark_gray max-h-[300px]"
            placeholder="Message"
          />
          {/* Submit Button */}
          <div className="w-full flex justify-end">
            <button className="relative flex items-center justify-center w-fit px-16">
              <div className="font-finger text-[48px] text-beige z-10">
                Submit
              </div>
              <img
                src="./BrushStrokes/Title.png"
                className="absolute object-cover"
              />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
