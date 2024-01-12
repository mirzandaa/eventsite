import React from 'react';

const PromoMarquee = () => {
  return (
    <div className="w-full h-24 border-primary border-y-2 flex items-center">
      <div className="font-termina text-4xl whitespace-nowrap uppercase relative flex overflow-x-hidden">
        <div className="animate-marquee">
          <span>Get referral code ✺ </span>
          <span>Get referral code ✺ </span>
          <span className="text-primary">Get referral code ✺ </span>
          <span>Get referral code ✺ </span>
          <span>Get referral code ✺ </span>
        </div>
        <div className="absolute top-0 animate-marquee2">
          <span>Get referral code ✺ </span>
          <span>Get referral code ✺ </span>
          <span className="text-primary">Get referral code ✺ </span>
          <span>Get referral code ✺ </span>
          <span>Get referral code ✺ </span>
        </div>
      </div>
    </div>
  );
};

export default PromoMarquee;
