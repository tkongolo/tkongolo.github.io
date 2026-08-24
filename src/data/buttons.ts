import { LINKS } from "../constants/links.ts";
import type { LinkButtonModel } from "../models/models.ts";

export function AboutLinkButtons({ t }: { t: (key: string) => string }): LinkButtonModel[] {
    return [
        {
            name: "viewProjectButton",
            buttonName: t("app.buttons.about_view_projects"),
            buttonLink: LINKS.projectLink,
        },
        {
            name: "downloadCVButton",
            buttonName: t("app.buttons.about_download_cv"),
            buttonLink: LINKS.cvLink,
        },
    ]
}

