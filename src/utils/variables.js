import dayjs from "dayjs";

export const categories = [
  { id: 0, name: "Home" },
  { id: 1, name: "Política" },
  { id: 2, name: "Internacionales" },
  { id: 3, name: "Tecnología" },
  { id: 4, name: "Espectáculos" },
  { id: 5, name: "Deportes" },
  { id: 6, name: "Diseño" },
];

export const BASE_URL = "https://api.canillitapp.com";

export const today = dayjs().format("YYYY-MM-DD");
