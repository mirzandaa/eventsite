import React from 'react';

const SelectedMarquee = () => {
  return (
    <div className="w-full h-24 border-primary border-y-2 flex items-center">
      <div className="font-termina text-4xl whitespace-nowrap uppercase relative flex overflow-x-hidden">
        <div className="animate-marquee">
          <span>Selected Events ✺ </span>
          <span>Selected Events ✺ </span>
          <span className="text-primary">Selected Events ✺ </span>
          <span>Selected Events ✺ </span>
          <span>Selected Events ✺ </span>
        </div>
        <div className="absolute top-0 animate-marquee2">
          <span>Selected Events ✺ </span>
          <span>Selected Events ✺ </span>
          <span className="text-primary">Selected Events ✺ </span>
          <span>Selected Events ✺ </span>
          <span>Selected Events ✺ </span>
        </div>
      </div>
    </div>
  );
};

export default SelectedMarquee;
