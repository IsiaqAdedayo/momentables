import Header from '../components/header';

const Banner = () => {
    return (
        <div className="px-6 md:px-10 py-3 h-screen flex flex-col relative justify-between">
            <div className="absolute top-20 rounded -right-16 md:right-10  w-24 h-24 bg-yellow-900 blur rotate-45 grid place-items-center">
                <div className="w-16 h-16  bg-purple-800 blur"></div>
            </div>
            <div className="hidden md:block absolute bottom-48 rounded-3xl top-40 md:-left-10 md:w-40 md:h-40 bg-indigo-800 blur rotate-45"></div>
            <div className="hidden md:block absolute bottom-48 rounded-3xl top-64 md:left-24 md:w-24 md:h-24 bg-gradient-to-tl from-blue-800 via-purple-500 to-purple-900 blur rotate-45"></div>
            <div className="absolute bottom-52 rounded -left-10 md:left-64 w-16 h-16 md:w-32 md:h-32 bg-yellow-900 blur -rotate-12 grid place-items-center">
                <div className="w-16 h-14 md:w-32 md:h-28 bg-indigo-900 blur mt-4 mr-5"></div>
            </div>
            <div className="absolute top-40 rounded-full -right-20 md:right-20 w-64 h-64 md:w-96  md:h-96 bg-indigo-900 blur-xxl"></div>
            <div className="absolute bottom-48 rounded-3xl -right-10 md:right-10 w-20 h-20 md:w-32 md:h-32 bg-gradient-to-tl from-blue-800 via-purple-500 to-purple-900 blur rotate-45"></div>
            <div className="absolute bottom-32 rounded-3xl -right-20 md:right-10 w-20 h-20 md:w-32 md:h-32 bg-blue-500 blur-md rotate-12"></div>

            <Header />


            <div className="text-center text-2xl md:text-5xl xl:text-6xl md:mb-10 font-bold flex flex-col justify-center items-center z-10 space-y-7">
                <div className="flex flex-col">
                    <h1>Launch your own</h1>
                    <h1 className="text-grd">NFT-based Marketplace.</h1>
                </div>

                <div className="uppercase text-xs md:text-sm tracking-widest px-5 rounded-lg p-3 bg-white text-black font-bold">
                    <h1>Request Access</h1>
                </div>
            </div>

            <h1></h1>

            <div className="border-l-4 border-white h-24 absolute left-2/4 bottom-0 grid place-items-center">
                <div className="border-l-2 border-white z-20 h-32 -ml-1 -mt-24 "></div>
            </div>
        </div>
    )
}

export default Banner
