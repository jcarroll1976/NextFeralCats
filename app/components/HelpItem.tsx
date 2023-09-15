import Image from 'next/image';
import React from 'react'

type Props = {
    src: string;
    title: string;
    text: string;
}

function HelpItem({src,title,text}: Props) {
  return (
    <div><div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e] ">
    <Image src={src} alt={title} className="rounded-xl group-hover:opacity-10" />
    <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl font-bold text-white tracking-wider text-center">{title}</h3>
        <p className="pb-4 pt-2 text-white text-center">{text}</p>
    </div>
</div></div>
  )
}

export default HelpItem