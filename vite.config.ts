import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tsconfigPaths from "vite-tsconfig-paths"
import styleX from "vite-plugin-stylex"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react({
            // watermelonDB
            // https://watermelondb.dev/docs/Installation#web-setup
            babel: {
                plugins: [
                    ["@babel/plugin-proposal-decorators", { legacy: true }],
                    ["@babel/plugin-proposal-class-properties", { loose: true }],
                    ["@babel/plugin-transform-runtime", { helpers: true, regenerator: true }],
                ],
            },
        }),

        // Handle TypeScript path aliases
        tsconfigPaths(),

        // !WARN: using unofficial plugin untill official styleX plugin for vite get released
        // https://github.com/HorusGoul/vite-plugin-stylex
        styleX({
            // https://stylexjs.com/docs/api/configuration/babel-plugin/#unstable_moduleresolution
            unstable_moduleResolution: {
                // The module system to be used.
                // Use this value when using `ESModules`.
                type: "commonJS",
                // The absolute path to the root directory of your project.
                rootDir: "./",
                // Override `.stylex.js` with your own extension.
                themeFileExtension: ".stylex.js",
            },
        }),
    ],
})
