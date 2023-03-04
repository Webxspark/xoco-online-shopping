import { Link } from "react-router-dom";

const ArticleCard = (props) => {
    return (
        <>
            <div className="flex flex-col lg:flex-row w-auto bg-slate-100 rounded-xl p-0 items-center justify-center md:w-4/5">
                <img className="w-auto h-full rounded-l-xl mx-auto" src="https://via.placeholder.com/685x430.png?text=Article+Thumbnail" alt="" width="384" height="512" />
                <div className="p-8 text-left">
                    <div>
                        <Link to="/product-preview"><h1 className="text-lg md:text-xl lg:text-2xl font-bold py-3">{props.title}</h1></Link>
                        <p className="text-md md:text-lg font-medium">Aliqum mullam blandit vitae tempor sapien and donec lipsum gravida and porta undo velna dolor in cubilia...</p>
                        <p className="flex gap-5 py-5 items-center">
                            XOCO News
                            <div className="flex flex-col justify-center items-center">
                                <div className="border-r-2 border-gray-800 h-5"></div>
                            </div>
                            38 Comments
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ArticleCard;