import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCoins, faFileInvoiceDollar,faMoneyCheckAlt } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    return (
        <div className="py-14 bg-bgm bg-cover md:bg-bgw md:mt-24">
            <div className="px-6 md:px-24 xl:px-44">
                <h1 className="uppercase text-xs font-bold tracking-wider pb-16 md:hidden">supercharge engagement</h1>
                <h1 className="uppercase text-sm font-bold tracking-widest pb-16 hidden md:block"> <span className="text-base">N</span>ew to nft<span className="lowercase">s</span>? we've got you covered.</h1>

                <div className="space-y-4">
                    <h1 className="text-left text-2xl md:text-6xl xl:8xl font-bold">We provide end-to-end service so <span className="text-gradient">
                    you can focus on doing what you do best</span></h1>
                    <hr className=" bg-lightGray border border-lightGray w-28 md:w-40" />
                </div>

                <p className="text-sm pt-14 md:text-base xl:text-lg">You're in good hands -- Our Momentable team has lauched the world's largest marketplace for Middle Eastern art and is helping world-class artists, photographers and athletes create their own NFT product line and strategies. We provide tailored end-to-end services ranging from creative ideation, stategies, technological development and execution.</p>

                <div className="flex flex-col justify-center items-center py-14 font-bold text-center space-y-4 md:hidden">
                    <h1 className="text-xs uppercase">a new digital economy</h1>
                    <h1 className="text-3xl">Your own NFT-based ecosystem</h1>
                    <hr className=" bg-lightGray border border-lightGray w-20" />
                </div>

                <div className="md:flex mt-32 flex-col justify-center items-center py-14 font-bold text-center space-y-4 hidden">
                    <h1 className="text-2xl uppercase">No complexity. No guesswork</h1>
                    <h1 className="md:text-5xl text-7xl pb-10">One seamless experience</h1>
                    <hr className=" bg-lightGray border border-lightGray w-40 " />
                </div>

                <p className="hidden md:block text-center pt-14 text-base xl:text-lg">You're in good hands -- Our Momentable team has lauched the world's largest marketplace for Middle Eastern art and is helping world-class artists, photographers and athletes create their own NFT product line and strategies. We provide tailored end-to-end services ranging from creative ideation, stategies, technological development and execution.</p>
            </div>

            <div className="md:mt-44 md:bg-bgw md:bg-cover">
                <h1 className="font-bold text-center text-2xl md:text-4xl tracking-wider md:mb-20">Several ways to earn</h1>

                <div className=" text-center flex flex-col justify-center items-center space-y-16 md:space-y-0 md:flex-row ">
                    <div className="pt-16 flex flex-col justify-center space-y-4 md:p-10 md:pr-20 md:border-r border-white md:items-center">
                        <FontAwesomeIcon icon={faFileInvoiceDollar} className="h-20" />
                        <p>Auction or sell products</p>
                    </div>
                    <div className="flex flex-col justify-center space-y-4 md:p-10 md:pr-20 md:border-r border-white md:items-center">
                        <FontAwesomeIcon icon={faCoins} className="h-20" />
                        <p>Fundraise with NFTs</p>
                    </div>
                    <div className="flex flex-col justify-center space-y-4 md:p-10 md:pr-20 md:items-center">
                        <FontAwesomeIcon icon={faMoneyCheckAlt} className="h-20" />
                        <p>Get royalties on future sales</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
