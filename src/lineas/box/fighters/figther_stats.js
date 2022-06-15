import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../../store/appContext";
import DateTime from 'luxon/src/datetime';

import { Single_Fighter_stats } from "./single_figther_stats";

function Fighter_STATS() {
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
            <div className="title_sport  text-white p-1 fs-5 font_bold">
                <div className="row g-0">
                    <div className="col-lg-10">
                        <div className="row g-0 pt-3">
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
                </div>
            </div>
            <div className="scroll_over mt-3">
                <div className="row g-0 bg_black text-center mw text_dest">
                    <div className="diez_spans"></div>
                    <div className="diez_spans">Name</div>
                    <div className="diez_spans">Nickname</div>
                    <div className="diez_spans">Height</div>
                    <div className="diez_spans">Weight</div>
                    <div className="diez_spans">Category</div>
                    <div className="diez_spans">W</div>
                    <div className="diez_spans">W By</div>
                    <div className="diez_spans">L</div>
                    <div className="diez_spans">L By</div>
                </div>
                {
                    store.stats_box_fighter.map((item, index) => {
                        return (
                            <div key={index} className="col-12 mw">
                                <Single_Fighter_stats
                                    id={index}
                                    name={item.name}
                                    headshot={item.headshot}
                                    nickname={item.nickname}
                                    height={item.height}
                                    weight={item.weight}
                                    category={item.category}
                                    w={item.w}
                                    w_by={item.w_by}
                                    L={item.L}
                                    L_by={item.L_by}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Fighter_STATS;