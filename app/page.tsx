'use-client'
// import Image from "next/image";

export default function Home() {
  return (
    <div className="">
    <main className="min-h-screen flex items-center justify-between w-full h-full">
      <div className="flex-1 p-8">
        <h1 className="text-8xl text-white mb-4">Welcome to OrbitalEdge</h1>
        <p className="mb-4 font-[family-name:var(--font-geist-mono)] typewriter">Embark on an Interstellar Journey - Explore, Learn, and Expand Your Horizons.</p>

        <div className="flex gap-4">
          <button className="btn glass">Get Started</button>
          {/* <button className="btn glass">Button 2</button> */}
        </div>
      </div>
      <div className="glow"></div>

      <div className="flex-1">
        <video src="Rocket_dark.webm" className="w-full h-full object-cover" autoPlay loop muted />
      </div>
    </main>
  </div>
  );
}
