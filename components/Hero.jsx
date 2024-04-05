import * as React from "react";

export default function Hero() {
  return (
    <div className="flex justify-center items-center self-stretch px-16 py-14 mt-5 w-full bg-[linear-gradient(90deg,#8497FC_0%,#4F5A96_100%)] max-md:px-5 max-md:max-w-full">
      <div className="w-full max-w-[1060px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[50%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9ab8f0d15a2c4d514d27ff20e4e1e6bb0befb22e5bd8a6c927e754701e7b9a2f?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9ab8f0d15a2c4d514d27ff20e4e1e6bb0befb22e5bd8a6c927e754701e7b9a2f?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9ab8f0d15a2c4d514d27ff20e4e1e6bb0befb22e5bd8a6c927e754701e7b9a2f?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9ab8f0d15a2c4d514d27ff20e4e1e6bb0befb22e5bd8a6c927e754701e7b9a2f?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9ab8f0d15a2c4d514d27ff20e4e1e6bb0befb22e5bd8a6c927e754701e7b9a2f?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9ab8f0d15a2c4d514d27ff20e4e1e6bb0befb22e5bd8a6c927e754701e7b9a2f?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9ab8f0d15a2c4d514d27ff20e4e1e6bb0befb22e5bd8a6c927e754701e7b9a2f?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9ab8f0d15a2c4d514d27ff20e4e1e6bb0befb22e5bd8a6c927e754701e7b9a2f?apiKey=cf358c329e0d49a792d02d32277323ef&"
              className="max-w-[420px] aspect-square max-md:mt-10 max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto text-white max-md:mt-10 max-md:max-w-full">
              <div className="text-3xl font-bold leading-2 max-md:max-w-full max-md:text-4xl mb-4">
              Streamline the Process of Leads
              </div>
              <div className="mt-3.5 text-lg font-medium leading-2 max-md:max-w-full">
                Seamlessly integrate online tools and platforms to enhance Leads visibility, engage with customers, and boost online reputation.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

