import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Card = () => {
  return (
    <div className="bg-white w-auto h-96 rounded-lg flex flex-col items-center gap-3 p-3 text-text overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1566808907623-51b8fc382454?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        width="0"
        height="0"
        sizes="100vw"
        className="w-full h-48 rounded-lg object-cover"
        alt="Event Image"
      />
      <div className="flex flex-col self-start gap-3">
        <span className="text-secondary text-md">date ✺ venue name</span>
        <Link href="/">
          <span className="underline font-bold text-xl">EVENT NAME</span>
        </Link>
        <span className="text-secondary text-md">
          from IDR <span className="text-text">1,500,000</span>
        </span>
      </div>
      <button className="bg-accent p-2 rounded-xl self-end">Buy Now →</button>
    </div>
  );
};

export default Card;
