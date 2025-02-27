
import { useState } from "react";
import { PiCheckBold } from "react-icons/pi";
import { useParams } from "react-router-dom";

export default function DetailProduct({ ...rest }) {
    const [type, setType] = useState(0);
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
    const valueId = useParams();
    const product = productsDatas.find(pro => pro.id === parseInt(valueId.id))
    console.log(product);

    return (<div className="col-span-10 flex col-start-2 justify-between">
        {/* <div className="flex flex-col items-center p-4">
            <img src={product.img} alt={product.enName} className="w-72 h-72 object-cover mb-4" />
            <h2 className="text-xl font-bold">{product.enName} ({product.viName})</h2>
            <p className="text-gray-600">{product.description}</p>
            <div className="mt-2">
                <p className="text-lg font-bold">{product.size[0].price}đ</p>
                <p className="text-sm text-gray-500 line-through">
                    {product.size[0].price - (product.size[0].price * product.discount) / 100}đ
                </p>
            </div>
            <span className="mt-2 px-3 py-1 bg-red-500 text-white rounded-full">
                {product.discount}% OFF
            </span>
        </div> */}

        <div className="">
            <img src={product.img} alt={product.enName} className="w-[35rem] h-[35rem] object-cover mb-4" />
        </div>
        <div>
            <h2 className="text-3xl font-semibold">{rest.locale === "en" ? product.enName : product.viName}</h2>
            <div className="mt-2 flex gap-4 items-center">
                <p className="text-2xl font-bold">{product.size[type].price - (product.size[type].price * product.discount) / 100}đ</p>
                <p className="text-sm text-gray-500 line-through">
                {product.size[type].price}    đ
                </p>
            </div>
            <div className="flex items-center gap-4">
                {product.size.map((pro, index) => (
                    <div className={`border-2 ${type === index ? "border-blue-500 " : "border-gray-300 text-gray-400"} px-3 pr-4 py-1 cursor-pointer relative`} onClick={() => setType(index)} key={index}>
                        <p><span className="font-semibold text-lg">Size:</span> {pro.description}</p>

                        {type === index &&
                            <>
                                <div className="border-b-[20px] border-b-blue-500 w-fit h-fit border-l-[20px] border-l-transparent absolute bottom-0 right-0">
                                </div>
                                <PiCheckBold className="text-[10px] font-bold absolute bottom-[1.5px] right-[1.5px]  text-white" />
                            </>
                        }
                    </div>))}
            </div>
            <div>
                <div className="mt-4">
                    <p className="whitespace-pre-line">{product.description.trim()}</p>
                </div>
            </div>
        </div>
    </div>)
}