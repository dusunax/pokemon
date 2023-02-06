import { languageMapping } from "@/models/language";

export type resNames = {
  language: { name: string; url: string };
  name: string;
};

const mappingNamesToSingleObj = (resNames: resNames[]) => {
  const resultObj = new Object();

  resNames.map((list: resNames) => {
    const key = list.language.name;
    const value = list.name;

    Object.assign(resultObj, { [key]: value });
  });

  return resultObj;
};

const mappingLanguageKey = (mapObj: any) => {
  const resultObj = new Object();

  for (const map in languageMapping) {
    const key = languageMapping[map as keyof typeof languageMapping];

    Object.assign(resultObj, { [key]: mapObj[map] });
  }

  return resultObj;
};

export { mappingNamesToSingleObj, mappingLanguageKey };
