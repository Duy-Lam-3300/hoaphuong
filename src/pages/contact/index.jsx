import { useState } from "react"
import { sendEmail } from "../../services/api";

import { FaLocationDot } from "react-icons/fa6";
import { contact, emailContact, phoneContact } from "../../services/dataConfict";
import { useTranslation } from "react-i18next";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";


export default function Contact() {
    const { t } = useTranslation();

    const [form, setForm] = useState({
        name: "",
        phoneNumber: "",
        email: "",
        address: "",
        topic: "",
        content: "",
    });
    const formStyle = [
        {
            label: t("Name") + "*",
            placeholder: t("Name"),
            name: "name",
            colspan: 2,
        },
        {
            label: t("PhoneNumber") + "*",
            placeholder: t("PhoneNumber"),
            name: "phoneNumber",
            colspan: 1,
        },
        {
            label: t("Email") + "*",
            placeholder: t("Email"),
            name: "email",
            colspan: 1,
        },
        {
            label: t("Address") + "*",
            placeholder: t("Address"),
            name: "address",
            colspan: 2,
        },
        {
            label: t("Topic") + "*",
            placeholder: t("Topic"),
            name: "topic",
            colspan: 2,
        },
        {
            label: t("Content") + "*",
            placeholder: t("Content"),
            name: "content",
            colspan: 2,
        },
    ]

    const handleInput = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    }

    const handleSubmit = async (e) => {
        try {
            const result = await sendEmail(form);
            console.log("Email Sent:", result);
            if (result.status === 200) {
                setForm({
                    name: "",
                    phoneNumber: "",
                    email: "",
                    address: "",
                    topic: "",
                    content: "",
                })
            }
            alert("Your message has been sent successfully!");
        } catch (error) {
            console.error("Email sending failed:", error);
            alert("Oops! Something went wrong.");
        }
    };

    const inputComponent = (props, key) => {
        return (
            <div className={`w-full col-span-${props.colspan}`} key={key}>
                {props.label !== "Content*" ? (
                    <>
                        {/* <div className="mb-1">
                            <label htmlFor="">{props.label}</label>
                        </div> */}
                        <input type="text" name={props.name} value={form[props.name]} onChange={handleInput} placeholder={props.placeholder} className="border-2 w-full px-4 h-[3rem] relative border-gray-200 rounded-sm text-gray-500 focus-within:text-black focus-within:border-black placeholder:text-gray-500" />
                    </>
                ) : (<>
                    {/* <div className="mb-1">
                        <label htmlFor="">{props.label}</label>
                    </div> */}
                    <textarea placeholder={props.placeholder} rows={4} value={form[props.name]} name={props.name} onChange={handleInput} className="border-2 w-full mb-0 px-4 py-2  relative border-gray-200 rounded-sm text-gray-500 focus-within:text-black focus-within:border-black placeholder:text-gray-500" />
                </>)}
            </div>
        )
    }
    return (
        <div className="col-span-10 col-start-2 grid grid-cols-12 mt-4">
            <div className="col-span-5">
                <div className="flex flex-col gap-4">
                    <div className="font-semibold text-2xl mb-2">Hoa Phuong seafood</div>
                    <div className="flex items-center gap-3">
                        <div className="text-xl">
                            <FaLocationDot />
                        </div>
                        <div className="text-xl"><span className="font-semibold">{t("Location")}: </span>xxx, district 02, Ho Chi Minh</div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="text-xl">
                            <MdEmail />
                        </div>
                        <div className="text-xl"><span className="font-semibold">{t("Email")}: </span>{emailContact}</div>
                    </div>

                    {contact.map(item => (
                        <div className="flex items-center gap-3">
                            <div className="text-xl">
                                <item.IconB size={20}/>
                            </div>
                            <div className="text-xl"><span className="font-semibold">{item.type}: </span><a href={item.link} className="hover:text-blue-500">{item.link}</a></div>
                        </div>
                    ))}
                    <div className="flex items-center gap-3">
                        <div className="text-xl">
                            <FaPhoneAlt />
                        </div>
                        <div className="text-xl"><span className="font-semibold">{t("Hotline")}: </span>{phoneContact}</div>
                    </div>
                </div>
                <div className="font-semibold text-2xl my-6">{t("ContactWithUs")}</div>
                <form className="grid grid-cols-2 gap-4" action={handleSubmit}>
                    {formStyle.map((item, index) => { return inputComponent(item, index) })}
                    <button className="w-fit border-1 px-4 py-1 cursor-pointer">{t("Send")}</button>
                </form>
            </div>
            <div className="col-span-6 w-full h-full bg-gray-300 col-start-7">

            </div>
        </div>
    )
}