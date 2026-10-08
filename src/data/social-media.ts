import type { SocMediaInfoModel } from "../models/models.ts";

export function getSocialMedia(): SocMediaInfoModel[] {
    return [
        {
            provider: "github",
            link: "https://github.com/tkongolo"
        },
        {
            provider: "linkedin",
            link: "https://www.linkedin.com/in/thomas-kongolo-b08832144/"
        },
        {
            provider: "stackoverflow",
            link: "https://stackoverflow.com/users/12345678/thomas-kongolo"
        }
    ]

}