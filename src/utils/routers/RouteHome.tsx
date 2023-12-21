import { Route, Routes } from "react-router-dom"

import { NotFound404Page, TimelinePage } from "$exporter/page"
import { ROUTERS } from "./ConstRoute"

const { HOME } = ROUTERS

function RouteHome() {
    return (
        <Routes>
            <Route path={HOME.TIMELINE.path} element={<TimelinePage />} />

            {/* if no url matchs (404 not found) */}
            <Route path="*" element={<NotFound404Page />} />
        </Routes>
    )
}

export default RouteHome
