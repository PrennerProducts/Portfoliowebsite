import { FaLocationArrow } from 'react-icons/fa6';
import MagicButton from './MagicButton';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';

const Hero = () => {
  return (
    <div className="pb-20 pt-36 relative overflow-hidden flex flex-col md:flex-row">
      {/* Textbereich */}
      <div className="relative z-10 w-full md:w-7/10 flex items-center justify-center bg-black bg-opacity-75">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
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

      {/* Video Bereich */}
      <div className="relative w-full md:w-3/10">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/AdobeStock_676714411.mov" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Hero;
