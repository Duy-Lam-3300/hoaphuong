
import { useEffect, useState } from "react";
import { PiCheckBold } from "react-icons/pi";
import { useParams } from "react-router-dom";
import { takeDetail } from "../../services/api";

export default function DetailProduct({ ...rest }) {
    const [type, setType] = useState(0);

    const [data, setData] = useState();
    const [error, setError] = useState();
    const valueId = useParams();
    useEffect(() => {
        const getAPI = async () => {
            const data = await takeDetail(valueId.id);
            if (data) {
                setData(data);
            } else {
                setError("Failed to connect.");
            }
        }
        getAPI();
    }, [valueId.id])

    console.log(data);

    return (<div className="col-span-10 flex col-start-2 justify-between">
        {/* mobile */}
        {/* <div className="flex flex-col items-center p-4">
            <img src={data?.img} alt={data?.en_name} className="w-72 h-72 object-cover mb-4" />
            <h2 className="text-xl font-bold">{data?.en_name} ({data?.vi_name})</h2>
            <p className="text-gray-600">{data?.description}</p>
            <div className="mt-2">
                <p className="text-lg font-bold">{data?.size[0].price}đ</p>
                <p className="text-sm text-gray-500 line-through">
                    {data?.size[0].price - (data?.size[0].price * data?.discount) / 100}đ
                </p>
            </div>
            <span className="mt-2 px-3 py-1 bg-red-500 text-white rounded-full">
                {data?.discount}% OFF
            </span>
        </div> */}

        <div className="">
            <img src={data?.img} alt={data?.en_name} className="w-[35rem] h-[35rem] object-cover mb-4" />
        </div>
        <div>
            <h2 className="text-3xl font-semibold">{rest.locale === "en" ? data?.en_name : data?.vi_name}</h2>
            <div className="mt-2 flex gap-4 items-center">
                <p className="text-2xl font-bold">{data?.size[type].price - (data?.size[type].price * data?.discount) / 100}đ</p>
                <p className="text-sm text-gray-500 line-through">
                    {data?.size[type].price}    đ
                </p>
            </div>
            <div className="flex items-center gap-4">
                {data?.size.map((pro, index) => (
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
                    <p className="whitespace-pre-line">{data?.description.trim()}</p>
                </div>
            </div>
        </div>
    </div>)
}