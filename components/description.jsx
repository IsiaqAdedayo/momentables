import Image from 'next/image'

const Description = () => {
    return (
        <div className="px-6 py-4 pt-20 relative md:grid grid-cols-2 md:px-24 md:my-32 xl:px-36">
            <div>
                <h1 className="uppercase text-xs font-bold tracking-wider pb-20">supercharge engagement</h1>

                <div className="absolute top-32 tracking-wider text-2xl md:text-4xl lg:text-6xl xl:text-7xl pb-10">
                    <h1>Your <span className="uppercase font-bold text-grd">Brand.</span></h1>
                    <h1>Your <span className="uppercase font-bold text-grd">Fans.</span></h1>
                    <h1>Your <span className="font-bold text-grdd">NFTs.</span></h1>
                    <hr className=" bg-lightGray border border-lightGray w-24 mt-5" />
                </div>

                <div className="text-sm py-16 md:mt-32 xl:mt-44 hidden md:block xl:text-lg">
                    <p>Effortlessly create and manage your own NFT-based marketplace.Experience true freedom as an artist,creator and curator with all the tools you need from ideation to delivery. Give your fans new ways to engage and reward your most loyal with points, tokens, NFTs, access, benefits and more.</p>
                </div>
            </div>

            <div className="md:w-3/5 xl:w-2/5 md:absolute md:right-24">
                <Image
                    src="https://static.wikia.nocookie.net/dino/images/d/d6/GorgosaurusPromo.png/revision/latest?cb=20150720021658"
                    layout="responsive"
                    width={100}
                    height={100}
                    className="flip w-screen"
                />
                <div>
                    {/* <h1>Gorgosaurus</h1> */}
                </div>
            </div>

            <div className="text-sm py-16 md:hidden">
                <p>Effortlessly create and manage your own NFT-based marketplace.Experience true freedom as an artist,creator and curator with all the tools you need from ideation to delivery. Give your fans new ways to engage and reward your most loyal with points, tokens, NFTs, access, benefits and more.</p>
            </div>
            
        </div>
    )
}

export default Description
