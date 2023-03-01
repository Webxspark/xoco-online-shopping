import { HeartOutlined, HeartFilled } from "@ant-design/icons"
import { Link } from "react-router-dom"
const Card = (props) => {
    // random images "https://via.placeholder.com/800x800.png?text=Product+Image"
    return (
        <>
            <div className="relative mb-10">
                <Link to={'/product-preview'}><div className="h-80 w-72 flex items-end justify-end rounded-lg text-left bg-cover bg-center" style={{
                    backgroundImage: "url('https://via.placeholder.com/800x800.png?text=Product+Image')"
                }}>
                    <div className="absolute top-0 right-0 left-0 mx-5 mt-4 flex justify-between items-center">
                        <div className="rounded-lg text-xs bg-gray-400 opacity-60 text-white font-bold px-5 py-2 uppercase transition ease-in-out duration-500">Category</div>
                    </div>
                    <main className="p-5 z-10 justify-end text-end">
                        <div className="bg-white  h-12 w-12 text-center items-center flex justify-center cursor-pointer hover:bg-cyan-50 transition rounded-full">
                            {props.liked ? <HeartFilled className="text-red-500 text-xl" /> : <HeartOutlined className="text-xl text-red-500" />}
                        </div>
                    </main>
                </div>
                </Link>
                <div className="grid grid-cols-2 mt-1 p-2">
                    <div className="flex flex-col justify-center items-start">
                        <Link to={'/product-preview'}><h1 className="font-bold text-md">{props.title ? props.title : 'Product Name'}</h1>
                            <p className="text-sm" style={{ color: 'rgb(149, 149, 149)' }}>{props.brand ? props.brand : 'Product Brand'}</p>
                        </Link>
                    </div>
                    <div className="flex flex-col justify-center items-end">
                        <h1 style={{ backgroundColor: '#fae8fb' }} className="font-bold px-3 py-1 rounded-md">{props.price ? props.price : '$90'}</h1>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Card