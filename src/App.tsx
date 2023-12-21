import { useState } from "react"
import * as stylex from "@stylexjs/stylex"

import {  zustandStore } from "$exporter"
import { wdbLocalStorage } from "$exporter/persist"
import { HomeInitialPage } from "$exporter/page"
import { ThemeType } from "./types/StorageType"
import { COLORS } from "./renders/styles/colors.stylex"

const styles = stylex.create({
    base: {
        fontSize: 16,
        lineHeight: 1.5,
        color: "grey",
    },
    highlighted: {
        display: "flex",
        flexDirection: "column",
        gap: 10,
        width: 200,
        color: COLORS.success,
    },
})

export default function App() {
    //
    const [count, setCount] = useState(0)
    const { get, set, remove, KEYS } = wdbLocalStorage

    const { theme } = zustandStore()

    console.log(theme)

    const handleAdd = () => {
        console.log("Set")
        set<ThemeType>({ key: KEYS.THEME, value: "dark" })
            .then((val) => {
                console.log("status: ", val)
            })
            .catch((e) => {
                console.log("SET error: ", e)
            })
    }
    const handleRemove = () => {
        console.log("removed")
        remove(KEYS.THEME)
            .then((val) => {
                console.log(val)
            })
            .catch((e) => {
                console.log("remove error: ", e)
            })
    }
    const handleGet = () => {
        console.log("get")
        get(KEYS.THEME)
            .then((val) => {
                console.log(val)
            })
            .catch((e) => {
                console.log("get error: ", e)
            })
    }

    // get(KEYS)

    return (
        <div {...stylex.props(styles.base, styles.highlighted)}>
            Hello world
            <button onClick={handleGet}>Get</button>
            <button onClick={handleAdd}>+Add</button>
            <button onClick={handleRemove}>-Remove</button>
            <HomeInitialPage />
        </div>
    )
}
