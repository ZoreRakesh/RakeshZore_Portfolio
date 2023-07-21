import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import {BsArrowDownCircleFill} from "react-icons/bs";
import Image from "next/image";

export default function Home() {
  return (
      <div>
        <section className="flex flex-col-reverse md:flex-row justify-between mx-4 md:mx-14">
          <div></div>
          <div className="flex flex-col justify-center h-[480px] animate-slide-in z-30">
            <h1 className=" text-6xl mb-10 leading-tight font-bold">
              Hello
              <br />
              I'm <span className="text-red-600">Rakesh</span><br />
              <span className="text-red-600">Zore</span>
            </h1>
            <p className=" text-xl leading-normal"> 
              A FullStack Web and App Developer,
              <br /> Eager to learn new things.
            </p>
            <a className="hover:text-red-600 mt-10 mr-40 text-[#454545]" href="/RakeshZore.pdf" download>
              <div className="flex animate-bounce">
              <BsArrowDownCircleFill size={23} /><p className="ml-2"> Resume</p>
              </div>
            </a>
          </div>
          <div className=" w-96 h-96 animate-slide-in ">
            <div className="flex">
              <Image
                className="object-fill h-[500px] rounded-lg animate-fade-in "
                alt=""
                src="/Rakesh1.jpg"
              ></Image>
              <div className=" ml-6 flex flex-col justify-center ">
                <div className="my-3 animate-drop">
                  <a
                    className=" hover:text-red-600 text-[#454545] "
                    href="https://www.linkedin.com/in/rakesh-zore-a1aab3227"
                  >
                    <AiFillLinkedin size={30} />
                  </a>
                </div>
                <div className="my-3 animate-drop">
                  <a
                    className=" hover:text-red-600 text-[#454545]"
                    href="https://github.com/ZoreRakesh"
                  >
                    <AiFillGithub size={30} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </section>
      </div>
  
  );
}
// I am currently pursuing BE in IT at Vidhyavardhini's College of Engineering and Technology. I am seeking an entry-level role to enhance and further develop my technical Knowledge.Over the past three years, I have been actively involved in various coding competitions and was awarded the top prize at the Project Showcase. My strengths lie in design and integration, and I possess excellent problem-solving skills. I am enthusiastic about tackling new challenges and implementing innovative projects.
