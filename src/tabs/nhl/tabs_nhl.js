import React, { useState } from "react";

import { Juego_NHL } from "../../lineas/nhl/juego/juego_nhl.js";
import { Resultados_NHL } from "../../lineas/nhl/resultados/resultados_nhl.js";
import { Stats_NHL } from "../../lineas/nhl/team_stats/stats_nhl.js";

export const Tabs_NHL = () => {
    const [tipe, setTipe] = useState("Games")
    if (tipe === "Games") {
        var Games = "d-block";
        var Resultados = "d-none";
        var Stats = "d-none";

    } if (tipe === "Resultados") {
        Resultados = "d-block";
        Games = "d-none";
        Stats = "d-none";
    } if (tipe === "Stats") {
        Stats = "d-block";
        Resultados = "d-none";
        Games = "d-none";
    }

    return (
        <div className="container-fluid p-0">
            <div className="row g-0 bg_spans">
                <div className="col-3 display-4 fw-bold bg_title text-center shadow_title">NHL <i className="fa-solid fa-hockey-puck"></i>
                </div>
                <div className="col-9 d-flex justify-content-center align-items-center">
                    <div className="row g-0 w-100 text-center">
                        <div className="col-4">
                            <button className="btn btn_login" onClick={e => setTipe("Games")} value={Games}>Games</button>
                        </div>
                        <div className="col-4">
                            <button className="btn btn_login" onClick={e => setTipe("Resultados")} value={Resultados}>Results</button>
                        </div>
                        <div className="col-4">
                            <button className="btn btn_login" onClick={e => setTipe("Stats")} value={Stats}>Ranking</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="juego_nfl" className={Games}>
                <Juego_NHL />
            </div>
            <div id="resultados_nfl" className={Resultados}>
                <Resultados_NHL />
            </div>
            <div id="stats_nfl" className={Stats}>
                <Stats_NHL />
            </div>
        </div>
    )
}
