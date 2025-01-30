import React from 'react';
import design from '../assets/images/design_10.png';

function Home() {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center bg-[#E5E4E2]">
        <div className="h-full flex justify-center items-center flex-col" style={{ width: "50%" }}>
          <div className="w-auto h-auto space-y-3 flex items-start flex-col">
            <h1 className="font-medium text-2xl tracking-wider">Trade-in-offer</h1>
            <h1 className="font-bold text-4xl tracking-widest">Super value deals</h1>
            <h1 className="font-bold text-4xl text-[#39bfb4] tracking-widest">On all products</h1>
            <h4 className="font-medium text-lg tracking-widest">Save more with coupons & and 50% off!</h4>
          </div>

          <div className="mt-10 border-b-2 border-[#39bfb4] rounded px-1">
            <span className="font-mono font-extrabold text-3xl text-[#39bfb4]">Shop Now</span>
          </div>
        </div>

        <div className=" bg-cover  flex justify-center items-center" style={{ width: "50%"  }}>
          <div className=" object-cover overflow-hidden  "
          style={{width:"80%",height:"100%"}}
          >
            <img
              src={design}
              alt="Design"
               className="object-cover  mt-1 "
               style={{width:"100%",height:"100%"}}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
