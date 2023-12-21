import { create } from "zustand"

import { ThemeType } from "$exporter/type"
import { wdbLocalStorage } from "$exporter/persist"

const { get, KEYS } = wdbLocalStorage

const theme = await get<ThemeType>(KEYS.THEME)

interface StoreInterface {
    theme: ThemeType
    //
    setTheme: (prop: ThemeType) => void
}

export const store = create<StoreInterface>((set) => ({
    /**
     * Initial Values
     */
    theme: theme,

    /**
     * Actions
     */
    setTheme: (prop: ThemeType) => {
        set((state) => ({ theme: prop }))
    },
}))
