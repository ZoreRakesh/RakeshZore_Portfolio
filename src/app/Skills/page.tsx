import React from 'react';
import {AiFillHtml5} from 'react-icons/ai'
import {BiLogoCss3,BiLogoJavascript,BiLogoJava,BiLogoPython,BiLogoNodejs,BiLogoFlutter,BiLogoFlask,BiLogoMongodb,BiLogoFirebase} from 'react-icons/bi'
import {RiReactjsFill} from 'react-icons/ri'
import {TbBrandNextjs} from 'react-icons/tb'
import {SiDart,SiMysql} from 'react-icons/si'

const Skills: React.FC = () => {
  return (
    <>
<main className="p-8">
    <section id="skills" className='mx-4 md:mx-14'>
      <h2 className=' text-4xl font-bold'>Skills</h2>
      <hr className="border-t-2 border-red-600" />

      <div className="grid grid-cols-1 md:grid-cols-3  gap-3 m-10">
     <div className='flex flex-col items-center'>
     <div className='my-5 font-bold text-2xl'>Languages</div>
      <ul className='mx-2 leading-9'>
        <li className='flex items-center'><AiFillHtml5 size={20} className='mr-2 text-red-600'/>HTML</li>
        <li className='flex items-center'><BiLogoCss3 size={20} className='mr-2 text-red-600'/>CSS</li>
        <li className='flex items-center'><BiLogoJavascript size={20} className='mr-2 text-red-600'/>JS</li>
        <li className='flex items-center'><BiLogoJava size={20} className='mr-2 text-red-600'/>JAVA</li>
        <li className='flex items-center'><SiDart size={20} className='mr-2 text-red-600'/>DART</li>
        <li className='flex items-center'><BiLogoPython size={20} className='mr-2 text-red-600'/>PYTHON</li>

      </ul>
     </div>
     <div className='flex flex-col items-center'>
     <div className='my-5 font-bold text-2xl'>Frameworks</div>
      <ul className='mx-4 leading-9'>
        <li className='flex items-center'><RiReactjsFill size={20} className='mr-2 text-red-600'/>REACTJS</li>
        <li className='flex items-center'><BiLogoNodejs size={20} className='mr-2 text-red-600'/>NODEJS</li>
        <li className='flex items-center'><TbBrandNextjs size={20} className='mr-2 text-red-600'/>NEXTJS</li>
        <li className='flex items-center'><BiLogoFlutter size={20} className='mr-2 text-red-600'/>FLUTTER</li>
        <li className='flex items-center'><BiLogoFlask size={20} className='mr-2 text-red-600'/>FLASK</li>

      </ul>
  
     </div>
     <div className='flex flex-col items-center'> 
     <div className='my-5 font-bold text-2xl'>Databases</div>
      <ul className='mx-4 leading-9'>
        <li className='flex items-center'><BiLogoMongodb size={20} className='mr-2 text-red-600'/>MONGODB</li>
        <li className='flex items-center'><BiLogoFirebase size={20} className='mr-2 text-red-600'/>FIREBASE</li>
        <li className='flex items-center'><SiMysql size={20} className='mr-2 text-red-600'/>MYSQL</li>

      </ul>
     </div>
      </div>
    </section>
    </main>
    </>
  );
};

export default Skills;
