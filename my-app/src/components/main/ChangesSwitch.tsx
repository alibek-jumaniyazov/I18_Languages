"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useTransition } from "react";

type Props = {};

export default function ChangesSwitch({}: Props) {
    const [isPennding, startTransition] = useTransition();
    const router = useRouter();
    const localeActive = useLocale();
    function onSelectChange(e: ChangeEvent<HTMLSelectElement>) {
        const nextLocale = e.target.value;
        startTransition(() => {
            router.replace(`/${nextLocale}`);
        });
    }

    return (
        <div className="border rounded ">
            <select
                defaultValue={localeActive}
                disabled={isPennding}
                onChange={onSelectChange}
            >
                <option value="en">English</option>
                <option value="uz">Uzbek</option>
                <option value="ru">Russia</option>
            </select>
        </div>
    );
}
