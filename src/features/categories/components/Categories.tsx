import Link from "next/link";
import { allCategoryes } from "../services/categoryes";
import { Category } from "../types/categoryes";

export default async function CategoryDetail() {
const categoryes:Category = await allCategoryes()
  console.log(categoryes)
  return (
    <div className='max-w-[1240px] w-full m-[0px_auto] h-12.75 flex items-center justify-start p-2.5 gap-[20px]'>
      {
        categoryes?.data?.map((item: any) => (
          <Link key={item.id} href={`/${item.name}`} className=' font-["Lato"] font-normal text-[16px] leading-none tracking-normal cursor-pointer hover:text-[#4EA674]'>
            <p className=' font-["Lato"] font-normal text-[16px] leading-none tracking-normal cursor-pointer hover:text-[#4EA674]'>{item.name}</p>
          </Link>
        ))
      }
      <p className='font-["Lato"] font-normal text-[16px] leading-none tracking-normal cursor-pointer hover:text-[#4EA674]'>see more</p>
    </div>
  )
}
