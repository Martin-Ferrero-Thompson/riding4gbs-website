export const SUPPORTED_LANGUAGES = ["en", "es", "eu", "fr"] as const;
export type Language = (typeof SUPPORTED_LANGUAGES)[number];

const LOCAL_STORAGE_KEY = "r4gbs:preferredLanguage";
const COOKIE_NAME = "r4gbs_pref_lang";

export const DEFAULT_LANGUAGE: Language = "en";

export function isSupportedLanguage(value: unknown): value is Language {
  return typeof value === "string" && (SUPPORTED_LANGUAGES as readonly string[]).includes(value);
}

const readFromCookie = (): string | null => {
  if (typeof document === "undefined") return null;
  const cookies = document.cookie.split(";").map((chunk) => chunk.trim());
  for (const cookie of cookies) {
    if (cookie.startsWith(`${COOKIE_NAME}=`)) {
      return decodeURIComponent(cookie.split("=")[1] ?? "");
    }
  }
  return null;
};

const writeCookie = (value: string) => {
  if (typeof document === "undefined") return;
  const expires = new Date();
  expires.setFullYear(expires.getFullYear() + 1);
  document.cookie = `${COOKIE_NAME}=${encodeURIComponent(value)}; path=/; expires=${expires.toUTCString()}; SameSite=Lax`;
};

export async function readStoredLanguage(defaultLang: Language = DEFAULT_LANGUAGE): Promise<Language> {
  try {
    if (typeof window !== "undefined") {
      const localValue = window.localStorage.getItem(LOCAL_STORAGE_KEY);
      if (isSupportedLanguage(localValue)) {
        return localValue;
      }
    }

    const cookieValue = readFromCookie();
    if (isSupportedLanguage(cookieValue)) {
      return cookieValue;
    }
  } catch (error) {
    if (import.meta.env.DEV) {
      console.warn("[language] Unable to read stored language", error);
    }
  }
  return defaultLang;
}

export async function persistLanguage(lang: Language): Promise<void> {
  try {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(LOCAL_STORAGE_KEY, lang);
    }
    writeCookie(lang);
  } catch (error) {
    if (import.meta.env.DEV) {
      console.warn("[language] Unable to persist language", error);
    }
  }
}
