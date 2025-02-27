import { useState } from "react";
import { MdOutlineSearch } from "react-icons/md";

export default function SearchInput({ className, actionPath, dataQuery, defaultValue }) {
    const [query, setQuery] = useState(defaultValue || "");

    return (
        <form action={actionPath} className={`border-2 w-fit h-fit relative border-gray-200 rounded-sm text-gray-500 focus-within:text-black focus-within:border-black ${className || ""}`}>
            <input
                type="text"
                name={dataQuery}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
                className="outline-0 pl-4 py-1 pr-10"

            />
            <button type="submit" className="absolute top-0 right-0 m-auto bottom-0 cursor-pointer border-0 px-2 bg-gray-200 hover:text-black">
                <MdOutlineSearch size="25px" />
            </button>
        </form>
    );
}