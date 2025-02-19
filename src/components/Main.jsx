function Main() {
    return (
        <div className="flex items justify-center">
            <img src="https://scrimba.com/links/travel-journal-japan-image-url" className="w-30 h-48 m-6 rounded-lg" alt="Mt. Fuji" ></img>
            <main className="p-5">
                <div className="flex items mb-2 mt-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="28" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin" className="text-red-500 mr-1"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle fill="white" cx="12" cy="10" r="3"/></svg><h3 className="mr-3 mt-2 text-xs font-thin">JAPAN</h3><span><a href="#" className="mt-3 text-xs text-gray-400 underline">View on Google Maps</a></span>
                </div>
                
                <h2 className="mb-4 text-2xl font-black">Mount Fuji</h2>
                <p className="text-xs font-extrabold mb-2">12 Jan, 2023 - 24 Jan, 2023</p>
                <p className="text-xs font-light">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </main>
        </div>
    )
}

export default Main;