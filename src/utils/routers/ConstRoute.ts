export const ROUTERS = {
    // for Authentication
    AUTH: {
        AUTH: { path: "/authentication", label: `authentication` },
        LOGIN: { path: "/login", label: `login` },
    },

    // for Home
    HOME: {
        TIMELINE: { path: "/", label: `Home` },
    },
} as const
