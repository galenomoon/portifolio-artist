import React from 'react'
import { RiBookMarkLine } from 'react-icons/ri'
import { MdOutlineDragIndicator } from 'react-icons/md'

export default function GitHubRepository() {

  return (
    <a href='https://github.com/galenomoon/portifolio-next' target='_blank' className="z-10 bg-[#0F1216] text-[#7F8896] rounded-lg shadow-md p-4 w-full github-font h-fit border-[1px] border-[#666D77]/40">
      <div className="flex items-center mb-1">
        <div className="w-8 h-8 flex items-center justify-center mr-3">
          <RiBookMarkLine color="#666D77" size={20} />
        </div>
        <div className="flex items-center justify-between w-full">
          <p className="flex items-center justify-center gap-3 text-md font-semibold text-[#2978ED]">
            portifolio-next <span className="rounded-full font-normal text-xs px-2 py-[1px] text-[#666D77] border-[1px] border-[#666D77]/40">Public</span>
          </p>
          <MdOutlineDragIndicator color="#666D7799" size={20} />
        </div>
      </div>
      <div className="h-4 text-start text-sm">
        ⏭️⚛️ - See more about me and my developer skills in my Web Portifolio that I created using Next.js + TailwindCSS + Framer Motion
      </div>
      <div className="flex flex-col items-start h-[60px] justify-end">
        <div className='flex gap-2 items-center justify-center'>
          <div className="rounded-full w-4 h-4 bg-[#EFD95C]" />
          <p className='text-sm'>
            JavaScript
          </p>
        </div>
      </div>
    </a>
  )
}
