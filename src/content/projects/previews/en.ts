import thumbnailCubeWar from "../../../assets/thumbnails/cubewar.webp";
import thumbnailQuibbo from "../../../assets/thumbnails/quibbo.webp";
//import thumbnailParticles from "../../../assets/thumbnails/particles.webp";
import thumbnailPokedex from "../../../assets/thumbnails/pokedex.webp";
import thumbnailSharkie from "../../../assets/thumbnails/sharkie.webp";
import thumbnailStreakon from "../../../assets/thumbnails/streakon.webp";
import thumbnailDormitory from "../../../assets/thumbnails/dormitory.png";
import thumbnailCellPhoneK from "../../../assets/thumbnails/cellphonek.png";
import thumbnailCryptoNest from "../../../assets/thumbnails/cryptonest.png";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "Dormitory Management System",
    slug: "dormitory",
    thumbnail: thumbnailDormitory,
    description: "Java Desktop Dormitory Management System",
  },
  {
    title: "CellPhoneK",
    slug: "cellphonek",
    thumbnail: thumbnailCellPhoneK,
    description: "Mobile E-Commerce Platform",
  },
  {
    title: "CryptoNest Wallet",
    slug: "cryptonest",
    thumbnail: thumbnailCryptoNest,
    description: "Cryptocurrency Wallet Web App",
  },
  {
    title: "StreakOn",
    slug: "streakon",
    thumbnail: thumbnailStreakon,
    description: "Social habit tracking app",
  },
  {
    title: "CubeWar",
    slug: "cubewar",
    thumbnail: thumbnailCubeWar,
    description: "Multiplayer strategy game",
  },
  {
    title: "Quibbo",
    slug: "quibbo",
    thumbnail: thumbnailQuibbo,
    description: "Multiplayer gaming platform",
  },
  {
    title: "Sharkie",
    slug: "sharkie",
    thumbnail: thumbnailSharkie,
    description: "2D adventure game",
  },
  /**  {
    title: "WebGL Particles",
    slug: "particles",
    thumbnail: thumbnailParticles,
    description: "Dynamic 3D particles",
  }, */
  {
    title: "Pokédex",
    slug: "pokedex",
    thumbnail: thumbnailPokedex,
    description: "Open-source learning project",
  },
] as const satisfies ProjectPreview[];
