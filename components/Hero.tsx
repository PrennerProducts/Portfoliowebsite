import { FaLocationArrow } from 'react-icons/fa6';
import MagicButton from './MagicButton';
import { TextGenerateEffect } from './ui/TextGenerateEffect';

const Hero = () => {
  return (
    <div className="h-screen w-full relative overflow-hidden flex flex-col justify-center items-center bg-black">
      {/* Video Bereich */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src="/BG_Videohalf.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Textbereich */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center bg-black bg-opacity-75 p-6">
        <TextGenerateEffect
          words="Transforming Ideas into Seamless User Experiences"
          className="text-center text-[40px] md:text-5xl lg:text-6xl text-white"
        />

        <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-white">
          Hi! I&apos;m Lukas, a Software Engineer based near Innsbruck.
        </p>

        <a href="#about">
          <MagicButton
            title="Show my work"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
    </div>
  );
};

export default Hero;
