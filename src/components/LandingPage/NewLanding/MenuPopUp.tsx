import Link from 'next/link';
import React, { useState } from 'react';

function MenuPopUp() {



  return (

    <div className="">

      <div className="flex flex-col h-[70vh]  md:h-auto">
        <div className="h-[1px] w-full bg-white bg-opacity-30 mt-7 md:mt-10"

        >
        </div>
        <div className="px-5 mt-3 text-xl font-bold"
          style={{ opacity: '1', transform: 'none' }}>Sound effect
        </div>
        <div className="w-full" style={{ opacity: '1', transform: 'none' }}>
          <a className="items-center px-5 rounded py-[10px] gap-2 flex cursor-pointer" href="/">
            <p className="text-base text-center text-white">Rainy
            </p>
          </a>
        </div>
        <div className="w-full" style={{ opacity: '1', transform: 'none' }}>
          <a className="items-center px-5 rounded py-[10px] gap-2 flex cursor-pointer" href="/">
            <p className="text-base text-center text-white">Forest
            </p>
          </a>
        </div>
        <div className="w-full" style={{ opacity: '1', transform: 'none' }}>
          <a className="items-center px-5 rounded py-[10px] gap-2 flex cursor-pointer" href="/">
            <p className="text-base text-center text-white">Camfire crackling
            </p>
          </a>
        </div>
        <div className="w-full" style={{ opacity: '1', transform: 'none' }}>
          <a className="items-center px-5 rounded py-[10px] gap-2 flex cursor-pointer" href="/">
            <p className="text-base text-center text-white">Waterfall
            </p>
          </a>
        </div>
        <div className="h-[1px] w-full bg-white bg-opacity-30 mt-7 md:mt-10"
          style={{ opacity: '1', transform: 'none' }}>
        </div>
        <div className="px-5 mt-5 text-xl font-bold"
          style={{ opacity: '1', transform: 'none' }}>You may like
        </div>
        <div className="w-full" style={{ opacity: '1', transform: 'none' }}>
          <Link href="/watch?v=q8AzTS4Yq3I"><a className="items-center px-5 rounded py-[10px] gap-2 flex cursor-pointer" >
            <p className="text-base text-center text-white ">[Vietsub] Là anh - Mộng Nhiên
            </p>
          </a></Link>
        </div>
        <div className="w-full" style={{ opacity: '1', transform: 'none' }}>
          <Link href="/watch?v=WgTMeICssXY"><a className="items-center px-5 rounded py-[10px] gap-2 flex cursor-pointer" >
            <p className="text-base text-center text-white">Ruth B. - Dandelions
            </p>
          </a></Link>
        </div>
        <div className="w-full" style={{ opacity: '1', transform: 'none' }}>
          <Link href="/watch?v=ZpGlNIItm4E"><a className="items-center px-5 rounded py-[10px] gap-2 flex cursor-pointer" >
            <p className="text-base text-center text-white">Giấc Mơ Có Thật | Lệ Quyên
            </p>
          </a></Link>
        </div>
        <div className="w-full" style={{ opacity: '1', transform: 'none' }}>
          <Link href="/watch?v=SNES5Y-tYxM"><a className="items-center px-5 rounded py-[10px] gap-2 flex cursor-pointer" >
            <p className="text-base text-center text-white">BINZ - OK (Official Music Video)
            </p>
          </a></Link>
        </div>
        <div className="w-full" style={{ opacity: '1', transform: 'none' }}>
          <Link href="/watch?v=4CleuAo70DM"><a className="items-center px-5 rounded py-[10px] gap-2 flex cursor-pointer" >
            <p className="text-base text-center text-white">TÌNH NHÂN ƠI - ORANGE Ft BINZ
            </p>
          </a></Link>
        </div>
        <div className="w-full" style={{ opacity: '1', transform: 'none' }}>
          <Link href="/watch?v=XdBsAXOxYfo"><a className="items-center px-5 rounded py-[10px] gap-2 flex cursor-pointer" >
            <p className="text-base text-center text-white">TOULIVER X BINZ - THEY SAID
            </p>
          </a></Link>
        </div>
        <div className="w-full" style={{ opacity: '1', transform: 'none' }}>
          <Link href="/watch?v=M8U7PR6fQNA"><a className="items-center px-5 rounded py-[10px] gap-2 flex cursor-pointer" >
            <p className="text-base text-center text-white">NHẠT - PHAN MẠNH QUỲNH
            </p>
          </a></Link>
        </div>
        <div className="w-full" style={{ opacity: '1', transform: 'none' }}>
          <Link href="/watch?v=pcKR0LPwoYs"><a className="items-center px-5 rounded py-[10px] gap-2 flex cursor-pointer" >
            <p className="text-base text-center text-white">Stay With Me
            </p>
          </a></Link>
        </div>
      </div>
    </div>


  );
}

export default MenuPopUp;


