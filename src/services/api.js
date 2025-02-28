const API_URL = import.meta.env.VITE_API_URL;

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
