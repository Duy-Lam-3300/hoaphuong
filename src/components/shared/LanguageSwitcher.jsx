import { useTranslation } from "react-i18next";
import { availableLanguages } from "../../services/dataConfict";
const getCookie = (name) => {
    const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
    return match ? match[2] : null;
}
const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const getCurrent = getCookie("locale") || i18n.language;


    const changeLanguage = (lng) => {
        document.cookie = `locale=${lng}; path=/`;
        i18n.changeLanguage(lng);
    };


    return (
        <select
            className="border-2 px-1 py-1 border-gray-300 focus-within:border-blue-500 active:border-blue-500 rounded-sm w-[7.8rem]"
            value={getCurrent}
            onChange={(e) => changeLanguage(e.target.value)}
        >
            {availableLanguages.map(item => (
                <option value={item.key} key={item.key}>{item.name}</option>))}

        </select>
    );
};

export default LanguageSwitcher;
