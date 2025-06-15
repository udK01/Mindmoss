import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <section className="relative w-full h-full flex flex-col">
      {/* Waves */}
      <div className="w-full z-40">
        <div className="absolute bottom-[100%] left-0 w-full overflow-hidden line-height-0 transform rotate-180">
          <svg
            className="relative block w-full h-32"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="fill-[#1C1C1C]"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="fill-[#1C1C1C]"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="fill-[#1C1C1C]"
            ></path>
          </svg>
        </div>
      </div>

      <div className="w-full flex justify-center bg-dark_gray text-white">
        <div className="xl:w-[80%] flex lg:flex-row 2xs:flex-col justify-between items-center space-y-10 mb-10">
          <div>
            <img src="/Logo.png" />
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold underline mb-3">Follow Us</h3>
            <div className="flex gap-4">
              <FaLinkedin className="size-8 hover:text-blue-500 hover:cursor-pointer transition-all duration-300" />
              <FaSquareXTwitter className="size-8 hover:text-beige hover:cursor-pointer transition-all duration-300" />
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
              <div className="border-b-2 border-highlight">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="p-2 bg-transparent text-white"
                />
                <button className="text-white rounded-r hover:text-highlight transition-colors duration-300">
                  <FaTelegramPlane className="size-6" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full flex justify-center text-center text-sm bg-dark_gray text-white">
        <div className="w-[90%] border-t border-highlight pt-4">
          <p>
            &copy; {new Date().getFullYear()} Mindmoss | Designed & Developed by{" "}
            <a
              href="https://dominikmuranyi.dev/"
              className="text-highlight underline"
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
