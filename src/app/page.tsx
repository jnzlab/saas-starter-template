import Header from "@/components/header";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-dvh">
      <Header />
      <div className="flex flex-col items-center justify-center h-[90dvh]">
        <h1 className="text-6xl font-bold">SaaS Starter Template</h1>
      </div>
    </div>
  );
}
