import { FaSquareXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <section className="relative w-full h-full flex flex-col">
      <div className="absolute w-full h-full bg-beige opacity-100 z-0" />

      <div className="relative w-full h-[300px] xl:h-[600px] bg-grass z-20 mask-paint bg-no-repeat bg-cover bg-bottom" />

      <div className="w-full flex justify-center text-white z-10">
        <div className="xl:w-[80%] flex lg:flex-row 2xs:flex-col justify-between items-center space-y-10 mb-10">
          <img src="/Logo.png" className="size-32" />
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold underline mb-3">Follow Us</h3>
            <div className="flex gap-4">
              <FaLinkedin className="size-8 hover:text-blue-500 hover:cursor-pointer transition-all duration-300" />
              <FaSquareXTwitter className="size-8 hover:text-black hover:cursor-pointer transition-all duration-300" />
              <FaYoutube className="size-8 hover:text-red-500 hover:cursor-pointer transition-all duration-300" />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold underline mb-3">Contact Us</h3>
            <div className="flex items-center hover:underline hover:cursor-pointer transition-all duration-300">
              <IoIosMail className="size-6" />
              <div className="text-lg">contact@mindmoss.co.uk</div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold underline mb-3">
              Stay Updated
            </h3>
            <form className="mt-2 flex justify-center md:justify-start">
              <div className="border-b-2 border-grass">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="p-2 bg-transparent text-white"
                />
                <button className="text-white rounded-r hover:text-grass transition-colors duration-300">
                  <FaTelegramPlane className="size-6" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full flex justify-center text-center text-sm text-white pb-6 z-30">
        <div className="w-[90%] border-t border-grass pt-4">
          <p>
            &copy; {new Date().getFullYear()} Mindmoss | Designed & Developed by{" "}
            <a
              href="https://dominikmuranyi.dev/"
              className="text-grass underline"
            >
              Dominik Muranyi
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
