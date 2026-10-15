"use client";

import React, { useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function StartExpolingNow() {
    const scrollRef:any = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const totalCards = 12; // Kartalarning jami soni
    const cardsPerView = 5; // Taxminan ko'rinadigan kartalar
    const totalDots = Math.ceil(totalCards / cardsPerView);

    // Scroll qilinganda qaysi nuqta faol ekanligini aniqlash
    const handleScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            const maxScroll = scrollWidth - clientWidth;
            if (maxScroll <= 0) return;
            const currentProgress = scrollLeft / maxScroll;
            const newIndex = Math.round(currentProgress * (totalDots - 1));
            setActiveIndex(newIndex);
        }
    };

    // Nuqtani bosganda o'sha qismga o'tish
    const scrollToPage = (index:any) => {
        if (scrollRef.current) {
            const { scrollWidth, clientWidth } = scrollRef.current;
            const maxScroll = scrollWidth - clientWidth;
            const targetScroll = (maxScroll / (totalDots - 1)) * index;
            scrollRef.current.scrollTo({ left: targetScroll, behavior: 'smooth' });
        }
    };

    // Chap va o'ng tugmalar bosilganda surish
    const scrollByDirection = (direction:any) => {
        if (scrollRef.current) {
            const { clientWidth } = scrollRef.current;
            const scrollAmount = clientWidth * 0.75;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className='max-w-310 w-full mx-auto flex flex-col justify-center gap-8 pb-25'>
            {/* Sarlavha va View All tugmasi */}
            <div className='flex items-center justify-between px-4'>
                <p className='font-bold text-[32px]'>Start exploring now</p>
                <button className='border border-black rounded-[200px] px-6 py-3 cursor-pointer hover:bg-black hover:text-white transition-all duration-300'>
                    View All
                </button>
            </div>

            {/* Asosiy qism */}
            <div className='px-4 flex flex-col gap-6'>
                {/* Relative konteyner (strelkalar shunga nisbatan joylashadi) */}
                <div className='relative flex items-center'>
                    {/* Chap strelka (Kartaning ustiga chiqib turadi) */}
                    <button
                        onClick={() => scrollByDirection('left')}
                        className='absolute -left-5 z-10 bg-white border border-black rounded-full p-3 shadow-md hover:bg-black hover:text-white transition-all cursor-pointer'
                    >
                        <FaChevronLeft size={16} />
                    </button>

                    {/* Kartalar ro'yxati (O'zining asl razmerida qoladi) */}
                    <div
                        ref={scrollRef}
                        onScroll={handleScroll}
                        className='flex items-center gap-8 overflow-x-auto scroll-smooth no-scrollbar w-full py-2'
                    >
                        {[...Array(totalCards)].map((_, i) => (
                            <div key={i} className='bg-[#ccc] rounded-2xl w-45 h-55 shrink-0'></div>
                        ))}
                    </div>

                    {/* O'ng strelka (Kartaning ustiga chiqib turadi) */}
                    <button
                        onClick={() => scrollByDirection('right')}
                        className='absolute -right-5 z-10 bg-white border border-black rounded-full p-3 shadow-md hover:bg-black hover:text-white transition-all cursor-pointer'
                    >
                        <FaChevronRight size={16} />
                    </button>
                </div>

                {/* Pastdagi nuqtali indikatorlar */}
                <div className='flex items-center justify-center gap-2 mt-2'>
                    {[...Array(totalDots)].map((_, index) => (
                        <button
                            key={index}
                            onClick={() => scrollToPage(index)}
                            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                                activeIndex === index
                                    ? 'w-8 bg-black'
                                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}