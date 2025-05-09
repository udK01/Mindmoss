import { IoMdMenu } from "react-icons/io";

export default function Header() {
  return (
    <div className="fixed top-4 right-0 flex items-center justify-end text-white text-[24px] px-[32px] z-50 w-full">
      <IoMdMenu className="text-dark_gray text-[48px] cursor-pointer" />
    </div>
  );
}
