import { useState } from 'react';
import watch1 from '../public/hel.png';
import watch2 from '../public/watch1.png';
import watch3 from '../public/watch2.png';
import watch4 from '../public/watch4.png';
import watch5 from '../public/mvmt.png';
import watch6 from '../public/watch.png';
import ci from '../public/ci.jpeg';
import ji from '../public/ji.jpg';
import wa from '../public/wa.jpg';
import ri from '../public/ri.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


const App = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const watchImages = [watch1, watch2, watch3, watch4, watch5, watch6];

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % watchImages.length);
    };

    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + watchImages.length) % watchImages.length);
    };
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };


    return (
        <div className="min-h-screen bg-[#d1c9c1] flex flex-col items-center justify-center">
            <header className="w-full max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between items-center pt-8 px-8 pb-0">
                <div className="text-2xl font-bold mb-4 sm:mb-0">MVMT™</div>
                <button onClick={toggleNav} className="sm:hidden">
                    <FontAwesomeIcon icon={isNavOpen ? faTimes : faBars} size="lg" />
                </button>
                <nav className={`flex-col sm:flex-row sm:flex space-x-4 sm:space-x-14 text-base ${isNavOpen ? 'flex' : 'hidden'}`}>
                    <a href="#" className="hover:underline">Men</a>
                    <a href="#" className="hover:underline">Women</a>
                    <a href="#" className="hover:underline">Brand</a>
                </nav>
            </header>

            <main className="flex-1 w-full max-w-screen-xl mx-auto flex flex-col sm:flex-row">
                <div className="flex-1 flex justify-center items-center space-x-4 sm:flex-2 sm:space-x-8 mb-8 sm:mb-0 order-1 sm:order-2">
                    <button onClick={handlePrevImage} className="bg-[#999087] px-2 sm:px-4 py-2 rounded-full shadow-md hover:bg-[#333333]">
                        <FontAwesomeIcon icon={faChevronLeft} size="xs" style={{ color: "#ffffff" }} />
                    </button>
                    <img src={watchImages[currentImageIndex]} alt="Watch" className="h-[250px] sm:h-[390px]" />
                    <button onClick={handleNextImage} className="bg-[#999087] px-2 sm:px-4 py-2 rounded-full shadow-md hover:bg-[#333333]">
                        <FontAwesomeIcon icon={faChevronRight} size="xs" style={{ color: "#ffffff" }} />
                    </button>
                </div>

                
                <div className="flex-1 flex flex-col justify-center items-center text-sm text-[#534c46] gap-2 sm:gap-6 order-2 sm:order-3">
                    <div className="flex justify-between w-full max-w-[200px]">
                        <h4>Case Size:</h4>
                        <h4>38 mm</h4>
                    </div>
                    <div className="flex justify-between w-full max-w-[200px]">
                        <h4>Case Thickness:</h4>
                        <h4>10 mm</h4>
                    </div>
                </div>

                
                <div className="flex-1 flex flex-col justify-center text-left px-8 order-3 sm:order-1">
                    <h1 className="text-[40px] sm:text-[80px] font-light mb-2 text-[#534c46]">Orion</h1>
                    <p className="text-[#534c46] text-base mb-12 max-w-[300px]">
                        Rose gold second hand titanium and rose gold double plated stainless steel
                    </p>
                    <button className="flex items-center space-x-2 text-[#534c46] hover:text-gray-600 transition">
                        <span className="text-base font-medium">Shop Now</span>
                        <span>&rarr;</span>
                    </button>
                    <div className="flex items-center justify-start space-x-6 mt-8 sm:mt-20 mb-8">
                        <button className="py-2 text-[#534c46]">Rose</button>
                        <button className="py-2 text-[#333333]">Medium</button>
                        <button className="py-2 text-[#534c46]">Bronze</button>
                    </div>
                </div>
            </main>


            <footer className="w-full max-w-screen-xl mx-auto p-6 bg-[#333333] text-white flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0">
                <div className="flex items-center space-x-4 mx-8">
                    <img src={ci} alt="Free Gift Box" className="w-14 h-14" />
                    <div>
                        <div className="font-bold text-[14px]">Free gift box</div>
                        <div className="text-xs">Japanese quartz movement in hand-stitched leather</div>
                    </div>
                </div>
                <div className="flex items-center space-x-4 mx-8">
                    <img src={ji} alt="Bracelet" className="w-14 h-14" />
                    <div>
                        <div className="font-bold text-[14px]">Bracelet</div>
                        <div className="text-xs">Add a matching rose gold charm bracelet</div>
                    </div>
                </div>
                <div className="flex items-center space-x-4 mx-8">
                    <img src={wa} alt="Movement" className="w-14 h-14" />
                    <div>
                        <div className="font-bold text-[14px]">Movement</div>
                        <div className="text-xs">Japanese quartz movement in hand-stitched leather</div>
                    </div>
                </div>
                <div className="flex items-center space-x-4 mx-8">
                    <img src={ri} alt="Movement" className="w-14 h-14" />
                    <div>
                        <div className="font-bold text-[14px]">Movement</div>
                        <div className="text-xs">Japanese quartz movement in hand-stitched leather</div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;
