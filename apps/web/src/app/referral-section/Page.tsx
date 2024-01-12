import PromoMarquee from '@/components/PromoMarquee';
import React from 'react';

const Referral = () => {
  return (
    <div className="mx-0 w-full bg-background text-text">
      <PromoMarquee />
      <div className="bg-primary p-10 flex justify-center">
        <div className="w-auto rounded-lg p-10 bg-background flex justify-between gap-10">
          <div className="flex flex-col gap-3">
            <span className="text-text text-3xl font-termina">
              Looking for a better deal?
            </span>
            <span className="text-text">
              Bring your friends along and earn discount points!
            </span>
          </div>
          <button className="w-auto p-5 bg-accent text-5xl rounded-lg">
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Referral;
