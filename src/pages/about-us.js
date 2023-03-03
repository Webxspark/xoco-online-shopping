import { LineChartOutlined, NotificationOutlined, SmileOutlined, TrophyOutlined } from "@ant-design/icons";
import { Divider } from "antd";
import { useLoadingContext } from "react-router-loading";
import AppNav from "../components/nav";
const AboutUs = () => {
    let RouterLoadingStatus = useLoadingContext();
    RouterLoadingStatus.done();
    return (
        <div>
            <AppNav />
            <div className="my-12 flex flex-col justify-center items-center">
                <h1 className="lg:text-5xl text-2xl md:text-4xl font-bold text-[#2f353e]">We're Better. Here's Why...</h1>
                <p className="text-[#6c757d] w-100 text-md text-center pt-6 mx-auto px-12 md:text-lg">Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis a libero tempus, blandit and cursus varius and magnis sapien</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 px-0 md:px-24 gap-y-12">
                <div className="flex justify-center items-start px-12 md:px-4 lg:px-24">
                    <div className="text-right pr-5"><LineChartOutlined className="text-6xl text-[#6c757d]" /></div>
                    <div className="col-span-2">
                        <h1 className="text-2xl font-bold text-[#2f353e]">Market Research</h1>
                        <p className="text-[#6c757d] w-100 text-lg pt-4">Porta semper lacus cursus feugiat primis ultrice ligula risus auctor tempus feugiat impedit undo auctor felis augue mauris aoreet tempor</p>
                    </div>
                </div>
                <div className="flex justify-center items-start px-12 md:px-4 lg:px-24">
                    <div className="text-right pr-5"><SmileOutlined className="text-6xl text-[#6c757d]" /></div>
                    <div className="col-span-2">
                        <h1 className="text-2xl font-bold text-[#2f353e]">User Experience</h1>
                        <p className="text-[#6c757d] w-100 text-lg pt-4">Porta semper lacus cursus feugiat primis ultrice ligula risus auctor tempus feugiat impedit undo auctor felis augue mauris aoreet tempor</p>
                    </div>
                </div>
                <div className="flex justify-center items-start px-12 md:px-4 lg:px-24">
                    <div className="text-right pr-5"><TrophyOutlined className="text-6xl text-[#6c757d]" /></div>
                    <div className="col-span-2">
                        <h1 className="text-2xl font-bold text-[#2f353e]">Brand Design Identity</h1>
                        <p className="text-[#6c757d] w-100 text-lg pt-4">Porta semper lacus cursus feugiat primis ultrice ligula risus auctor tempus feugiat impedit undo auctor felis augue mauris aoreet tempor</p>
                    </div>
                </div>
                <div className="flex justify-center items-start px-12 md:px-4 lg:px-24">
                    <div className="text-right pr-5"><NotificationOutlined className="text-6xl text-[#6c757d]" /></div>
                    <div className="col-span-2">
                        <h1 className="text-2xl font-bold text-[#2f353e]">Digital Marketing</h1>
                        <p className="text-[#6c757d] w-100 text-lg pt-4">Porta semper lacus cursus feugiat primis ultrice ligula risus auctor tempus feugiat impedit undo auctor felis augue mauris aoreet tempor</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 pt-24 ">
                <div className="col-span-1 flex flex-col justify-center">
                    <div className="mx-12 lg:mx-36">
                        <p className="text-[#6c757d] uppercase font-semibold">Digital Strategy</p>
                        <h1 className="text-[#2f353e] text-4xl font-extrabold pt-8">Start your online business with XOCO</h1>
                        <p className="text-[#6c757d] pt-6 text-lg">
                            Quaerat sodales sapien euismod blandit at vitae ipsum primis undo and cubilia laoreet augue and luctus magna dolor luctus at egestas sapien vitae nemo egestas
                            <br /><br />
                            Quaerat sodales sapien euismod blandit purus a purus ipsum primis in cubilia laoreet augue luctus magna dolor luctus and egestas sapien egestas vitae nemo volute
                        </p>
                    </div>
                </div>
                <div className="col-span-1 order-first md:order-last pb-8 md:pb-0 flex justify-center">
                    <img src="https://via.placeholder.com/610x610.png?text=Digital+Strategy" />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 py-24 ">
                <div className="col-span-1 mx-auto">
                    <img src="https://via.placeholder.com/610x610.png?text=Analytics+Review" />
                </div>
                <div className="col-span-1 flex flex-col justify-center">
                    <div className="mx-12">
                        <h1 className="text-[#2f353e] text-2xl font-extrabold pt-8">Advanced Analytics Review</h1>
                        <p className="text-[#6c757d] pt-6 text-lg">
                            Quaerat sodales sapien euismod blandit at vitae ipsum primis undo and cubilia laoreet augue and luctus magna dolor luctus at egestas sapien vitae nemo egestas volute and turpis dolores aliquam quaerat sodales a sapien
                        </p>
                        <h1 className="text-[#2f353e] text-2xl font-extrabold pt-8">Search Engine Optimization (SEO)</h1>
                        <p className="text-[#6c757d] pt-6 text-lg">
                            <ul className="list-disc p-2">
                                <li className="pb-3">Fringilla risus, luctus mauris auctor euismod an iaculis luctus magna purus pretium ligula purus and quaerat</li>
                                <li className="pb-3">Nemo ipsam egestas volute turpis dolores undo ultrice aliquam quaerat at sodales sapien purus</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutUs;