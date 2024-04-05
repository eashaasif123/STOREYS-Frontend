import * as React from "react";
import Logo from "../app/assets/logo.png"
import Shape from "../app/assets/Shape.png"
import Image from 'next/image'

export default function Footer() {
  return (
    <div className="flex flex-col self-stretch px-20 bg-[#F6F7FC] pt-16 pb-8 w-full max-md:px-5 max-md:max-w-full">
      <div className="max-md:mr-1 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[32%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col max-md:mt-10">
            <Image className="h-[40px] w-auto" src={Logo} alt=''/>
              <div className="mt-14 text-sm text-neutral-600 max-md:mt-10">
                Lorem ipsum dolor sit amet consectetur. Mi nibh venenatis in
                suscipit turpis enim cursus vulputate amet. Lobortis mi platea
                aliquam senectus tempus mauris neque.
              </div>
              <div className="flex gap-3.5 justify-center pr-20 mt-5 max-md:pr-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6660c323f25cb3fb9c9fc969daecde7d1202049f5ccba93f92379ae58750a6a0?apiKey=cf358c329e0d49a792d02d32277323ef&"
                  className="shrink-0 aspect-square w-[25px]"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8edd80a6133b07a8b6deb1303af7411467922c4e76fd66ccca39e632c6f29874?apiKey=cf358c329e0d49a792d02d32277323ef&"
                  className="shrink-0 aspect-square w-[25px]"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9943784153eea386ca374fca13b06c74bfc58eb9e0851c81c7ac44e7ccb390b5?apiKey=cf358c329e0d49a792d02d32277323ef&"
                  className="shrink-0 aspect-square w-[25px]"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e013e288e3c2a1ab327de8f8641db4eee94659d4e6de4e53e32fc064d4c196d2?apiKey=cf358c329e0d49a792d02d32277323ef&"
                  className="shrink-0 aspect-square w-[25px]"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/91a0ef9e3852ca5b3f45b17848963479be3b4c20aa4153f94c2ae133c9a528ce?apiKey=cf358c329e0d49a792d02d32277323ef&"
                  className="shrink-0 aspect-square w-[25px]"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[68%] max-md:ml-0 max-md:w-full">
            <div className="grow mt-2.5 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow text-base font-medium leading-5 text-neutral-600 max-md:mt-10">
                    <div className="text-xl font-semibold text-stone-900">
                      Website Links
                    </div>
                    <div className="mt-1">Home</div>
                    <div className="mt-1">Pricing</div>
                    <div className="mt-1">About</div>
                    <div className="mt-1">FAQs</div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[37%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow text-base font-medium leading-5 text-neutral-600 max-md:mt-10">
                    <div className="text-xl font-semibold text-stone-900">
                      Social Platforms
                    </div>
                    <div className="mt-1">Instagram</div>
                    <div className="mt-1">Facebook</div>
                    <div className="mt-1">Tiktok</div>
                    <div className="mt-1">Twitter</div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[37%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col text-sm whitespace-nowrap max-md:mt-10">
                    <div className="text-xl font-semibold text-stone-900">
                      Languages
                    </div>
                    <div className="justify-center px-4 py-3.5 mt-4 text-white bg-indigo-400">
                      English
                    </div>
                    <div className="mt-4 text-neutral-600">French</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shrink-0 mt-14 max-w-full h-px border border-solid bg-neutral-200 border-neutral-200 w-[1272px] max-md:mt-10 max-md:mr-1" />
      <div className="self-center mt-7 text-xs leading-5 text-slate-800">
        © 2024 Company name . All rights reserved.
      </div>
    </div>
  );
}

