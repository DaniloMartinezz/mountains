import React from 'react';

interface LineTextProps {
  text: string;
}

const LineText: React.FC<LineTextProps> = ({ text }) => {
  return (
    <div className="flex items-center text-textColor-yellow font-inter">
      <span className="mr-2 border-b border-textColor-yellow  flex-grow max-w-10"></span>
      <span>{text}</span>
    </div>
  );
}

export default LineText;
