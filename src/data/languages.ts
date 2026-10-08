import type { LanguageInfoModel } from "../models/models.ts";

export function Languages(): LanguageInfoModel[] {
    return [
        {
            title: "English",
            val: "en",
            fileName: "en.json"
        },
        {
            title: "Swahili",
            val: "sw",
            fileName: "sw.json"
        }
    ]

}