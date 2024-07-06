import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="md:w-[1440px] mx-auto h-screen  pt-10  text-white">
      <Navbar />
      <Hero />
    </main>
  );
}

export default App;
