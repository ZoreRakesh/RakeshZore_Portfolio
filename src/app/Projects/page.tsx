import Header from "@/components/header";
import React from "react";

const Projects: React.FC = () => {
  return (
    <>
      <main className="p-8">
        <section id="projects" className="mx-4 md:mx-14 ">
          <h1 className="text-4xl font-bold">Projects</h1>
          <hr className="border-t-2 border-red-600" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-10">
  <a href="https://github.com/ZoreRakesh/Music-WebApp">
    <div className="p-4 text-center rounded-lg border-solid border-[1px] border-white hover:animate-pulse cursor-pointer md:min-h-[18rem]">
      <h1 className="font-bold text-xl my-10">Music-WebApp</h1>
      <p className="my-10">A Mern-based Webapp for Playing Music.</p>
    </div>
  </a>
  <a href="https://github.com/ZoreRakesh/Diet-Recommendation-App">
    <div className="p-4 text-center rounded-lg border-solid border-[1px] border-white hover:animate-pulse cursor-pointer md:min-h-[18rem]">
      <h1 className="font-bold text-xl my-10">Health Calci App</h1>
      <p className="my-10">ML-based flutter application for diet recommendation.</p>
    </div>
  </a>
  <a href="https://github.com/ZoreRakesh/Password-Saver-App">
    <div className="p-4 text-center rounded-lg border-solid border-[1px] border-white hover:animate-pulse cursor-pointer md:min-h-[18rem]">
      <h1 className="font-bold text-xl my-10">Password Saver App</h1>
      <p className="my-10">A Flutter App to Store Passwords in your Device.</p>
    </div>
  </a>
  <a href="https://github.com/ZoreRakesh/Event-Listing-App">
    <div className="p-4 text-center rounded-lg border-solid border-[1px] border-white hover:animate-pulse cursor-pointer md:min-h-[18rem]">
      <h1 className="font-bold text-xl my-10">Event Listing App</h1>
      <p className="my-10">App for listing upcoming events and registration of it.</p>
    </div>
  </a>
</div>

        </section>
      </main>
    </>
  );
};

export default Projects;
