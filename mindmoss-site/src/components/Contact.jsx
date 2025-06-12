export default function Contact() {
  return (
    <section className="relative bg-beige w-full h-full min-h-screen flex justify-center items-center">
      <div
        className="absolute inset-0 w-full h-full bg-beige bg-paper bg-repeat-y opacity-[66%] z-0"
        style={{ backgroundSize: "100% auto" }}
      />

      <div className="flex flex-col justify-center items-center w-[80%] space-y-[50px] opacity-0 animate-up">
        {/* Title */}
        <div className="relative flex items-center justify-center w-fit 2xs:px-14 md:px-28 -ml-10">
          <div className="font-finger 2xs:text-[38px] md:text-[72px] text-beige z-10">
            Contact Us
          </div>
          <img
            src="./BrushStrokes/Title.png"
            className="absolute object-cover"
          />
        </div>

        <form className="flex flex-col space-y-10 w-full max-w-[500px] 2xs:text-[32px] md:text-[48px] font-patrick">
          <input
            type="text"
            id="name"
            name="name"
            required
            inputMode="text"
            className="bg-transparent rounded-[4px] focus:outline-none px-[4px] border-b-2 border-dashed border-dark_gray placeholder-dark_gray opacity-0 animate-up"
            style={{ animationDelay: "200ms" }}
            placeholder="Name"
          />
          <input
            type="email"
            id="email"
            name="email"
            required
            inputMode="email"
            className="bg-transparent rounded-[4px] focus:outline-none px-[4px] border-b-2 border-dashed border-dark_gray placeholder-dark_gray opacity-0 animate-up"
            style={{ animationDelay: "400ms" }}
            placeholder="Email"
          />
          <textarea
            id="message"
            name="message"
            required
            rows="2"
            className="bg-transparent rounded-[4px] focus:outline-none px-[4px] py-2 border-b-2 border-dashed border-dark_gray placeholder-dark_gray max-h-[300px] opacity-0 animate-up"
            style={{ animationDelay: "600ms" }}
            placeholder="Message"
          />
          {/* Submit Button */}
          <div
            className="w-full flex justify-end opacity-0 animate-up"
            style={{ animationDelay: "800ms" }}
          >
            <button className="relative flex items-center justify-center w-fit 2xs:px-12 md:px-16">
              <div className="font-finger 2xs:text-[24px] md:text-[48px] text-beige z-10">
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
