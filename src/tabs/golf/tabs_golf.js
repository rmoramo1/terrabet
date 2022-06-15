import React, { useState } from "react";

import Fighter_STATS from "../../lineas/mma/fighters/figther_stats.js";

import { GOLF_Event } from "../../lineas/golf/golf_event.js";

export const Tabs_Golf = () => {
    const [tipe, setTipe] = useState("Games")
    if (tipe === "Games") {
        var Games = "d-block";
        var Resultados = "d-none";
        var Drivers = "d-none";
    } if (tipe === "Drivers") {
        Drivers = "d-block";
        Resultados = "d-none";
        Games = "d-none";
    }  
    return (
        <div className="container-fluid p-0">
            <div className="row g-0 bg_spans">
                <div className="col-3 display-4 fw-bold bg_title text-center shadow_title">GOLF <i className="fa-solid fa-golf-ball-tee"></i>
                </div>
                <div className="col-9 d-flex justify-content-center align-items-center">
                    <div className="row g-0 w-100 text-center">
                        <div className="col-4">
                            <button className="btn btn_login" onClick={e => setTipe("Games")} value={Games}>Events</button>
                        </div>
                        <div className="col-4">
                            <button className="btn btn_login" onClick={e => setTipe("Drivers")} value={Drivers}>Figthers</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="juego_nfl" className={Games}>
                <GOLF_Event/>
            </div>

            <div id="stats_nfl" className={Drivers}>
                <Fighter_STATS/>
            </div>
        </div>
    )
}
