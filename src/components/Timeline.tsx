import Image from 'next/image';

const Timeline = () => {
  return (
    <div className="relative flex flex-col items-center  p-6">
      <div className="relative flex items-center justify-center w-full mb-8">
        <div className="absolute inset-0 flex justify-center items-center -z-1 mt-5 mr-14">
          <Image
            src="/Timeline-bg.svg"
            alt="Timeline Background"
            width={500} 
            height={400} 
            className="object-contain opacity-40"
            priority
          />
        </div>
        <h1 className="text-4xl font-bold text-white z-10">TIMELINE</h1>
      </div>
      <div className="w-full max-w-4xl">
        <Image
          src="/Timeline.svg"
          alt="Timeline"
          width={900}
          height={600}
          style={{
            objectFit: 'contain',
            maxWidth: '100%',
            height: 'auto',
          }}
        />
      </div>
    </div>
  );
};

export default Timeline;
