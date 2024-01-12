import Card from '@/components/Card';
import SelectedMarquee from '@/components/SelectedMarquee';
import React from 'react';

const Selected = () => {
  return (
    <div className="mx-0 w-full bg-background text-text">
      <SelectedMarquee />
      <div className="p-10 bg-background md:grid grid-cols-4 grid-rows-1 gap-3">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Selected;
