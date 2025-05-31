import Log from "./Log";

export default function DevLogs() {
  return (
    <section className="min-h-screen flex justify-center py-[200px] bg-beige">
      <div className="w-[80%] flex flex-col space-y-10 items-center">
        <Log />
        <Log />
        <Log />
        <Log />
      </div>
    </section>
  );
}
