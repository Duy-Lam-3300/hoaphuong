import { useEffect, useState } from "react";
import Card, { CardDetail } from "../../components/product/Card";
import { useTranslation } from "react-i18next";
import { HiOutlineMenu, HiOutlineViewGrid } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { fetchAllProduct } from "../../services/api";

export default function Products() {

    const { t, i18n } = useTranslation();
    const nav = useNavigate();
    const [data, setData] = useState();
    const [products, setProducts] = useState([])
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [pagination, setPagination] = useState(1);

    useEffect(() => {
        const getAPI = async () => {
            const data = await fetchAllProduct(pagination, 2);
            if (data) {
                setData(data);
                setProducts((prev) => [...prev, ...data.data])
            } else {
                setError("Failed to connect");
            }
            setLoading(false);
        }
        getAPI();
    }, [pagination]);

    const filter = [
        {
            name: t("Product Type"),
            value: [
                {
                    name: t("Snail"),
                    value: "Oc"
                },
                {
                    name: t("Crab"),
                    value: "Cua"
                },
                {
                    name: t("Shrimp"),
                    value: "Tom"
                },
            ]
        },
        {
            name: "Thương hiệu",
            value: [
                {
                    name: "Ho Chi Minh",
                    value: "Ho Chi Minh"
                },
                {
                    name: "Ha Noi",
                    value: "Ha Noi"
                },
                {
                    name: "Da Nang",
                    value: "Da Nang"
                },
            ]
        }]
    const selectOptions = [
        {
            name: t("Price Ascending"),
            value: "price.true"
        },
        {
            name: t("Price Descending"),
            value: "price.false"
        },
        {
            name: t("Name Ascending"),
            value: "name.true"
        },
        {
            name: t("Name Descending"),
            value: "name.false"
        },
    ];
    const navToDetail = (id) => {
        nav(id);
    }
    const [viewGrid, setViewGrid] = useState(true);
    const checkBoxInput = (name, value) => (
        <div className="flex items-center space-x-2">
            <input type="checkbox" id={value} value={value} name={name} className="cursor-pointer" />
            <label htmlFor={value} className="cursor-pointer">{value}</label>
        </div>
    );
    console.log(data);
    console.log(products);

    return (
        <>
            <div className="grid grid-cols-12 col-span-12 md:col-span-10 md:col-start-2 px-4 md:px-0 gap-4 mb-[5rem]">
                <form className="col-span-12 sm:col-span-3 md:col-span-2 ">
                    <div className="text-center text-xl font-bold bg-blue-300 py-2 my-4">{t("Filter")}</div>
                    <div className=" gap-y-6 flex flex-col">
                        {filter.map((item, index) => (
                            <div key={index} className="bg-gray-200 p-4">
                                <h3 className="font-semibold text-lg  pl-4 border-b-1 mb-4">{item.name}</h3>
                                {item.value.map((child, childIndex) => (
                                    <div key={childIndex} className="text-lg pl-4">
                                        {checkBoxInput(child.name, child.name)}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </form>
                <div className="col-span-12 sm:col-span-9 md:col-span-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    <div className="col-span-full text-2xl font-semibold pt-4">{t("ALL PRODUCTS")}</div>
                    <div className="col-span-full flex justify-between">
                        <div className="flex gap-4">
                            <button className={` border p-1 w-fit h-fit text-3xl rounded-sm cursor-pointer ${viewGrid ? "opacity-100" : "opacity-50"}`} onClick={() => setViewGrid(true)}><HiOutlineViewGrid /></button>
                            <button className={` border p-1 w-fit h-fit text-3xl rounded-sm cursor-pointer ${viewGrid ? "opacity-50" : "opacity-100"}`} onClick={() => setViewGrid(false)}><HiOutlineMenu /></button>
                        </div>
                    </div>
                    {products?.map((pro, index) =>
                        viewGrid ? (
                            <Card
                                key={index}
                                product={pro}
                                className="h-fit bg-white cursor-pointer"
                                locale={i18n.language}
                                onClick={() => navToDetail(pro.id.toString())}
                            />
                        ) : (<CardDetail
                            key={index}
                            product={pro}
                            className=" bg-white cursor-pointer col-span-full w-full"
                            locale={i18n.language}
                            onClick={() => navToDetail(pro.id.toString())}
                        />)
                    )}
                    {data?.pagination?.has_next_page && (
                        <div className="col-span-4 flex justify-center">
                            <button className="border-1 px-4 py-2 h-fit w-fit cursor-pointer opacity-50 hover:opacity-100 hover:font-semibold" onClick={() => setPagination(prev => prev + 1)}>Load more</button>
                        </div>
                    )}
                </div>
            </div>
        </>)
}