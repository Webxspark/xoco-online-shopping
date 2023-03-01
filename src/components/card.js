const Card = () => {
    // random images "https://via.placeholder.com/800x800.png?text=Product+Image"
    return (
        <>
            <div className="relative h-64 w-full flex items-end justify-start text-left bg-cover bg-center" style={{
                backgroundImage: "url('https://via.placeholder.com/800x800.png?text=Product+Image')"
            }}>
                <div className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900"></div>
                <div className="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
                    <a href="#" className="rounded-lg text-xs bg-gray-400 text-white px-5 py-2 uppercase transition ease-in-out duration-500">Category</a>
                </div>
                <main className="p-5 z-10 justify-end text-end">
                    <div className="bg-white">icon</div>
                </main>
            </div>
        </>
    )
}
export default Card