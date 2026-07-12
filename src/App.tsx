import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./sections/Hero";
import { Ticker } from "./sections/Ticker";
import { Welcome } from "./sections/Welcome";
import { IntroPlayer } from "./sections/IntroPlayer";
import { Metrics } from "./sections/Metrics";
import { Materials } from "./sections/Materials";
import { Kickoff } from "./sections/Kickoff";
import { Roadmap } from "./sections/Roadmap";
import { Grading } from "./sections/Grading";
import { Footer } from "./sections/Footer";

export default function App() {
  const [entranceComplete, setEntranceComplete] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setEntranceComplete(true), 700);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen bg-black font-mono text-white">
      <Navbar entranceComplete={entranceComplete} />
      <main>
        <Hero entranceComplete={entranceComplete} />
        <Ticker />
        <Welcome />
        <IntroPlayer />
        <Metrics />
        <Materials />
        <Kickoff />
        <Roadmap />
        <Grading />
      </main>
      <Footer />
    </div>
  );
}
