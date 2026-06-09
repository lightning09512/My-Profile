export const social = [
  { url: "https://mail.google.com/mail/?view=cm&fs=1&to=ng.minhquockhanh@gmail.com", name: "mail" },
  { url: "https://github.com/lightning09512", name: "github" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" | "x" }[];
