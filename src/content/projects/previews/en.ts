import thumbnailCubeWar from "../../../assets/thumbnails/cubewar.webp";
import thumbnailPokedex from "../../../assets/thumbnails/pokedex.webp";
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
    title: "CubeWar",
    slug: "cubewar",
    thumbnail: thumbnailCubeWar,
    description: "Multiplayer strategy game",
  },

  {
    title: "Pokédex",
    slug: "pokedex",
    thumbnail: thumbnailPokedex,
    description: "Open-source learning project",
  },
] as const satisfies ProjectPreview[];
