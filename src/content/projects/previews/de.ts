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
    title: "StreakOn",
    slug: "streakon",
    thumbnail: thumbnailStreakon,
    description: "App für tägliche Gewohnheiten",
  },
  {
    title: "CubeWar",
    slug: "cubewar",
    thumbnail: thumbnailCubeWar,
    description: "Multiplayer-Strategiespiel",
  },
  {
    title: "Quibbo",
    slug: "quibbo",
    thumbnail: thumbnailQuibbo,
    description: "Multiplayer-Gaming-Plattform",
  },
  {
    title: "Sharkie",
    slug: "sharkie",
    thumbnail: thumbnailSharkie,
    description: "2D-Abenteuerspiel",
  },
  /**  {
    title: "WebGL Partikel",
    slug: "particles",
    thumbnail: thumbnailParticles,
    description: "Dynamische 3D Partikel",
  }, */
  {
    title: "Pokédex",
    slug: "pokedex",
    thumbnail: thumbnailPokedex,
    description: "Open-Source Lernprojekt",
  },
 ] as const satisfies ProjectPreview[];
