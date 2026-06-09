export const social = [
  { url: "mailto:ng.minhquockhanh@gmail.com", name: "mail" },
  { url: "https://github.com/lightning09512", name: "github" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" | "x" }[];
