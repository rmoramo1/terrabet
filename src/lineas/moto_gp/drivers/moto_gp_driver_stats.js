import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../../store/appContext";
import DateTime from 'luxon/src/datetime';

import { Single_Driver_Moto_GP_Stats } from "./single_driver_moto_gp_stats";

function Moto_GP_Driver_STATS() {
    const { store } = useContext(Context);
    const dateLux = DateTime.now().day;
    const yearLux = DateTime.now().year;

    let dateShow = [];
    if (dateLux < 10) {
        dateShow.push("0" + dateLux);
    } else {
        dateShow.push(dateLux);
    }

    const [year, setyear] = useState(yearLux);

    let selectYear = [];
    for (let i = 2002; i < 2025; i++) {
        selectYear.push(i);
    }

    return (
        <div>
            <div className=" title_sport bg_orange_dark text-white p-1 fs-5 font_bold">
                <div className="row g-0 ">
                    <div className="col-6 text-end pe-3">Year</div>
                    <div className="col-lg-2 d-flex align-items-center">
                        <select className="form-select" name="week" aria-label="Default select example" defaultValue={year} onChange={e => setyear(e.target.value)} required>
                            {
                                selectYear.map((index) => {
                                    return (
                                        <option key={index} name="promotions" value={index}>{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div>
            </div>
            <div className="scroll_over mt-3">
                <div className="row g-0 bg_black text-center mw text_dest">
                    <div className="quince_spans"></div>
                    <div className="quince_spans">Name</div>
                    <div className="quince_spans">Number Car</div>
                    <div className="quince_spans">Rank</div>
                    <div className="quince_spans">Starts</div>
                    <div className="quince_spans">Poles</div>
                    <div className="quince_spans">Top 5</div>
                    <div className="quince_spans">Top 10</div>
                    <div className="quince_spans">Laps Lead</div>
                    <div className="quince_spans">Pts</div>
                    <div className="quince_spans">AVG Laps</div>
                    <div className="quince_spans">AVG Finish</div>
                </div>
                {
                    store.moto_gp_drivers.map((item, index) => {
                        return (
                            <div key={index} className="mw">
                                <Single_Driver_Moto_GP_Stats
                                    id={index}
                                    name={item.name}
                                    headshot={item.headshot}
                                    rank={item.rank}
                                    number_car={item.number_car}
                                    starts={item.starts}
                                    country={item.country}
                                    poles={item.poles}
                                    top5={item.top5}
                                    top10={item.top10}
                                    laps_lead={item.laps_lead}
                                    pts={item.pts}
                                    AVG_laps={item.AVG_laps}
                                    AVG_finish={item.AVG_finish}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Moto_GP_Driver_STATS;