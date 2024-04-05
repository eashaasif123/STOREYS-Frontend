import * as React from "react";

export default function Mission() {
    return (
        <div className="flex flex-col justify-center mt-10">
            <div className="mt-10 font-serif text-3xl text-center font-bold text-black leading-2 max-md:mt-10">
                Our Mission
            </div>
            <div className="px-5 mt-10 w-full max-w-[1000px] max-md:mt-10 max-md:max-w-full mx-auto">
                <p className="leading-8 text-center">Our mission is to provide a comprehensive and user-friendly platform that empowers individuals with knowledge and resources to enhance their understanding and skills in various subjects. Through a combination of informative articles, interactive tools, and engaging content, we aim to foster curiosity, promote lifelong learning, and facilitate personal growth. Our goal is to offer accessible and reliable information that supports users in achieving their educational and professional aspirations.</p>
            </div>
            <div className="p-5 mt-16 w-full rounded-3xl bg-[linear-gradient(90deg,#8497FC_100%,#4F5A96_100%)] max-w-[1200px] max-md:mt-10 max-md:max-w-full m-auto">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow text-center text-white whitespace-nowrap max-md:mt-10">
                            <div className="text-3xl font-semibold">2024</div>
                            <div className="mt-2.5 text-2xl">Founded</div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow text-center text-white whitespace-nowrap max-md:mt-10">
                            <div className="text-3xl font-semibold">2.5K</div>
                            <div className="mt-2.5 text-2xl">Users</div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow text-center text-white max-md:mt-10">
                            <div className="text-3xl font-semibold">96%</div>
                            <div className="mt-2.5 text-2xl">Positive Reviews</div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow text-center text-white whitespace-nowrap max-md:mt-10">
                            <div className="text-3xl font-semibold">4+</div>
                            <div className="mt-2.5 text-2xl">Country</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-14 w-full max-w-[1150px] max-md:mt-10 max-md:max-w-full m-auto">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[57%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col self-stretch px-5 my-auto max-md:mt-10 max-md:max-w-full">
                            <div className="text-4xl leading-10 font-bold text-black max-md:max-w-full max-md:text-4xl">
                                From <span className="text-indigo-400">Unknown</span><br/> to{" "}
                                <span className="text-indigo-400">Unforgettable</span>
                            </div>
                            <div className="mt-9 text-xl text-black max-md:max-w-full">
                            Our aim is to provide a platform that equips individuals with the tools, resources, and guidance they need to overcome challenges, expand their horizons, and become unforgettable in their pursuits. Through a comprehensive range of educational content, interactive learning experiences, and a supportive community, we empower individuals to discover their passions, enhance their skills, and unlock their true potential.
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[43%] max-md:ml-0 max-md:w-full">
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/80d6cf52ded428edd549b73c8f244d115a7dfc64cf6806a393b66b7adf98d435?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/80d6cf52ded428edd549b73c8f244d115a7dfc64cf6806a393b66b7adf98d435?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/80d6cf52ded428edd549b73c8f244d115a7dfc64cf6806a393b66b7adf98d435?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/80d6cf52ded428edd549b73c8f244d115a7dfc64cf6806a393b66b7adf98d435?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/80d6cf52ded428edd549b73c8f244d115a7dfc64cf6806a393b66b7adf98d435?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/80d6cf52ded428edd549b73c8f244d115a7dfc64cf6806a393b66b7adf98d435?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/80d6cf52ded428edd549b73c8f244d115a7dfc64cf6806a393b66b7adf98d435?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/80d6cf52ded428edd549b73c8f244d115a7dfc64cf6806a393b66b7adf98d435?apiKey=cf358c329e0d49a792d02d32277323ef&"
                            className="w-full aspect-square max-md:mt-10 max-md:max-w-full"
                        />
                    </div>
                </div>
            </div>

        </div>
    );
}
