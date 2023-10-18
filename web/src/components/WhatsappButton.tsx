import { WhatsappLogo } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export const WhatsappButton = () => {
    return(
        <div className="bg-emerald-400 text-white w-12 h-12 rounded-[50%] fixed bottom-5 right-5 flex justify-center items-center">
            <Link to="https://wa.me/258849061356" target="_blank">
                <WhatsappLogo size={32} />
            </Link>
        </div>
    );
}