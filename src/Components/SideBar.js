import React from 'react'

const SideBar = ({ detail }) => {
    return (
        <div>
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
        </div>
    )
}

export default SideBar;