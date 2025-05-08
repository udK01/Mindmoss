export default function Header() {
  return (
    <div className="bg-dark_gray flex items-center justify-between text-white text-[24px] px-[32px]">
      <img src="./Logo.png" />
      <div className="flex gap-8">
        <div>Home</div>
        <div>About</div>
        <div>Library</div>
        <div>Dev Logs</div>
        <div>Contact</div>
      </div>
      <div>Login</div>
    </div>
  );
}
