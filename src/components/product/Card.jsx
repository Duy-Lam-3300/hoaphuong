

export default function Card({ product, ...rest }) {
    return (
        <div {...rest} className="border border-gray-400 pb-4  shadow-md w-fit flex flex-col items-center relative cursor-pointer">
            <img src={product.img} alt={product.enName} className=" h-fit w-72 object-cover " />

            <h2 className="text-lg font-bold mt-3 mb-1">{rest.locale === "en" ? product.enName : product.viName}</h2>
            {/* <pre className="text-gray-600 text-wrap">{product.description}</pre> */}
            <div className="flex gap-1 items-end">
                <p className="text-lg ">{product.size[0].price}đ</p>
                <p className="text-gray-500 line-through text-sm">{product.size[0].price - product.size[0].price * product.discount / 100}đ</p>
            </div>
            <p className="font-bold absolute top-4 right-4 bg-red-500 rounded-full h-11 w-11  text-white flex items-center justify-center">{product.discount}%</p>
        </div>
    );
}


export function CardDetail({ product, ...rest }) {
    return (
        <div {...rest} className={`${rest.className} border border-gray-400 gap-10 shadow-md w-fit flex items-start relative cursor-pointer h-[17rem] max-h-[17rem] `}>
            <img src={product.img} alt={product.enName} className=" h-full w-[17rem] object-cover " />
            <div className="flex flex-col py-3 h-full overflow-hidden text-ellipsis whitespace-nowrap max-h-[15rem]">
                <h2 className="text-xl font-bold mt-3 mb-1">{rest.locale === "en" ? product.enName : product.viName}</h2>
                {/* <pre className="text-gray-600 text-wrap">{product.description}</pre> */}
                <div className="flex gap-1 items-end">
                    <p className="text-lg ">{product.size[0].price}đ</p>
                    <p className="text-gray-500 line-through text-sm">{product.size[0].price - product.size[0].price * product.discount / 100}đ</p>
                </div>
                <p className="font-bold absolute top-4 right-4 bg-red-500 rounded-full h-11 w-11  text-white flex items-center justify-center">{product.discount}%</p>
                <pre className="mt-4">
                    {product.description}
                </pre>
            </div>
        </div>)
}

