import watch from '../public/watch.png'
import wa from '../public/wa.jpg'
import ci from '../public/ci.jpeg'
import ji from '../public/ji.jpg'


const WatchLandingPage = () => {
    return (
        <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-center">
            <header className="w-full max-w-screen-xl mx-auto flex justify-between items-center p-8">
                <div className="text-2xl font-bold">MVMT™</div>
                <nav className="space-x-8 text-lg">
                    <a href="#" className="hover:underline">Men</a>
                    <a href="#" className="hover:underline">Women</a>
                    <a href="#" className="hover:underline">Brand</a>
                </nav>
            </header>

            <main className="flex-1 w-full max-w-screen-xl mx-auto flex ">
                <div className="flex-1 flex flex-col items-center text-center">
                    <h1 className="text-5xl font-semibold mb-4">Orion</h1>
                    <p className="text-gray-600 mb-8">Rose gold second hand titanium and rose gold double plated stainless steel</p>
                    <div className="flex items-center justify-center space-x-4 mb-8">
                        <button className="px-6 py-2 bg-gray-300 rounded-full">Rose</button>
                        <button className="px-6 py-2 bg-gray-800 text-white rounded-full">Medium</button>
                        <button className="px-6 py-2 bg-gray-300 rounded-full">Bronze</button>
                    </div>
                </div>
                <div className="flex-1 flex flex-col items-center">
                    <img src={watch} alt="Watch" className="w-26" style={{width:'250px'}} />
                </div>
                <div className="flex-1 flex flex-col items-center text-sm text-gray-600">
                    <div>Case Size: 38 mm</div>
                    <div>Case Thickness: 10 mm</div>
                </div>
            </main>

            <footer className="w-full max-w-screen-xl mx-auto p-6 bg-gray-800 text-white flex justify-between">
                <div className="flex items-center space-x-4">
                    <img src={ji} alt="Free Gift Box" className="w-16 h-16" />
                    <div>
                        <div className="font-bold">Free gift box</div>
                        <div className="text-sm">Add a personal note and we ll wrap the product in a beautiful gift box</div>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <img src={ci} alt="Bracelet" className="w-16 h-16" />
                    <div>
                        <div className="font-bold">Bracelet</div>
                        <div className="text-sm">Add a matching rose gold charm bracelet</div>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <img src={wa} alt="Movement" className="w-16 h-16" />
                    <div>
                        <div className="font-bold">Movement</div>
                        <div className="text-sm">Japanese quartz movement in hand-stitched leather</div>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <img src={wa} alt="Movement" className="w-16 h-16" />
                    <div>
                        <div className="font-bold">Movement</div>
                        <div className="text-sm">Japanese quartz movement in hand-stitched leather</div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default WatchLandingPage;
