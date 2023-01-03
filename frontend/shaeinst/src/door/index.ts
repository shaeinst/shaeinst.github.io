// sidebar
export { default as Sidebar } from "./components/global/sidebar/Sidebar";

// navbar
export { default as NavbarPrimary } from "./components/global/navbar/primarynav/NavbarPrimary";
export { default as NavbarSecondary } from "./components/global/navbar/secondarynav/NavbarSecondary";

// screens
export { default as Articles } from "./screens/articles/articles/Articles";
export { default as EduExp } from "./screens/home/edu_exp/EduExp";
export { default as HomePage } from "./screens/home/homepage/HomePage";
export { default as Projects } from "./screens/home/projects/Projects";
export { default as Skills } from "./screens/home/skills/Skills";
export { default as NotFound } from "./screens/notFound/NotFound";

// components
export { default as CardProject } from "./components/cards/cardProject/CardProject";

// redux
export { store } from "./utils/redux/store";
export type { RootState } from "./utils/redux/store";
export { updateDimension } from "./utils/redux/dimensionSlice";
export { updateThemeMode } from "./utils/redux/themeSlice";

// assets
export * from "../assets";
