import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { BASE_URL } from '../FetchData';

const Home = () => {
    const [myData, setMyData] = useState([]);
    const BASE_URL = './Credentials.json';


    const getApiData = async () => {
        try {
            const res = await axios.get(BASE_URL);
            setMyData(res.data);
        } catch (error) {
            console.log(error.message);

        }
    };

    useEffect(() => {
        getApiData();

    }, []);

    return (
        <div>
            <div className="relative flex justify-center items-center h-screen w-screen"><div className="absolute top-0 w-full z-[-1]">
                <div className="h-[20vh] bg-[#6337c8]" />
                <svg className="drop-shadow-[0px_17px_0px_#dcd6f3] z-[-1] " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#6337c8" fillOpacity={1} d="M0,224L80,197.3C160,171,320,117,480,128C640,139,800,213,960,245.3C1120,277,1280,267,1360,261.3L1440,256L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" />
                </svg>
            </div>
                <div className="h-[85vh] shadow-2xl w-2/5 rounded-[25px] bg-white">
                    <div className="w-full rounded-t-[25px] flex justify-center items-center h-[16vh] text-gray-600 bg-gray-100 text-xl">
                        <p> Select an account</p>
                    </div>
                    <div className=" h-[65vh] pb-4 px-7 overflow-y-auto scrollbar scrollbar-thumb-gray-200 ">

                        {
                            myData && myData.map(items => {
                                return (
                                    <Link key={items.id} to={`/${items.id}`}>
                                        <div key={items.id} className="cursor-pointer flex gap-3 items-center border-b py-2 ">
                                            <img className="rounded-full w-[7%]" src={items.profilepicture} alt='' />
                                            <div className="text-md text-gray-700 font-[400]"><p>{items.name}</p>
                                            </div>

                                        </div>
                                    </Link>

                                )
                            }
                            )}
                    </div>
                </div>
            </div >
        </div>

    )
}

export default Home;