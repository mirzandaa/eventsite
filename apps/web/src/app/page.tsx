import Image from 'next/image';
import Selected from './selected/Page';
import Referral from './referral-section/Page';

export default function Home() {
  return (
    <main className="mx-0 w-full">
      <div className="md:relative h-screen">
        <Image
          src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-screen object-cover"
          alt="Event Image"
        />
        <span className="p-10 uppercase absolute top-20 text-4xl md:text-9xl font-termina text-white z-0">
          Ignite Your Experiences
        </span>
      </div>
      <Selected />
      <Referral />
    </main>
  );
}
