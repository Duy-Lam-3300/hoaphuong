import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaClock } from "react-icons/fa";
import { emailContact, phoneContact, workTime } from "../../services/dataConfict";

export default function Header() {
    return (
        <div className="grid grid-cols-12">
            <div className="col-span-10 col-start-2  my-4">
                <div className="w-full flex justify-end gap-4 text-[16px]">
                    <div className="flex gap-2 items-center">
                        <div><FaClock /></div>
                        <p>{workTime}</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <div><FaPhoneAlt /></div>
                        <p>{phoneContact}</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <div><MdEmail /></div>
                        <p>{emailContact}</p>
                    </div>
                </div>
            </div>
            <div className="w-full h-[200px] bg-gray-200 col-span-12"></div>
        </div>
    )
}