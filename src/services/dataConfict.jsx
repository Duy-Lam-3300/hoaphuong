import { FaClock, FaFacebookSquare, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


export const availableLanguages = [{ key: "en", name: "English" }, { key: "vi", name: "Việt Nam" }];
export const navLinkMenu = [
    { href: "/", name: "Home" },
    { href: "/about", name: "About" },
    { href: "/products", name: "Products" },
    { href: "/contact", name: "Contact" },
];
export const contact = [
    {
        name: "fb",
        type: "Facebook",
        Icon: ({ size }) => (
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={size} height={size} viewBox="0 0 48 48">
                <linearGradient id="awSgIinfw5_FS5MLHI~A9a_yGcWL8copNNQ_gr1" x1="6.228" x2="42.077" y1="4.896" y2="43.432" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#0d61a9"></stop><stop offset="1" stopColor="#16528c"></stop></linearGradient><path fill="url(#awSgIinfw5_FS5MLHI~A9a_yGcWL8copNNQ_gr1)" d="M42,40c0,1.105-0.895,2-2,2H8c-1.105,0-2-0.895-2-2V8c0-1.105,0.895-2,2-2h32	c1.105,0,2,0.895,2,2V40z"></path><path d="M25,38V27h-4v-6h4v-2.138c0-5.042,2.666-7.818,7.505-7.818c1.995,0,3.077,0.14,3.598,0.208	l0.858,0.111L37,12.224L37,17h-3.635C32.237,17,32,18.378,32,19.535V21h4.723l-0.928,6H32v11H25z" opacity=".05"></path><path d="M25.5,37.5v-11h-4v-5h4v-2.638c0-4.788,2.422-7.318,7.005-7.318c1.971,0,3.03,0.138,3.54,0.204	l0.436,0.057l0.02,0.442V16.5h-3.135c-1.623,0-1.865,1.901-1.865,3.035V21.5h4.64l-0.773,5H31.5v11H25.5z" opacity=".07"></path><path fill="#fff" d="M33.365,16H36v-3.754c-0.492-0.064-1.531-0.203-3.495-0.203c-4.101,0-6.505,2.08-6.505,6.819V22h-4v4	h4v11h5V26h3.938l0.618-4H31v-2.465C31,17.661,31.612,16,33.365,16z"></path>
            </svg>
        ),
        link: "https://www.facebook.com",
        IconB: () => (
            <>
                <FaFacebookSquare />
            </>
        )
    },
    {
        name: "zalo",
        type: "Zalo",
        Icon: ({ size }) => (
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={size} height={size} viewBox="0 0 48 48">
                <path fill="#2962ff" d="M15,36V6.827l-1.211-0.811C8.64,8.083,5,13.112,5,19v10c0,7.732,6.268,14,14,14h10	c4.722,0,8.883-2.348,11.417-5.931V36H15z"></path><path fill="#eee" d="M29,5H19c-1.845,0-3.601,0.366-5.214,1.014C10.453,9.25,8,14.528,8,19	c0,6.771,0.936,10.735,3.712,14.607c0.216,0.301,0.357,0.653,0.376,1.022c0.043,0.835-0.129,2.365-1.634,3.742	c-0.162,0.148-0.059,0.419,0.16,0.428c0.942,0.041,2.843-0.014,4.797-0.877c0.557-0.246,1.191-0.203,1.729,0.083	C20.453,39.764,24.333,40,28,40c4.676,0,9.339-1.04,12.417-2.916C42.038,34.799,43,32.014,43,29V19C43,11.268,36.732,5,29,5z"></path><path fill="#2962ff" d="M36.75,27C34.683,27,33,25.317,33,23.25s1.683-3.75,3.75-3.75s3.75,1.683,3.75,3.75	S38.817,27,36.75,27z M36.75,21c-1.24,0-2.25,1.01-2.25,2.25s1.01,2.25,2.25,2.25S39,24.49,39,23.25S37.99,21,36.75,21z"></path><path fill="#2962ff" d="M31.5,27h-1c-0.276,0-0.5-0.224-0.5-0.5V18h1.5V27z"></path><path fill="#2962ff" d="M27,19.75v0.519c-0.629-0.476-1.403-0.769-2.25-0.769c-2.067,0-3.75,1.683-3.75,3.75	S22.683,27,24.75,27c0.847,0,1.621-0.293,2.25-0.769V26.5c0,0.276,0.224,0.5,0.5,0.5h1v-7.25H27z M24.75,25.5	c-1.24,0-2.25-1.01-2.25-2.25S23.51,21,24.75,21S27,22.01,27,23.25S25.99,25.5,24.75,25.5z"></path><path fill="#2962ff" d="M21.25,18h-8v1.5h5.321L13,26h0.026c-0.163,0.211-0.276,0.463-0.276,0.75V27h7.5	c0.276,0,0.5-0.224,0.5-0.5v-1h-5.321L21,19h-0.026c0.163-0.211,0.276-0.463,0.276-0.75V18z"></path>
            </svg>
        ),
        link: "https://www.Zalo.com",
        IconB: ({ size }) => (
            <div className={`translate-x-[-${size / 8}px] translate-y-[${size / 8}px] w-[${size}px]`}>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={size + 5} height={size + 5} viewBox="0 0 24 24">
                    <path fill="#213547" d="M15.946,12.988c-0.69,0-1.252-0.562-1.252-1.252s0.562-1.252,1.252-1.252	c0.69,0,1.252,0.562,1.252,1.252S16.637,12.988,15.946,12.988z M15.946,10.984c-0.414,0-0.751,0.337-0.751,0.751	s0.337,0.751,0.751,0.751s0.751-0.337,0.751-0.751S16.36,10.984,15.946,10.984z"></path><path fill="#213547" d="M14.193,12.988h-0.334c-0.092,0-0.167-0.075-0.167-0.167V9.982h0.501V12.988z"></path><path fill="#213547" d="M12.691,10.567v0.173c-0.21-0.159-0.468-0.257-0.751-0.257c-0.69,0-1.252,0.562-1.252,1.252	s0.562,1.252,1.252,1.252c0.283,0,0.541-0.098,0.751-0.257v0.09c0,0.092,0.075,0.167,0.167,0.167h0.334v-2.421H12.691z M11.939,12.487c-0.414,0-0.751-0.337-0.751-0.751s0.337-0.751,0.751-0.751s0.751,0.337,0.751,0.751S12.353,12.487,11.939,12.487z"></path><path fill="#213547" d="M10.771,9.982H8.099v0.501h1.777l-1.86,2.171h0.009c-0.054,0.07-0.092,0.155-0.092,0.25v0.083h2.504	c0.092,0,0.167-0.075,0.167-0.167v-0.334H8.827l1.86-2.171h-0.009c0.054-0.07,0.092-0.155,0.092-0.25V9.982z"></path><path fill="none" stroke="#213547" stroke-miterlimit="10" stroke-width="2" d="M17,20H7c-1.657,0-3-1.343-3-3V7	c0-1.657,1.343-3,3-3h10c1.657,0,3,1.343,3,3v10C20,18.657,18.657,20,17,20z"></path><path fill="#213547" d="M13.16,20.27c-1.748,0-3.547,0.639-5.088-0.207l-3.397-0.621l-0.386-2.914 c-1.077-1.682-0.718-3.662-0.718-5.663c0-2.367-0.113-4.637,1.365-6.48L8.142,4.68c-2.328,1.105-3.177,4.124-3.177,5.991 c0,3.087,1.472,4.79,1.472,4.79l-0.425,1.943c-0.064,0.357,0.26,0.662,0.613,0.576l1.712-0.545c0,0,2.292,1.564,4.663,1.564 c5.198,0,6.385-2.462,6.385-2.462l0.229,2.526C17.771,20.542,15.525,20.27,13.16,20.27z"></path>
                </svg>
            </div>
        )
    },
];
export const phoneContact = "0327576730";
export const emailContact = "Duylam3300@gmail.com";
export const workTime = "08:00-22:00";
export const coppyright = "© 2025 -All rights reserved HOAPHUONGSEAFOOD Co. Ltd";
export const companyInformation = [
    {
        label: "Company's name",
        value: "HoaPhuongseafood",
        Icon: () => (<>
        </>),
    },
    {
        label: "Address",
        value: "xxxxx, xxxxxx, Q1, Hồ Chí Minh",
        Icon: () => (<>
        </>),
    },
    {
        label: "Email",
        value: emailContact,
        Icon: () => (<>
            <MdEmail />
        </>),
    },
    {
        label: "Hotline",
        value: phoneContact,
        Icon: () => (<>
            <FaPhoneAlt />
        </>),
    },
    {
        label: "Work time",
        value: workTime + " daily",
        Icon: () => (<>
            <FaClock />
        </>),
    },
]
