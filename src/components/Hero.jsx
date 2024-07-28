import { Canvas } from "@react-three/fiber";
import SideBar from "./SideBar";
import Activity from "./Activity";
import { OrbitControls, Stage } from "@react-three/drei";
import WineBottle from "./WineBottle";
import { Suspense } from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <section className=" h-full flex flex-col md:flex-row relative py-20 md:py-0">
      <div className="aqua__gradient w-[20%] h-[50%] absolute -z-50 -top-60 -right-10" />

      <div className=" w-full md:w-1/3 h-full flex flex-col items-start justify-center relative">
        <div className="aqua__gradient w-[20%] h-[50%] scale-125 absolute  bottom-0 -left-10" />

        <div className="mx-auto md:mx-0">
          <h1>Century</h1>
          <h1>kahaku</h1>
          <h1>
            wine <span className="hover:animate-pulse">❤</span>{" "}
          </h1>
          <p className="text-2xl py-4">$39.00</p>
          <p className="text-gray-600 mt-10">
            Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
          </p>
          <Button />
        </div>
      </div>
      <div className="w-full md:w-1/3 h-full flex justify-center items-center relative border-l border-r border-white/15">
        <Activity
          customStyles={"-right-40 top-[20%] hidden"}
          userName={"Wolfy"}
          profilePicture={"/pic1.jpg"}
        />
        <Activity
          customStyles={"-left-40 bottom-[20%] hidden"}
          userName={"Madara"}
          profilePicture={"/pic2.jpg"}
        />
        <Canvas className="w-full h-full">
          <Stage environment="studio">
            <Suspense fallback={false}>
              <WineBottle />
            </Suspense>
          </Stage>
          <OrbitControls
            enableZoom={false}
            maxZoom={1.5}
            zoomToCursor={true}
            autoRotate
          />
        </Canvas>
      </div>
      <div className=" w-full md:w-1/3 h-full flex flex-col justify-between py-20 px-10 md:px-0 md:py-0">
        <div className="flex px-5 gap-5 py-10 md:py-10">
          <img src="/arrow.png" alt="" className="invert w-6 rotate-180" />
          <img src="/arrow.png" alt="" className="invert w-6" />
        </div>
        <div className=" h-full"></div>
        <div className="h-full gap-5 px-5">
          <div className="w-full">
            {["Discription", "Nutrition", "Ingredients"].map((item, i) => (
              <SideBar key={i} text={item} />
            ))}
          </div>
          <p className="mt-5 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
            atque voluptatibus dignissimos cum commodi neque.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
