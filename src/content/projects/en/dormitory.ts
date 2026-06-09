import thumbnail from "../../../assets/thumbnails/dormitory.png";
import type { ProjectContent } from "../../types";

export default {
  title: "Dormitory Management System",
  theme: "light",
  tags: ["java", "mysql", "hibernate", "maven"],
  videoBorder: false,
  source: "https://github.com/lightning09512/Dormitory-Management-System",
  description:
    "A 3-tier Java desktop application built for student dormitory management. Features 5 comprehensive management modules covering students, room occupancy, rental contracts, billing, and system authentication. Designed with role-based access control, SLF4J structured logging, database optimization via HikariCP, and a modern macOS-inspired UI using FlatLaf and MigLayout.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: thumbnail,
        alt: "Dormitory Management System Dashboard",
        caption: "Dormitory Management System Dashboard",
      },
    },
  ],
} as const satisfies ProjectContent;
