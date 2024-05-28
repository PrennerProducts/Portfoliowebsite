import { useState } from 'react';
import { FaLocationArrow } from 'react-icons/fa6';
import { socialMedia } from '@/data';
import MagicButton from './MagicButton';
import Popup from './ui/socialPopup';

interface SocialMediaInfo {
  id: number;
  url?: string;
  img: string;
  message?: string;
}

const Footer = () => {
  const [popupMessage, setPopupMessage] = useState('');
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleIconClick = (message: string) => {
    setPopupMessage(message);
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <footer className="relative w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> voice skills
          to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can join your team.
        </p>
        <a href="mailto:lukas@lupre.at?subject=Let's%20Get%20in%20Touch&body=Congratulations!%20We%20don't%20need%20an%20interview%2C%20you're%20hired%20straight%20away!%20Just%20kidding%2C%20let's%20talk%20about%20your%20awesome%20skills%20and%20how%20you%20can%20help%20us%20grow.">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
        <a href="mailto:lukas@lupre.at?subject=Application%20for%20Position&body=Please%20find%20attached%20my%20CV.">
          <MagicButton
            title="Download my CV"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Lukas Prenner
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info: SocialMediaInfo) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              onClick={() =>
                info.url
                  ? window.open(info.url, '_blank')
                  : handleIconClick(info.message || 'No message provided')
              }
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>

      {isPopupVisible && <Popup message={popupMessage} onClose={closePopup} />}
    </footer>
  );
};

export default Footer;
