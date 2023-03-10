import { Button, message } from "antd";
import { useState } from "react";
import { useLoadingContext } from "react-router-loading";
import AppNav from "../components/nav";
const ContactUs = () => {
    const RouterLoadingStatus = useLoadingContext();
    RouterLoadingStatus.done();
    const [BtnLoadingState, setBtnLoadingState] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();
    const handleFormSubmission = (e) => {
        e.preventDefault();
        //validating form
        const name = e.target[0].value;
        const email = e.target[1].value;
        const message = e.target[2].value;

        if (name === "" || email === "" || message === "") {
            messageApi.info("Please fill all the fields");
            return;
        }
        const data = `name=${encodeURIComponent(name)}&email=${email}&message=${message}&test=true`;
        setBtnLoadingState(true);
        fetch("https://apis.webxspark.com/v2.0/email-subscription/subscribe", {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: (data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === "success") {
                    messageApi.success('Message sent successfully!')
                    //clear all text fields
                    e.target[0].value = "";
                    e.target[1].value = "";
                    e.target[2].value = "";
                    e.target[3].value = "";
                    e.target[4].value = "";
                } else {
                    messageApi.error(data.message);
                }
                setBtnLoadingState(false);
            })
            .catch(err => {
                console.log(err);
                messageApi.error("Message not sent");
                setBtnLoadingState(false);
            })
    }
    return (
        <>
            <AppNav />
            <div className="container">
                {contextHolder}
                <div className="flex flex-col items-center w-screen">
                    <h1 className="hero-text text-2xl lg:text-5xl md:text-2xl font-bold mt-24 lg:w-3/5 text-center">Have a question? Need help? Don't hesitate, drop us a line</h1>
                    <p className="text-gray-500 text-md md:text-lg lg:text-xl lg:w-3/5 mx-8 md:mx-0 text-center mt-4">Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor primis libero tempus, blandit and cursus varius and magnis sapien</p>
                    <form className="mb-24" onSubmit={handleFormSubmission}>
                        <div className="flex flex-col lg:flex-row gap-5 mt-12">
                            <input className="w-full lg:w-1/2 p-4 rounded-xl border-2 border-gray-200" type="text" placeholder="Name" />
                            <input className="w-full lg:w-1/2 p-4 rounded-xl border-2 border-gray-200" type="email" placeholder="Email" />
                        </div>
                        <div className="flex flex-col lg:flex-row gap-5 mt-5">
                            <input className="w-full lg:w-1/2 p-4 rounded-xl border-2 border-gray-200" type="text" placeholder="Subject" />
                            <input className="w-full lg:w-1/2 p-4 rounded-xl border-2 border-gray-200" type="tel" placeholder="Phone" />
                        </div>
                        <div className="flex flex-col mt-5">
                            <textarea className="w-full p-4 rounded-xl border-2 border-gray-200" placeholder="Message" />
                        </div>
                        <Button htmlType="submit" type="null" loading={BtnLoadingState} className="bg-black border-2 p-4 border-black h-auto rounded-lg font-semibold text-white text-md mt-5">Send Message</Button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default ContactUs;