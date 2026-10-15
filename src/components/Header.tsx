import React from 'react'
import Image from 'next/image'
import { FaLocationDot } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";


export default function Header() {
  return (
    <div className='border-b-[0.5px] border-[rgba(0,0,0,0.1)]'>
      <div className=' max-w-300 w-full m-[0px_auto] h-22.5 flex items-center justify-between'>
        <div className='flex gap-5'>
          <Image
            src="/svg/logo.svg"
            alt="Logo"
            width={150}
            height={50}
            className='cursor-pointer'
          />
          <div className='flex items-center justify-center gap-1 border-r border-l border-black p-[0px_12px]'>
            <FaLocationDot className='w-8 h-8' />
            <div className='p-[0px_10px]'>
              <p className='text-[12px]'>Deliver to</p>
              <p className='text-[14px]'>Your address</p>
            </div>
          </div>
          <select name="" id="" className='cursor-pointer'>
            <option value="">UZB</option>
            <option value="">ENG</option>
          </select>
        </div>
        <div className='flex items-center gap-5'>
          <form className='bg-[rgba(234,248,231,1)] flex items-center justify-center rounded-[200px] focus-within:bg-[#d2f3cc] transition-all duration-300 p-[6px_4px] cursor-pointer'>
            <input type="text" placeholder="What you' re looking for" className=' min-w-85 w-full p-[0px_16px] outline-none' />
            <button className='bg-white flex items-center justify-center gap-2 rounded-[200px] p-[8px_32px] cursor-pointer'>
              <FiSearch /> Search
            </button>
          </form>
          <div className='cursor-pointer'>
            <FaUserAlt />
          </div>
          <div className='flex items-center justify-center gap-2 cursor-pointer'>
            <SlBasket />Cart
          </div>
        </div>
      </div>
    </div>

  )
}