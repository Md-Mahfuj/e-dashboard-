import React,{useState} from "react";

export default function Search() {

    return (
        <div className="bg-gray-100 ">
            <nav className=" flex 2xl:container  sm:py-6 sm:px-7 py-5 px-4">
                <form className="flex flex-nowrap items-center w-full order-last md:order-none mt-5 md:mt-0 md:w-8/12 lg:w-8/12">
                    <input
                        className="flex-grow appearance-none border border-gray-200 bg-gray-100 rounded-md mr-2 py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400"
                        type="text"
                        placeholder="Enter your keyword"
                        required
                    />
                    <button
                        type="button"
                        className="px-4 py-2 inline-block text-white border border-transparent bg-blue-600  rounded-md hover:bg-blue-700"
                    >
                        Search
                    </button>
                </form>

                <div className="flex items-center ml-20">

                    <div>
                        <p className="text-gray-600 text-sm font-medium">Steve Doe</p>
                        <p className="text-gray-600 text-xs">View Profile</p>
                    </div>
                    <div className="w-10 h-10 bg-cover rounded-md ml-3">
                        <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_5.png" alt className="rounded-full h-full w-full overflow-hidden shadow" />
                    </div>
                </div>
            </nav>
        </div>

    );
}
