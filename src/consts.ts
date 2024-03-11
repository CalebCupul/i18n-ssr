export const languages: readonly string[] = ["en", "es"];
export const defaultLang = "en";

type Hotel = {
  name: string;
  url: string;
};

export const hotels: readonly Hotel[] = [
  {
    name: "Villa la Valencia",
    url: "villalavalencia",
  },
  {
    name: "Villa la Estancia",
    url: "villalaestancia",
  },
  {
    name: "Villa del Palmar",
    url: "villadelpalmar",
  },
];
