import { companyInformation, contact, coppyright, navLinkMenu } from "../../services/dataConfict";
import ContactButton from "../shared/ContactButton";


export default function Footer() {
    // const companyInformation = {
    //     name: "Công ty thủy hải sản Lâm Farm",
    //     location: "87/6c Phan Văn Hớn, Phường Tân Thới Nhất, Quận 12, TP.HCM",
    //     phone: "0906909933",
    //     email: "haisancuaviet@gmail.com",
    //     copyRight: "@2020 Lam Farm",
    //     link: [
    //         {
    //             name: "fb",
    //             link: "",
    //             logo: ""
    //         },
    //         {
    //             name: "zalo",
    //             link: "",
    //             logo: ""
    //         },
    //     ]
    // }
    return (
        <div className="grid grid-cols-12 pt-8">
            <footer className="col-span-10 col-start-2 grid grid-cols-10">
                <div className="col-span-2">
                    <p className="text-xl mb-4 font-bold">CONTACT INFORMATIONS</p>

                    {companyInformation.map((item, index) => (
                        <div className="my-2 flex items-center gap-2" key={index}>
                            <item.Icon />
                            <p className="text-lg">{item.value}</p>
                        </div>
                    ))}
                    <div className="flex gap-4 items-center">
                        {contact.map((item, index) => (
                            <a className="text-[32px]" href={item.link} key={index} target="_blank">
                                <item.IconB size={32} />
                            </a>
                        ))}
                    </div>
                </div>
                <div className="col-span-1 col-start-4">
                    <p className="text-xl mb-4 font-bold">MENU</p>

                    {navLinkMenu.map((item, index) => (
                        <div className="my-2" key={index}>
                            <a className="text-lg hover:font-semibold hover:scale-125" href={item.href}>{item.name}</a>
                        </div>
                    ))}
                </div>
                    <div className="col-span-10 flex justify-between items-center border-t-[1px] border-dashed my-4 pt-4">
                    <p>{coppyright}</p>
                </div>
            </footer>
        </div>)
}