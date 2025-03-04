import React from "react";

const ProductTable = ({ products }) => {
    if (!products || products.length === 0) {
        return <p>No products available.</p>;
    }

    return (
        <table className="table-auto">
            <thead className="justify-between">
                <tr className="bg-gray-800">
                    <th className="px-16 py-2 text-gray-300">Id</th>
                    <th className="px-16 py-2 text-gray-300">Img</th>
                    <th className="px-16 py-2 text-gray-300">viName</th>
                    <th className="px-16 py-2 text-gray-300">enName</th>
                    <th className="px-16 py-2 text-gray-300">Discount</th>
                    <th className="px-16 py-2 text-gray-300">Lot</th>
                    <th className="px-16 py-2 text-gray-300">Description</th>
                    <th className="px-16 py-2 text-gray-300">Sizes</th>
                </tr>
            </thead>
            <tbody className="bg-gray-200">
                {products.map((product) => (
                    <tr key={product.id} className="bg-white border-4 border-gray-200">
                        <td>{product.id}</td>
                        <td className=" flex flex-row items-center">
                            <img src={product.img} alt={product.enName} className=" h-full w-auto object-cover" />
                        </td>
                        <td>{product.viName}</td>
                        <td>{product.enName}</td>
                        <td>{product.discount}%</td>
                        <td>{product.lot}</td>
                        <td>{product.description}</td>
                        <td>
                            <ul>
                                {product.size.map((s, index) => (
                                    <li key={index}>
                                        {s.description} - <strong>{s.price.toLocaleString()} VND</strong>
                                    </li>
                                ))}
                            </ul>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ProductTable;
