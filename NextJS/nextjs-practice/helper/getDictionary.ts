
// export const dictionaries = {
//   en: () => import("../dictionaries/en.json").then(m => m.default),
//   ta: () => import("../dictionaries/ta.json").then(m => m.default),
//   hi: () => import("../dictionaries/hi.json").then(m => m.default),
// };

// const getDictionary = (locale : "en" | "ta" | "hi") => {
//     return dictionaries[locale]();
  
// }
// export default getDictionary

const dictionaries = async (locale: string) => { 

    return (await import(`../dictionaries/${locale}.json`)).default;
}

export default dictionaries
