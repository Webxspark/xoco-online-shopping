import { Divider } from "antd";
import { Link } from "react-router-dom";
import { useLoadingContext } from "react-router-loading";
import ArticleCard from "../components/article-card";
import AppNav from "../components/nav";
const BlogPage = () => {
    const RouterLoadingStatus = useLoadingContext();
    RouterLoadingStatus.done();
    return (
        <>
            <AppNav />
            <div className="container">
                <h1 className="hero-text text-xl lg:text-4xl md:text-2xl font-bold text-center mt-24">Relevant news and more for you.<br />Welcome to our <span>blog</span></h1>
                <div className="w-full flex items-center justify-center flex-col my-12">
                    <ArticleCard title="Tempor sapien donec gravida a suscipit and porta justo vitae" />
                    <Divider />
                    <ArticleCard title="A ligula risus auctor tempus" />
                    <Divider />
                    <ArticleCard title="Integer urna turpis donec ipsum a porta justo risus auctor" />
                    <Divider />
                    <ArticleCard title="Neque lectus porta MacOs" />
                </div>

            </div>
        </>
    )
}
export default BlogPage;