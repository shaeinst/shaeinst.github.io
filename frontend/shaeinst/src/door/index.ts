// globals
export { default as Navbar } from "./components/global/navbar/Navbar";
export { default as Sidebar } from "./components/global/sidebar/Sidebar";

// screens
export { default as Articles } from "./screens/articles/articles/Articles";
export { default as EduExp } from "./screens/home/edu_exp/EduExp";
export { default as HomePage } from "./screens/home/homepage/HomePage";
export { default as Projects } from "./screens/home/projects/Projects";
export { default as Skills } from "./screens/home/skills/Skills";
export { default as NotFound } from "./screens/notFound/NotFound";

// redux
export { store } from "./utils/redux/store";
export type { RootState } from "./utils/redux/store";
export { updateDimension } from "./utils/redux/dimensionSlice";

// assets
export * from "../assets";
