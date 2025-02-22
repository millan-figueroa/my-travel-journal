function Entry(props) {
    return (
            <div className="flex flex-col sm:flex-row items-center justify-center border-b-2 p-10 bg-gray-100 rounded-lg m-10">
                <img className="w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] h-auto m-6 rounded-lg" 

                    src={props.img.src} 
                    alt={props.img.alt}  
                />
                
                <main className="p-5">
                    <div className="flex items mb-2 mt-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="28" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-map-pin text-red-500 mr-1"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle fill="white" cx="12" cy="10" r="3"/></svg><h3 className="mr-3 mt-2 text-xs font-thin">{props.country}</h3>
                        <span><a href={props.googleMapsLink} className="mt-3 text-xs text-gray-400 underline">View on Google Maps</a></span>
                    </div>
                    
                    <h2 className="mb-4 text-2xl font-black">{props.title}</h2>
                    <p className="text-xs font-extrabold mb-2">{props.dates}</p>
                    <p className="text-xs font-light">{props.text}</p>
                </main>
            </div>
    )
}

export default Entry;