import { contact } from "../../services/dataConfict";
import React from "react";

export default function ContactButton() {
    return (
        <div className="flex gap-4 items-center m-1">
            {contact.map(item => (
                <a className="hover:scale-110" key={item.name} href={item.link}>
                    {React.createElement(item.Icon, { size: 50 })}
                </a>
            ))}
        </div>
    );
}
