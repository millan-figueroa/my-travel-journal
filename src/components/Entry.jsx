function Entry(props) {
    return (
        <article>
            <div className="flex items justify-center">
                <img className="w-30 h-48 m-6 rounded-lg"
                    src={props.img.src} 
                    alt={props.img.alt}  
                />
                
                <main className="p-5">
                    <div className="flex items mb-2 mt-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="28" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin" className="text-red-500 mr-1"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle fill="white" cx="12" cy="10" r="3"/></svg><h3 className="mr-3 mt-2 text-xs font-thin">{props.country}</h3>
                        <span><a href={props.googleMapsLink} className="mt-3 text-xs text-gray-400 underline">View on Google Maps</a></span>
                    </div>
                    
                    <h2 className="mb-4 text-2xl font-black">{props.title}</h2>
                    <p className="text-xs font-extrabold mb-2">{props.dates}</p>
                    <p className="text-xs font-light">{props.text}</p>
                </main>
            </div>
        </article>
    )
}

export default Entry;