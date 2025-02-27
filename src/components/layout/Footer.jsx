import ContactButton from "../shared/ContactButton";


export default function Footer() {
    const companyInformation = {
        name: "Công ty thủy hải sản Lâm Farm",
        location: "87/6c Phan Văn Hớn, Phường Tân Thới Nhất, Quận 12, TP.HCM",
        phone: "0906909933",
        email: "haisancuaviet@gmail.com",
        copyRight: "@2020 Lam Farm",
        link: [
            {
                name: "fb",
                link: "",
                logo: ""
            },
            {
                name: "zalo",
                link: "",
                logo: ""
            },
        ]
    }
    return (
        <div className="grid grid-cols-12">
            <footer className="col-span-10 col-start-2">
                <div className="navigateMenu">
                </div>
                <div className="companyInfor flex justify-between items-start">
                    <div className="left">
                        <p className="name">
                            {companyInformation.name}
                        </p>
                        <p className="location">
                            {companyInformation.location}
                        </p>
                        <p className="phone">
                            {companyInformation.phone}
                        </p>
                        <p className="email">
                            {companyInformation.email}
                        </p>
                    </div>
                    <div className="right">
                        <p className="copyRight">
                            {companyInformation.copyRight}
                        </p>
                        <div className="linkMenu">
                            <ContactButton />

                        </div>
                    </div>
                </div>
            </footer>
        </div>)
}