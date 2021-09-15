import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return (
        <div className="py-3 bg-black md:pt-40 md:px-40">
            <div className="px-6 space-y-5 pb-40 md:pb-60">
                <h1 className="text-left text-2xl font-bold md:text-5xl">Apply as an artist and start selling your products as NFTs.</h1>
                <div className="relative">
                    <input type="text" placeholder="Your Email" className="py-5 p-3 w-full text-sm border-b-2 border-white bg-transparent outline-none" />
                    <FontAwesomeIcon icon={faArrowRight} className="h-8 absolute right-3 top-4 cursor-pointer" />
                </div>
            </div>

            <div className="w-full px-20 md:px-0 lg:px-20 h-52 flex flex-col justify-center text-center relative space-y-10">
                <div className="absolute rounded-full -left-20 w-64 h-64 bg-indigo-900 blur-3xl"></div>
                <h1 className="text-center font-bold text-xl md:text-5xl xl:text-7xl z-20">Bring your digital products <span className="text-gradient">vision to reality</span></h1>
                <div className="uppercase text-xs tracking-widest px-5 rounded p-3 bg-white text-black font-bold z-20 cursor-pointer">
                    <h1>Partner with us</h1>
                </div>
            </div>
        </div>
    )
}

export default Contact
