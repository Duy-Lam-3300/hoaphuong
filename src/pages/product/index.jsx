import { useState } from "react";
import Card, { CardDetail } from "../../components/product/Card";
import { useTranslation } from "react-i18next";
import { HiOutlineMenu, HiOutlineViewGrid } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

export default function Products() {

    const { t, i18n } = useTranslation();
    const nav = useNavigate();
    const productsDatas = [
        {
            id: 1,
            viName: "Cua Hoàng Đế",
            enName: "King Crab",
            size: [
                { description: "Size lớn (2 - 3.5kg)", price: 3190000 },
                { description: "Size nhỏ (1.5 - 2kg)", price: 2990000 },
            ],
            discount: 20,
            img: "https://product.hstatic.net/200000260135/product/kr3_4c1f98628ced4ccba7603c588ec2525b_large.jpg",
            lot: 3,
            description: `Xuất xứ: Canada, Mỹ, vùng biển Alaska. 
Quy cách: Cua sống nhập khẩu. 
Dinh dưỡng: giàu protein, tăng cường sinh lý cho nam giới, tốt cho tim mạch, hỗ trợ giảm cân. 
Món ngon: Hấp bia hoặc nướng bơ tỏi.`,
        },
        {
            id: 2,
            viName: "Tôm Hùm Alaska",
            enName: "Alaskan Lobster",
            size: [
                { description: "Size lớn (2 - 4kg)", price: 2590000 },
                { description: "Size nhỏ (1.5 - 2kg)", price: 2390000 },
            ],
            discount: 15,
            img: "https://product.hstatic.net/200000260135/product/talsaka_5a526ab388ef469eba833414d5fb8b74_large.jpg",
            lot: 2,
            description: `Xuất xứ: Canada, Mỹ. 
Quy cách: Tôm sống nhập khẩu. 
Dinh dưỡng: Chứa nhiều omega-3, giúp tốt cho hệ tim mạch và trí não. 
Món ngon: Hấp, nướng phô mai, nấu lẩu.`,
        },
        {
            id: 3,
            viName: "Bào Ngư Hàn Quốc",
            enName: "Korean Abalone",
            size: [
                { description: "Trọng lượng 200 - 300g", price: 890000 },
            ],
            discount: 10,
            img: "https://product.hstatic.net/200000260135/product/bnhq_ad968b786c9a4c0e94c85a13fd575e2c_large.jpg",
            lot: 10,
            description: `Xuất xứ: Hàn Quốc. 
Quy cách: Tươi sống. 
Dinh dưỡng: Giàu khoáng chất, giúp bồi bổ sức khỏe và tăng cường miễn dịch. 
Món ngon: Hầm cháo, nướng mỡ hành.
uy cách: Tươi sống. 
Quy cách: Tươi sống. 
Dinh dưỡng: Giàu khoáng chất, giúp bồi bổ sức khỏe và tăng cường miễn dịch. 
Món ngon: Hầm cháo, nướng mỡ hành.
uy cách: Tươi sống. 
Dinh dưỡng: Giàu khoáng chất, giúp bồi bổ sức khỏe và tăng cường miễn dịch. 
Món ngon: Hầm cháo, nướng mỡ hành.`,
        },
        {
            id: 4,
            viName: "Cá Hồi Sapa",
            enName: "Sapa Salmon",
            size: [
                { description: "Trọng lượng 2 - 4kg", price: 999000 },
            ],
            discount: 5,
            img: "https://product.hstatic.net/200000260135/product/steelhead-closeup-2020-600px_87f7eeea26bf4dfc96143b089b8b783e_large.jpg",
            lot: 5,
            description: `Xuất xứ: Na Uy. 
Quy cách: Phi lê hoặc nguyên con. 
Dinh dưỡng: Giàu omega-3, protein giúp cải thiện sức khỏe tim mạch. 
Món ngon: Sashimi, áp chảo, sốt bơ chanh.`,
        },
        {
            id: 5,
            viName: "Sò Điệp Nhật Bản",
            enName: "Japanese Scallop",
            size: [
                { description: "Trọng lượng 500g - 1kg", price: 1390000 },
            ],
            discount: 12,
            img: "https://product.hstatic.net/200000260135/product/4_7c1e050366f1467496abe68a3d095814_large.png",
            lot: 8,
            description: `Xuất xứ: Nhật Bản. 
Quy cách: Tươi sống. 
Dinh dưỡng: Cung cấp nhiều canxi và kẽm, tốt cho hệ thần kinh. 
Món ngon: Sashimi, nướng bơ tỏi.`,
        },
        {
            id: 6,
            viName: "Sò Điệp Pháp",
            enName: "French Scallop",
            size: [
                { description: "Trọng lượng 300 - 500g", price: 490000 },
            ],
            discount: 18,
            img: "https://product.hstatic.net/200000260135/product/so_long_co_9529de964f53445192e19204d479ef89_large.jpg",
            lot: 12,
            description: `Xuất xứ: Pháp. 
Quy cách: Hàu sống. 
Dinh dưỡng: Chứa nhiều kẽm, giúp tăng cường sinh lý nam giới và miễn dịch. 
Món ngon: Ăn sống với chanh, nướng phô mai.`,
        },
        {
            id: 7,
            viName: "Cua Yếm Vương",
            enName: "Yem Vuong Crab",
            size: [
                { description: "Trọng lượng 1.2 - 2kg", price: 1990000 },
            ],
            discount: 22,
            img: "https://product.hstatic.net/200000260135/product/172114454_287434262883371_2195685924137650223_n_9d987fe06cd845e9a396a295b3fcdd9a_large.jpg",
            lot: 4,
            description: `Xuất xứ: Cà Mau, Việt Nam. 
Quy cách: Cua sống. 
Dinh dưỡng: Chứa nhiều canxi, tốt cho xương khớp. 
Món ngon: Rang muối, sốt tiêu đen.`,
        },
    ];
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

    const CheckBoxInput = (name, value) => (
        <div className="flex items-center space-x-2">
            <input type="checkbox" id={value} value={value} name={name} className="cursor-pointer" />
            <label htmlFor={value} className="cursor-pointer">{value}</label>
        </div>
    );

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
                                        {CheckBoxInput(child.name, child.name)}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </form>
                <div className="col-span-12 sm:col-span-9 md:col-span-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    <div className="col-span-full text-2xl font-semibold pt-4">{t("All products")}</div>
                    <div className="col-span-full flex justify-between">
                        <div className="flex gap-4">
                            <button className={` border p-1 w-fit h-fit text-3xl rounded-sm cursor-pointer ${viewGrid ? "opacity-100" : "opacity-50"}`} onClick={() => setViewGrid(true)}><HiOutlineViewGrid /></button>
                            <button className={` border p-1 w-fit h-fit text-3xl rounded-sm cursor-pointer ${viewGrid ? "opacity-50" : "opacity-100"}`} onClick={() => setViewGrid(false)}><HiOutlineMenu /></button>
                        </div>
                        <div className={`border-2 w-fit h-fit px-2 relative border-gray-200  rounded-sm text-gray-500 focus-within:text-black focus-within:border-black `}>
                            <label htmlFor="sortBy">{t("Sort by")}:</label>
                            <select name="sort" id="sortBy" className="outline-0 px-1 py-1" >
                                {selectOptions.map((item, key) => (
                                    <option value={item.value} key={key}>{item.name}</option>
                                ))}
                            </select>

                        </div>
                    </div>
                    {productsDatas.map((pro, index) =>
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
                    <div className="col-span-4 flex justify-center">
                        <button className="border-1 px-4 py-2 h-fit w-fit">Load more</button>
                    </div>
                </div>
            </div>
        </>)
}