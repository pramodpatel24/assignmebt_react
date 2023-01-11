import React from 'react'
import { Link } from 'react-router-dom';

const PopUp = ({ detail }) => {
    return (
        <div>
            <div className="absolute right-0 z-10 mt-2 w-[20vw] origin-top-right rounded-md bg-white shadow-lg focus:outline-none transform opacity-100 scale-100" aria-labelledby="headlessui-menu-button-:r3:" id="headlessui-menu-items-:rq:" role="menu" tabIndex={0} data-headlessui-state="open">
                <div className="py-1" role="none">
                    <div className=" flex flex-col justify-center items-center gap-2 pb-3" role="none">
                        <img className="rounded-full" src={detail.profilepicture} alt='' width="50% " role="none" />
                        <p role="none"> {detail.name}</p>
                        <p className="text-[14px] text-gray-400" role="none">{detail.email}</p>
                        <div className="mx-5 border-t border-gray-300 mt-3" role="none">

                            <div className="cursor-pointer flex gap-3 justify-center items-center border-b py-2 " role="none">
                                <img className="rounded-full w-[10%]" src={detail.profilepicture} alt='' role="none" />
                                <div className="text-md text-gray-700 font-[400]" role="none">
                                    <p role="none">{detail.name}</p>
                                </div>
                            </div>
                            <Link to="/1">
                                <div className="cursor-pointer flex gap-3 justify-center items-center border-b py-2 " role="none">
                                    <img className="rounded-full w-[10%]" src="https://avatars.githubusercontent.com/u/107462720?v=4" alt='' role="none" />
                                    <div className="text-md text-gray-700 font-[400]" role="none">
                                        <p role="none"> Admin </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <button className="mt-2 rounded-[20px] px-2 py-1 text-white bg-[#e15b22]" role="none">
                            <a href="/" role="none">Sign out</a>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )

}

export default PopUp;