import Image from "next/image";

const ComingSoon = () => {
    return (
        <div className="px-6 py-14 md:py-44 md:grid grid-cols-2 md:px-24 md:my-32 xl:px-40 relative">
            <div className="">
                <h1 className="uppercase text-xs md:text-sm font-bold tracking-wider pb-16"><span className="text-base">C</span>oming soon</h1>

                <div className="space-y-5">
                    <h1 className="text-left text-2xl md:text-3xl font-bold">Reach international audiences with AR</h1>
                    <hr className="bg-lightGray border border-lightGray w-24" />
                </div>

                <div className="space-y-5">
                    <p className="text-sm pt-14 md:text-base">With augmented reality,the world becomes your gallery.You and your customers can choose real life locations to showcase your NFT-based products for the rest of the globe to see.</p>
                    <hr className="bg-lightGray border border-lightGray w-24" />
                </div>
            </div>

            <div className="md:w-3/5 xl:w-2/5 md:absolute md:-right-14 md:top-10 pt-16">
                <Image
                    src="/hand-holding-iphone.png"
                    layout="responsive"
                    width={100}
                    height={100}
                    className=""
                />
                <div>
                    {/* <h1>Gorgosaurus</h1> */}
                </div>
            </div>
        </div>
    )
}

export default ComingSoon
