import React, { useState } from "react";

import { Moto_GP_for_Display } from "../../lineas/moto_gp/race/moto_gp_race_for_display.js";
import Moto_GP_Driver_STATS from "../../lineas/moto_gp/drivers/moto_gp_driver_stats.js";

export const Tabs_Moto_GP = () => {
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
                <div className="col-3 display-4 fw-bold bg_title text-center shadow_title">MOTO GP <i className="fa-solid fa-motorcycle"></i>
                </div>
                <div className="col-9 d-flex justify-content-center align-items-center">
                    <div className="row g-0 w-100 text-center">
                        <div className="col-4">
                            <button className="btn btn_login" onClick={e => setTipe("Games")} value={Games}>Races</button>
                        </div>
                        <div className="col-4">
                            <button className="btn btn_login" onClick={e => setTipe("Drivers")} value={Drivers}>Drivers</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="juego_nfl" className={Games}>
                <Moto_GP_for_Display/>
            </div>

            <div id="stats_nfl" className={Drivers}>
                <Moto_GP_Driver_STATS/>
            </div>
        </div>
    )
}
