import ChangesSwitch from "@/components/main/ChangesSwitch";
import { useTranslations } from "next-intl";

export default function Home() {
    const t = useTranslations("Index")
    return (
        <div className="">
            <h1>{t('title')}</h1>
            <ChangesSwitch/>
            <div className=""></div>
        </div>
    );  
}
