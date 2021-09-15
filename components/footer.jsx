import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFacebookF, faTwitter, faInstagram, faVuejs, faCloudflare, faStumbleuponCircle } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className="flex flex-col space-y-10 px-6 py-14 mt-28 md:mt-44 bg-grayish bg-opacity-30 md:grid md:grid-cols-3 md:place-items-center md:space-y-0">
            <div className="md:space-y-3 space-y-8">
                <div className="flex space-x-3">
                    <FontAwesomeIcon icon={faInstagram} className="h-6" />
                    <FontAwesomeIcon icon={faTwitter}  className="h-6" />
                    <FontAwesomeIcon icon={faFacebookF}  className="h-6" />
                </div>
                
                <h1>&copy; 2021 Momentable</h1>

                <h1>info@momentable.com</h1>
            </div>

            <div className="md:space-y-3 space-y-8">
                <h1>In partnership with</h1>
                
                <div className="flex items-center space-x-3">
                    <FontAwesomeIcon icon={faVuejs} className="h-14"/>
                    <div className="text-lg tracking-widest">
                        <h1>VICTORY</h1>
                        <h1>SQUARE</h1>
                    </div>
                </div>

                <div className="flex items-center space-x-2">
                    <FontAwesomeIcon icon={faCloudflare} className="h-14" />
                    <div className=" leading-3">
                        <h1 className="text-lg leading-3 tracking-widest">CLOUD NINE</h1>
                        <h1 className="text-xs">WEB3 TECHNOLOGIES</h1>
                    </div>
                </div>
            </div>
            
            <div className="md:space-y-3 space-y-8">
                <h1>Built on</h1>
                
                
                <div className="flex items-center space-x-2">
                    <FontAwesomeIcon icon={faStumbleuponCircle} className="h-10" />
                    <h1 className="font-bold text-2xl tracking-wider">flow</h1>
                </div>

                <div>
                    
                </div>
            </div>
        </div>
    )
}

export default Footer;
