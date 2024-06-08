import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';

interface OverlayTextImageProps {
  imageUrl: string;
  lineTexto: JSX.Element;
  mainText: string;
  secondaryText: string;
}

const OverlayTextImage: React.FC<OverlayTextImageProps> = ({ imageUrl, lineTexto, mainText, secondaryText }) => {
  return (
    <div className="p-10 relative">
      <img src={imageUrl} alt="" className="opacity-40  " />
      <div className="absolute top-[15vh] flex flex-col justify-center w-[20rem] text-white">
        <div className="py-2">{lineTexto}</div>
        <div className="py-2 font-cactus text-4xl">{mainText}</div>
        <div className="py-2 font-inter">{secondaryText}</div>
        <div className="py-2 font-inter">read more <span className="pl-2"><FaLongArrowAltRight /></span></div>
      </div>
    </div>
  );
};

export default OverlayTextImage;
