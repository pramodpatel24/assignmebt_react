import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Credential from '../Credentials.json';
import PopUp from './PopUp';

const InfoMain = (props) => {
    const [popup, setPop] = useState(false)
    const handleClickOpen = () => {
        setPop(!popup)
    }

    const { id } = useParams();
    const detail = Credential[id];

    if (!detail) {
        return <h2>Page Not Found !</h2>;
    }

    return (
        <div className='info'>
            <div className="w-screen h-screen  flex gap-10 px-8  pt-3 overflow-x-hidden">
                <div className="bg-gradient-to-r from-[#5168cd] to-[#3e57c8]  h-[95vh] w-[21vw] rounded-[23px] flex flex-col justify-center items-center px-8 text-white">
                    <div className="border-b capitalize border-white block w-full py-3">
                        <a href={`/${detail.id}`}>profile</a>
                    </div>
                    <div className="border-b capitalize border-white block w-full py-3">
                        <a href={`/${detail.id}/posts`}>posts</a>
                    </div>
                    <div className="border-b capitalize border-white block w-full py-3">
                        <a href={`/${detail.id}/gallery`}>gallery</a>
                    </div>
                    <div className="border-b capitalize border-white block w-full py-3">
                        <a href={`/${detail.id}/todo`}>toDO</a>
                    </div>
                </div>
                <div className="flex flex-col w-full">
                    <div className="h-[13vh]  w-[100%] border-b border-gray-300">
                        <div className="flex h-full items-center justify-between ">
                            <div className="capitalize text-[20px] text-gray-500">
                                <p> Profile</p>
                            </div>
                            <div className="relative inline-block text-left mt-5 ml-40 " data-headlessui-state>
                                <div>
                                    <button onClick={handleClickOpen} className="inline-flex w-full justify-center rounded-md h-full w-[45rem]  bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm focus:outline-none " id="headlessui-menu-button-:r0:" type="button" aria-haspopup="menu" aria-expanded="false" data-headlessui-state>
                                        <div className=" w-max cursor-pointer flex justify-end gap-3 items-center">
                                            <img className="rounded-full w-[7%]" src={detail.profilepicture} alt='' />
                                            <p>{detail.name}</p>
                                        </div>
                                    </button>
                                    {popup ? <PopUp detail={detail} /> : ""}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="block "><div className="w-full  h-full flex mt-5">
                        <div className="border-r border-gray-300 h-full w-[40%]">
                            <div className="flex flex-col  w-full items-center h-full justify-center">
                                <img className="rounded-full w-[48%]" src={detail.profilepicture} alt='' />
                                <p className="text-[16px] font-[400] text-gray-800">{detail.name}</p>
                                <div className="flex flex-col gap-2 border-b border-gray-300 py-3">
                                    <div className="flex gap-3 items-center justify-center">
                                        <p className="text-[16px] font-[400] text-gray-400">Username   :</p>
                                        <p className="text-[16px] font-[400] text-gray-800">{detail.username}</p>
                                    </div>
                                    <div className="flex gap-3 items-center justify-center">
                                        <p className="text-[16px] font-[400] text-gray-400">email   :</p>
                                        <p className="text-[16px] font-[400] text-gray-800">{detail.email}</p>
                                    </div>
                                    <div className="flex gap-3 items-center justify-center">
                                        <p className="text-[16px] font-[400] text-gray-400">phoneNumber   :</p>
                                        <p className="text-[16px] font-[400] text-gray-800">{detail.phone}</p>
                                    </div>
                                    <div className="flex gap-3 items-center justify-center">
                                        <p className="text-[16px] font-[400] text-gray-400">website   :</p>
                                        <p className="text-[16px] font-[400] text-gray-800">{detail.website}</p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2  py-3">
                                    <div className="flex gap-3 items-center justify-center">
                                        <p className="text-[16px] font-[400] text-gray-400">Company Name   :</p>
                                        <p className="text-[16px] font-[400] text-gray-800">{detail.company.name}</p>
                                    </div>
                                    <div className="flex gap-3 items-center justify-center">
                                        <p className="text-[16px] font-[400] text-gray-400">catchPhrase   :</p>
                                        <p className="text-[16px] font-[400] text-gray-800">{detail.company.catchPhrase}</p>
                                    </div>
                                    <div className="flex gap-3 items-center justify-center">
                                        <p className="text-[16px] font-[400] text-gray-400">bs   :</p>
                                        <p className="text-[16px] font-[400] text-gray-800">{detail.company.bs}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" h-full w-[60%]">
                            <div className="flex flex-col gap-4">
                                <div className="pl-9 mt-2">
                                    <p className="text-[16px] font-[400] text-gray-400">Address:</p>
                                </div>
                                <div className="ml-[70px] flex flex-col gap-1">
                                    <div className="flex gap-3 items-center">
                                        <p className="text-[16px] font-[400] text-gray-400">Street   :</p>
                                        <p className="text-[16px] font-[400] text-gray-800">{detail.address.street}</p>
                                    </div>
                                    <div className="flex gap-3 items-center">
                                        <p className="text-[16px] font-[400] text-gray-400">Suite   :</p>
                                        <p className="text-[16px] font-[400] text-gray-800">{detail.address.suite}</p>
                                    </div>
                                    <div className="flex gap-3 items-center">
                                        <p className="text-[16px] font-[400] text-gray-400">City   :</p>
                                        <p className="text-[16px] font-[400] text-gray-800">{detail.address.city}</p>
                                    </div>
                                    <div className="flex gap-3 items-center">
                                        <p className="text-[16px] font-[400] text-gray-400">Zipcode   :</p>
                                        <p className="text-[16px] font-[400] text-gray-800">{detail.address.zipcode}</p>
                                    </div>
                                </div>
                                <div className="flex flex-col w-full justify-center items-center gap-1">
                                    <img className="w-[80%]" src="https://user-images.githubusercontent.com/107462720/210083129-f7d59313-06e0-4e39-bffd-107793a6da12.jpg" alt='' />
                                    <div className="flex flex-row-reverse w-[80%] m-[auto]  gap-4 text-[12px]">
                                        <div className="flex gap-2">
                                            <p className="text-gray-400">Lat:</p>
                                            <p>{detail.address.geo.lat}</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <p className="text-gray-400">Long:</p>
                                            <p>{detail.address.geo.lng}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default InfoMain;