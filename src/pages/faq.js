import { Divider } from "antd";
import { Link } from "react-router-dom";
import { useLoadingContext } from "react-router-loading";
import ArticleCard from "../components/article-card";
import FaqCard from "../components/faq-card";
import AppNav from "../components/nav";
const FaqPage = () => {
    const RouterLoadingStatus = useLoadingContext();
    RouterLoadingStatus.done();
    return (
        <>
            <AppNav />
            <div className="container">
                <div className="flex flex-col items-center w-screen">
                    <h1 className="hero-text text-2xl lg:text-5xl md:text-2xl font-bold mt-24 lg:w-3/5 text-center">Frequently Asked <span>Questions</span></h1>
                    <p className="text-gray-500 text-md md:text-lg lg:text-xl lg:w-3/5 mx-8 md:mx-0 text-center mt-4">Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor primis libero tempus, blandit and cursus varius</p>

                    <div className="my-20">
                        <div className="grid grid-cols-1 md:grid-cols-2 px-0 md:px-24 gap-y-12">
                            <FaqCard question="What is your return policy?" answer="We accept returns within 30 days of purchase. Please see our Returns Policy page for more information." />
                            <FaqCard question="Can I cancel or modify my order after it has been placed?" answer="Unfortunately, we are unable to cancel or modify orders once they have been placed. Please review your order carefully before submitting it." />
                            <FaqCard question="How can I track my order?" answer="Once your order has shipped, you will receive a tracking number via email. You can use this tracking number to track your order on our website or with the shipping carrier." />
                            <FaqCard question="What should I do if I have not received my order?" answer="If you have not received your order within the expected delivery time, please contact our customer service team for assistance." />
                            <FaqCard question="Do you offer international shipping?" answer="Yes, we offer international shipping to select countries. Please see our Shipping Policy page for more information on international shipping." />
                            <FaqCard question="Do you offer free shipping?" answer="Yes, we offer free shipping on all orders over $50. We accept all major credit cards, as well as PayPal." />
                        </div>
                    </div>
                    <h1 className="hero-text text-lg md:text-2xl font-bold lg:w-3/5 text-center mb-24">Have more questions? <Link className="underline underline-offset-2 text-gray-500" to="/contact-us">Ask your question here</Link></h1>
                </div>
            </div>
        </>
    )
}
export default FaqPage;