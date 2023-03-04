const FaqCard = (props) => {
    return (
        <div className="flex justify-center items-start px-12 md:px-4 lg:px-24">
            <div className="col-span-2">
                <h1 className="text-2xl font-bold text-[#2f353e]">{props.question}</h1>
                <p className="text-[#6c757d] w-100 text-lg pt-4">{props.answer}</p>
            </div>
        </div>
    )
}
export default FaqCard;