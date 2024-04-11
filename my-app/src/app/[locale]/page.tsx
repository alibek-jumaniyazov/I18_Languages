
import { useTranslations } from "next-intl";

export default function Home() {
    const t = useTranslations("Index")
    return (
        <div className="flex flex-col gap-4 h-full">
            <h1 className="text-4xl font-semibold">{t('title')}</h1>
            <p>{t("description")}</p>
        </div>
    );  
}
