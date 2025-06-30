import profile from '../assets/profile.png';
import { HiOutlineDocumentText } from "react-icons/hi";

function Intro() {
  return (
    <section id='intro' className="flex flex-col justify-center items-center min-h-[95vh] relative mt-12 px-[10%] w-full">

      <div className='absolute inset-0 z-[-1] bg-black/30 border-[1.5px] border-[#00e0ff] rounded-[30px] overflow-hidden flex justify-center items-end'>
        <img src={profile} alt="Profile" className="w-auto h-full max-h-screen opacity-90 object-contain" />
      </div>

      <div className="max-w-[900px] w-full px-5 py-8 text-left font-bold flex flex-col justify-center animate-fadeIn text-[2rem] sm:text-[1.5rem] md:text-[2rem]">
        <span className="text-[1.5rem] font-light mb-2 sm:text-[1.2rem] md:text-[1.5rem]">Hello,</span>

        <span className="text-[2.25rem] leading-snug mb-4 sm:text-[1.75rem] md:text-[2.25rem]">
          I'm
          <span className="ml-2 bg-gradient-to-r from-[#e0faff] to-[#4167e2] bg-clip-text text-transparent font-bold">Abdul Wahab</span>
          <br />
          <span className="bg-gradient-to-r from-[#e0faff] to-[#4167e2] bg-clip-text text-transparent font-bold">Website Developer.</span>
        </span>

        <p className="text-base font-normal leading-relaxed mb-6 sm:text-[0.95rem] md:text-base">
          I'm a front-end web developer focused on building responsive, accessible, and visually engaging websites. With experience in modern tools like React, JavaScript, and CSS frameworks, I create user-centric solutions that deliver seamless digital experiences.
        </p>

        <a href="/portfolio/cv.pdf" download="cv.pdf" className="inline-block w-[100px]">
          <button className="flex items-center gap-2 px-6 py-3 rounded-full text-base font-medium bg-[#00e0ff] text-[#0f2027] hover:bg-gray-100 transition-colors duration-300 sm:text-[0.95rem] sm:px-5 sm:py-2.5">
            <HiOutlineDocumentText /> CV
          </button>
        </a>

      </div>
    </section>
  );
}

export default Intro;
