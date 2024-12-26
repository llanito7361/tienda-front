import {assets} from '../assets/assets.js'


const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400">
      {/* hero left side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-0 sm:py-0">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base">OUR BESTSELLERS</p>
          </div>
          <h1 className="prata-regular text-3xl sm:py-3 lg:text-">Latest Arrivals</h1>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
            <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
          </div>
        </div>
      </div>
    {/* Hero Right side */}
    <img src={assets.hero_img} alt="hero_img" className='w-full sm:w-1/2' />
    </div>
  );
};

export default Hero;