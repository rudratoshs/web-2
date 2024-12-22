import { STRAPI_URL } from "@/lib/config/strapi";

export function getAvatarUrl(avatarUrl?: string): string {
  return avatarUrl ? `${STRAPI_URL}${avatarUrl}` : "/default-avatar.jpg";
}