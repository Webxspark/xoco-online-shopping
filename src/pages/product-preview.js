import { Link } from "react-router-dom";
import { useLoadingContext } from "react-router-loading";
import AppNav from "../components/nav";
import { Button, Divider, Rate } from 'antd';
import { useState } from "react";
const ProductPreview = () => {
    let RouterLoadingStatus = useLoadingContext();
    RouterLoadingStatus.done();
    var [Count, setCount] = useState(1);
    return (
        <>
            <AppNav />
            <div className="container pb-12">
                <div className="grid grid-cols-2 gap-4 mx-8 mt-8">
                    <div className="flex flex-col">
                        <div className="flex flex-row">
                            <Link to="/" className="text-gray-500">Home</Link> &nbsp;{'>'}&nbsp; <span className="text-gray-900">Product Preview</span>
                        </div>
                        <div className="pt-6 h-auto">
                            <img className="rounded-md" src="https://via.placeholder.com/600x600.png?text=Product+Image" alt="Product Image" />
                            <div className="grid grid-cols-4 gap-4 pt-4">
                                <img className="rounded-md" src="https://via.placeholder.com/200x200.png?text=Preview" alt="Product Image" />
                                <img className="rounded-md" src="https://via.placeholder.com/200x200.png?text=Preview" alt="Product Image" />
                                <img className="rounded-md" src="https://via.placeholder.com/200x200.png?text=Preview" alt="Product Image" />
                                <img className="rounded-md" src="https://via.placeholder.com/200x200.png?text=Preview" alt="Product Image" />

                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col mt-10 mx-5 pl-4">
                        <h1 className="text-3xl font-extrabold">Product Name</h1>
                        <div className="pt-3">
                            <p className="text-gray-800">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        </div>
                        <div className="flex pb-4">
                            <Rate defaultValue={4} disabled />
                            <p className="my-auto pt-2 pl-2 text-gray-600">(121)</p>
                        </div>
                        <Divider />
                        <div className="py-2">
                            <h1 className="text-3xl font-extrabold">$549</h1>
                            <div className="pt-3">
                                <p className="text-gray-800">Suggested payments with 6 months special financing</p>
                            </div>
                        </div>
                        <Divider />
                        <div className="py-2 flex gap-4">
                            <div className="flex bg-gray-200 w-48 items-center justify-evenly p-1 rounded-full gap-4">
                                <button className="w-100 text-xl cursor-pointer" onClick={() => { Count == 0 ? setCount(0) : setCount(Count - 1) }}>-</button>
                                <div className="w-100 cursor-none">{Count}</div>
                                <button className="w-100 text-xl cursor-pointer" onClick={() => { setCount(Count + 1) }}>+</button>
                            </div>
                            <p className="pl-4">Only <span className="text-red-600">12 Items</span> Left! <br/>Don't miss it</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProductPreview;