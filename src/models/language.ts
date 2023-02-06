type LanguageKeyType = "ko" | "en" | "jp" | "cn" | "fr";

type LanguageMappingType = {
  ko: "ko";
  en: "en";
  "ja-Hrkt": "jp";
  "zh-Hant": "cn";
  fr: "fr";
};

export const languageMapping: LanguageMappingType = {
  ko: "ko",
  en: "en",
  "ja-Hrkt": "jp",
  "zh-Hant": "cn",
  fr: "fr",
};

export type languagesDTO = {
  LanguageKeyType: string;
};

export const languageKeys: LanguageKeyType[] = Object.values(languageMapping);
