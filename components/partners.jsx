import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faVuejs, faCloudflare, faStumbleuponCircle } from '@fortawesome/free-brands-svg-icons';

const Partners = () => {
    return (
        <div className="px-10 py-14 space-y-10 bg-grayish bg-opacity-30 md:flex md:space-x-10 justify-center items-center">
            <div className="md:items-center">
                <h1>Trusted by:</h1>
            </div>
            <div className="flex items-center space-x-3 cursor-pointer">
                <FontAwesomeIcon icon={faVuejs} className="h-14"/>
                <div className="text-lg tracking-widest">
                    <h1>VICTORY</h1>
                    <h1>SQUARE</h1>
                </div>
            </div>

            <div className="flex items-center space-x-2 cursor-pointer">
                <FontAwesomeIcon icon={faCloudflare} className="h-14" />
                <div className=" leading-3">
                    <h1 className="text-lg leading-3 tracking-widest">CLOUD NINE</h1>
                    <h1 className="text-xs">WEB3 TECHNOLOGIES</h1>
                </div>
            </div>
            
            
            <div className="flex items-center space-x-2 cursor-pointer">
                <FontAwesomeIcon icon={faStumbleuponCircle} className="h-14" />
                <h1 className="font-bold text-2xl tracking-wider">The mob musuem</h1>
            </div>
        </div>
    )
}

export default Partners;
