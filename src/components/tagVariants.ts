export type TagVariant =
  | "three"
  | "websockets"
  | "react"
  | "redis"
  | "gray"
  | "html"
  | "css"
  | "javascript"
  | "node"
  | "next"
  | "kubernetes"
  | "postgresql"
  | "ogl"
  | "glsl"
  | "java"
  | "mysql"
  | "hibernate"
  | "maven"
  | "react-native"
  | "expo"
  | "express"
  | "typescript"
  | "vite";

export const tagLabels = {
  three: "Three.js",
  websockets: "WebSockets",
  react: "React",
  redis: "Redis",
  gray: "Gray",
  html: "HTML",
  css: "CSS",
  javascript: "JavaScript",
  node: "Node.js",
  next: "Next.js",
  kubernetes: "Kubernetes",
  postgresql: "PostgreSQL",
  ogl: "OGL.js",
  glsl: "GLSL",
  java: "Java",
  mysql: "MySQL",
  hibernate: "Hibernate",
  maven: "Maven",
  "react-native": "React Native",
  expo: "Expo",
  express: "Express.js",
  typescript: "TypeScript",
  vite: "Vite",
} as const satisfies Record<TagVariant, string>;
