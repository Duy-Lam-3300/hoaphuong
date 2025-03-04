import emailjs from "emailjs-com";


const API_URL = import.meta.env.VITE_API_URL;
const SERVICES_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const EMAILCONTACT = import.meta.env.EMAILCONTACT;
export const fetchAllProduct = async (page = 1, limit = 2) => {
    try {
        const response = await fetch(`${API_URL}/getProduct.php?page=${page}&limit=${limit}`, { method: "GET" })
        if (!response.ok) {
            throw new Error(`Error:${response.status}-${response.statusText}`);
        }
        const data = await response.json();
        return data
    } catch (e) {
        console.log(e);
        return null;
    }
}

export const sendEmail = async (formData) => {
    try {
        const response = await emailjs.send(
            SERVICES_ID,
            TEMPLATE_ID,
            {
                to_email: EMAILCONTACT,  // The recipient email
                from_name: formData.name,   // Sender's name
                from_email: formData.email, // Sender's email
                phone: formData.phoneNumber,
                address: formData.address,
                topic: formData.topic,
                message: formData.content,  // The message content
            },
            PUBLIC_KEY
        );
        return response;
    } catch (error) {
        console.error("Error sending email:", error);
        throw error;
    }
};

export const takeDetail = async (id) => {
    try {
        const response = await fetch(`${API_URL}/productDetail.php?id=${id}`, { method: "GET" })
        if (!response.ok) {
            throw new Error(`Error:${response.status}-${response.statusText}`);
        }
        const data = await response.json();
        return data
    } catch (e) {
        console.log(e);
        return null;
    }
}
