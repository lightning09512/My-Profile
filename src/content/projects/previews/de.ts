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
    description: "Java Desktop Wohnheim-Verwaltungssystem",
  },
  {
    title: "CellPhoneK",
    slug: "cellphonek",
    thumbnail: thumbnailCellPhoneK,
    description: "Mobile E-Commerce-Plattform",
  },
  {
    title: "CryptoNest Wallet",
    slug: "cryptonest",
    thumbnail: thumbnailCryptoNest,
    description: "Kryptowährungs-Wallet Web-App",
  },

  {
    title: "CubeWar",
    slug: "cubewar",
    thumbnail: thumbnailCubeWar,
    description: "Multiplayer-Strategiespiel",
  },

  {
    title: "Pokédex",
    slug: "pokedex",
    thumbnail: thumbnailPokedex,
    description: "Open-Source Lernprojekt",
  },
 ] as const satisfies ProjectPreview[];
