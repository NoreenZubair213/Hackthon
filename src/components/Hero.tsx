import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="w-full h-screen bg-[#fbebb5] flex justify-evenly font-poppins px-[100px] py-[50px]">
      {/* Text Content */}
      <div className="w-[30%]">
        <h2 className="mt-[150px] w-[500px] text-[64px] font-[500]">Rocket single</h2>
        <span className="text-[64px] font-[500]">seater</span>
        <p className="w-[120px] text-[24px] font-[24px] mt-[30px] ml-[10px] pb-[10px] border-b-2 border-black hover:text-[#000000b8] cursor-pointer">
          Shop Now
        </p>
      </div>

      {/* Image */}
      <div className="w-[70%]">
        <img
          src="/hero-img.png"
          alt="Rocket Single Seater"
          className="transform rotate-y-180 w-[90%] h-auto mt-[-90px] ml-[100px]"
        />
      </div>
    </div>
  );
};

export default Hero;

  export const Hero1 = () => {
    return (
      <div className="flex w-full h-[627px] bg-gray-100">
        {/* First Hero Container */}
        <div className="flex flex-col items-center justify-center w-1/2 px-15">
          <img
            src="/hero-img1.png"
            alt="side table"
            className="w-[300px] h-[300px] mt-10 mb-10"
          />
          <h2 className="font-medium text-[36px] pb-2 mr-[20rem]">Side table</h2>
          <p className="w-[105px] text-[20px] pb-2 border-b-2 border-black mr-[24rem]">View More</p>
        </div>
  
        {/* Second Hero Container */}
        <div className="flex flex-col items-center justify-center w-1/2 px-20">
          <img
            src="/hero-img2.png"
            alt="side table"
            className="w-[400px] h-[300px] mt-10 mb-10"
          />
          <h2 className="font-medium text-[36px] mb-2 mr-[20rem]">Side table</h2>
          <p className="w-[105px] text-[20px] pb-2 border-b-2 border-black mr-[24rem]">View More</p>
        </div>
      </div>
    );
  };
  

export const Hero2 = () => {
  return (
    <div className='w-[85%] h-[777px] bg-white m-auto font-poppins'>
      <div className="h-[20%] pt-[100px] px-[100px] text-center">
        <h2 className='text-[36px] font-[500]'>Top Picks For You</h2>
        <p className='text-[16px] text-[#9f9f9f]'>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
      </div>
      <div className="h-[80%] flex items-center gap-[30px] pl-[60px]">
        <div className='w-[22%]'>
          <img src="/img-1.png" className='w-[185px] h-[182px] mb-[28px] ' />
          <p className='text-[16px] font-poppins font-[400]'>Trenton modular sofa_3</p>
          <h2 className='text-[20px] font-poppins font-[500]'>Rs. 25,000.00</h2>
        </div>
        <div className='w-[22%]'>
          <img src="/img-2.png"  className='w-[185px] h-[182px] mb-[28px] '/>
          <p className='text-[16px] font-poppins font-[400]'>Granite dining table with dining chair</p>
          <h2 className='text-[20px] font-poppins font-[500]'>Rs. 25,000.00</h2>
      </div>
      <div className='w-[22%]'>
          <img src="/img-3.png" className='w-[180px] mb-[28px] ' />
          <p className='text-[16px] font-poppins font-[400]'>Outdoor bar table and stool</p>
          <h2 className='text-[20px] font-poppins font-[500]'>Rs. 25,000.00</h2>
        </div>
        <div className='w-[22%]'>
          <img src="/img-4.png"  className='w-[180px]  mb-[28px] h-[]'/>
          <p className='text-[16px] font-poppins font-[400]'>Plain console with teak mirror</p>
          <h2 className='text-[20px] font-poppins font-[500]'>Rs. 25,000.00</h2>
        </div>
      </div>
  </div>
  )
}


export const Hero3 = () => {
  return (
    <div className='w-[100%] h-[639px] bg-[#FFF9E5] flex items-center gap-[20px] font-poppins'>
      <div className='w-[70%]'>
        <img src="/img-5.png" className='w-[963px] h-[779px]'/>
      </div>
      <div className='text-center w-[30%]'>
        <p className='text-[24px] font-500'>New Arrivals</p>
        <h2 className='text-[48px] font-bold'>Asgaard sofa</h2>
        <p className='text-[20px] font-[400]'>Order Now</p>
      </div>
    </div>
  )
}


export const Blog = () => {
  return (
    <div className='w-[80%] h-[944px] m-auto font-poppins'>
       <div className='h-[20%] pt-[100px] px-[100px] text-center'>
        <h2 className='text-[36px] font-[500]'>Our Blogs</h2>
        <p className='text-[16px] text-[#9f9f9f] '>Find a bright ideal to suit your taste with our great selection</p>
       </div>
       <div className='h-[70%] flex gap-[30px] items-center'>
        <div className='w-[30%] ml-[25px] h-[555px]'>
          <img src="/img-6.jpg" className='w-[393px] h-[353px]' />
          <div className='flex flex-col items-center py-[15%]'>
            <p className='text-[20px] font-[400] text-center mb-[4px]'>Going all-in with millennial design</p>
          <h2 className='text-[24px] font-[500] text-center pb-[6px] border-b border-black'>Read More</h2>
          <img src="/time.png" className='h-[22px] mt-[20px]' />
          </div>
        </div>
        <div className='w-[30%] h-[555px'>
          <img src="/img-7.jpg" className='w-[393px] h-[353px]' />
          <div className='flex flex-col items-center py-[15%]'>
            <p className='text-[20px] font-[400] text-center mb-[4px]'>Going all-in with millennial design</p>
          <h2 className='text-[24px] font-[500] text-center pb-[6px] border-b border-black'>Read More</h2>
          <img src="/time.png" className='h-[22px] mt-[20px]' />
          </div>
        </div>
        <div className='w-[30%] h-[555p'>
          <img src="/img-8.jpg" className='w-[393px] h-[353px]' />
          <div className='flex flex-col items-center py-[15%]'>
            <p className='text-[20px] font-[400] text-center mb-[4px]'>Going all-in with millennial design</p>
          <h2 className='text-[24px] font-[500] text-center pb-[6px] border-b border-black'>Read More</h2>
          <img src="/time.png" className='h-[22px] mt-[20px]' />
          </div>
        </div>
       </div>
       <div className='h-[10%] m-auto w-[12%]'>
        <h2 className='text-[20px] font-[500] pb-[10px] border-b border-black'>View All Post</h2>
       </div>
    </div>
  )
}

export const Contact = () => {
  return (
    <div className='bg-[#f4f4f4] w-[100%] h-[400px] relative flex items-center justify-center'>
      <img src="/img-9.jpg" className='opacity-15 w-[100%] h-[100%] absolute top-0 left-0' />
      <div className='relative z-10 text-center p-6'>
        <h2 className='text-black font-bold text-[60px] mb-2'>Our Instagram</h2>
        <p className='text-black text-[20px] py-1 px-3 rounded'>Follow our store on Instagram</p>
        <button className='bg-white text-black font-[500] mt-4 py-2 px-9 rounded-[40px] shadow-lg hover:bg-gray-200'>Follow Us</button>
      </div>
    </div>
  )
}




