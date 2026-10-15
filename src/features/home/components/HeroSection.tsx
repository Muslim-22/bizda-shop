
import CategoryDetail from '../../categories/components/Categories'
import HeroSlider from './HeroSlider'
export default async function HeroSection() {


    return (
        <div>

            <CategoryDetail/>
            <HeroSlider></HeroSlider>
            <div className='relative bottom-[65px] max-w-[1240px] w-full m-[0px_auto] z-100'>
                <div className='flex gap-[18px] '>
                    <div className='bg-white p-[24px] shadow-[0px_0px_8px_0px] shadow-[rgba(0,0,0,0.2)] rounded-2xl w-fit'>
                        <p className='font-["Lato"] font-normal text-[22px] leading-none tracking-normal pb-[15px]'>New Year! New Fashion</p>
                        <img src="/img/Frame 4156.png" alt="" className='object-cover' />
                        <button>Shop Now</button>
                    </div>
                    <div className='bg-white p-[24px] shadow-[0px_0px_8px_0px] shadow-[rgba(0,0,0,0.2)] rounded-2xl w-fit'>
                        <div className='flex items-center justify-between'>
                            <p className='font-["Lato"] font-normal text-[22px] leading-none tracking-normal pb-[15px]'>Gaming accessories</p>
                            <button className="font-['Lato'] font-normal text-[12px] leading-none tracking-normal under border-b-[1px] border-[rgba(100,103,242,1)] text-[rgba(100,103,242,1)] cursor-pointer">See more</button>
                        </div>
                        <div className='grid grid-cols-2 gap-[12px]'>
                            <div className='relative  shadow-[0px_0px_5px_1px] shadow-[rgba(0,0,0,0.2)] rounded-[12px]'>
                                <img src="/img/image 243.png" alt="" className='w-fit h-[115px] p-[0px_44px] object-cover' />
                                <p className='absolute bottom-2 left-2 font-normal text-[12px]'>Headsets</p>
                            </div>
                            <div className='relative shadow-[0px_0px_5px_1px] shadow-[rgba(0,0,0,0.2)] rounded-[12px] '>
                                <img src="/img/image 243.png" alt="" className='w-fit h-[115px] p-[0px_44px] object-cover' />
                                <p className='absolute bottom-2 left-2 font-normal text-[12px]'>Headsets</p>
                            </div>
                            <div className='relative shadow-[0px_0px_5px_1px] shadow-[rgba(0,0,0,0.2)] rounded-[12px]'>
                                <img src="/img/image 243.png" alt="" className='w-fit h-[115px] p-[0px_44px] object-cover' />
                                <p className='absolute bottom-2 left-2 font-normal text-[12px]'>Headsets</p>
                            </div>
                            <div className='relative shadow-[0px_0px_5px_1px] shadow-[rgba(0,0,0,0.2)] rounded-[12px]'>
                                <img src="/img/image 243.png" alt="" className='w-fit h-[115px] p-[0px_44px] object-cover' />
                                <p className='absolute bottom-2 left-2 font-normal text-[12px]'>Headsets</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col  gap-[16px]'>
                        <div className='flex items-center justify-center gap-[16px]'>
                            <div className='relative rounded-2xl'>
                                <img src="/img/LaptopProduct.png" alt="" className='rounded-2xl object-cover' />
                                <p className='absolute bottom-[3px] left-[5px] text-[rgba(255,255,255,1)] underline cursor-pointer'>More details</p>
                            </div>
                            <div className='relative rounded-2xl'>
                                <img src="/img/LaptopProduct.png" alt="" className='rounded-2xl object-cover' />
                                <button className='absolute bottom-[3px] left-[5px] p-[1px_10px] bg-[rgba(95,138,255,1)] rounded-2xl text-white cursor-pointer'>Shop Now</button>
                            </div>
                        </div>
                        <div className=' shadow-[0px_0px_5px_1px] shadow-[rgba(0,0,0,0.2)] rounded-[12px] flex p-[20px]'>
                            <div className='relative w-fit'>
                                <img src="/img/image 243.png" alt="" className='w-fit h-[115px] object-cover' />
                                <p className='absolute top-2 right-[-65px] font-normal text-[12px] bg-[rgba(41,36,174,1)] text-white p-[2px_17px] rounded-tl-[25px] rounded-br-[25px]'>$250 Off</p>
                            </div>
                            <div className='p-[30px_0px] flex flex-col gap-[8px]'>
                                <p className='text-16px'>Philips 4K Ambilight TV</p>
                                <p className='text-16px'>$750.99</p>
                                <button className='m-[10px_0px_0px_0px] p-[5px_23px] bg-[rgba(95,138,255,1)] rounded-2xl text-white'>Shop Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
