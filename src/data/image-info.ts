import { createClient } from "../lib/supabase/client.ts";
import type { ImageInfoModel } from "../models/models.ts";

/** Paths are relative to the configured Supabase Storage bucket. */
export const SUPABASE_IMAGE_PATHS = {
    profileImage: "portfolio/thomas_profile_pic.jpg",
} as const;

export type SupabaseImageKey = keyof typeof SUPABASE_IMAGE_PATHS;

/** Returns a time-limited URL for an image in a private Supabase Storage bucket. */
export async function getImageUrl(bucket: string, key: SupabaseImageKey): Promise<string> {
    const expiresIn = Number(import.meta.env.VITE_SUPABASE_SIGNED_URL_EXPIRES_IN);

    if (!Number.isInteger(expiresIn) || expiresIn <= 0) {
        throw new Error(
            "VITE_SUPABASE_SIGNED_URL_EXPIRES_IN must be a positive integer in seconds.",
        );
    }

    const { data, error } = await createClient()
        .storage
        .from(bucket)
        .createSignedUrl(SUPABASE_IMAGE_PATHS[key], expiresIn);

    if (error || !data?.signedUrl) {
        throw new Error(`Unable to create a signed image URL: ${error?.message ?? "unknown error"}`);
    }

    return data.signedUrl;
}

export async function AboutImageInfoArray(): Promise<ImageInfoModel[]> {
    const portfolioBucket = import.meta.env.VITE_BUCKET_PORTFOLIO;

    return [
        {
            name: "profileImage",
            imageLink: await getImageUrl(portfolioBucket, "profileImage"),
        },
    ];
}
