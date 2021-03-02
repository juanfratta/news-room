import dayjs from "dayjs";

export const categories = [
  { id: 0, name: "home" },
  { id: 1, name: "politica" },
  { id: 2, name: "internacionales" },
  { id: 3, name: "tecnología" },
  { id: 4, name: "espectáculos" },
  { id: 5, name: "deportes" },
  { id: 6, name: "diseño" },
];

export const BASE_URL = "https://api.canillitapp.com";

export const today = dayjs().format("YYYY-MM-DD");
