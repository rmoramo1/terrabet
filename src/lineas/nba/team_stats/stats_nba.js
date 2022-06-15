import React, { useContext, useState } from "react";

import { Context } from "../../../store/appContext";

import { Stats_Nba } from "./Nba_team_st";

export const Stats_NBA = () => {
    const { store } = useContext(Context);
    const [year, setyear] = useState("2022");

    let selectYear = [];
    for (let i = 2002; i < 2025; i++) {
        selectYear.push(i);
    }
    let teamFilter = store.stats_nba_team;
    var total_points = teamFilter;
    total_points.sort(function (a, b) {
        return b.w - a.w;
    });

    return (
        <div className="col-12 mt-3 bg_spans" id="sports">
            <div className="title_sport text-white fs-2 font_bold pt-2">
                <div className="row g-0">
                    <div className="col-3 text-center">SEASON</div>
                    <div className="col-lg-3 d-flex align-items-center">
                        <select className="form-select" name="year" aria-label="Default select example" defaultValue={year} onChange={e => setyear(e.target.value)} required>
                            {
                                selectYear.map((index) => {
                                    return (
                                        <option key={index} name="year" value={index}>{index}</option>
                                    )
                                })
                            }
                        </select>
                    </div>

                </div>
            </div>
            <div className="scroll_over mt-3">
                <div className="row g-0 bg_black text_dest text-center mw">
                    <div className="quince_spans d-flex justify-content-center align-items-center"> </div>
                    <div className="quince_spans d-flex justify-content-center align-items-center">Team</div>
                    <div className="quince_spans d-flex justify-content-center align-items-center">W</div>
                    <div className="quince_spans d-flex justify-content-center align-items-center">L</div>
                    <div className="quince_spans d-flex justify-content-center align-items-center">PTC</div>
                    <div className="quince_spans d-flex justify-content-center align-items-center">GB</div>
                    <div className="quince_spans d-flex justify-content-center align-items-center">Home</div>
                    <div className="quince_spans d-flex justify-content-center align-items-center">Away</div>
                    <div className="quince_spans d-flex justify-content-center align-items-center">Div</div>
                    <div className="quince_spans d-flex justify-content-center align-items-center">Conf</div>
                    <div className="quince_spans d-flex justify-content-center align-items-center">PPG</div>
                    <div className="quince_spans d-flex justify-content-center align-items-center">Opp Ppg</div>
                    <div className="quince_spans d-flex justify-content-center align-items-center">Diff</div>
                    <div className="quince_spans d-flex justify-content-center align-items-center">Strk</div>
                    <div className="quince_spans d-flex justify-content-center align-items-center bg_lines">L 10</div>
                </div>
                {total_points.map((item, index) => {
                    if (item.season == year) {
                        return (
                            <div key={index} className="mw">
                                <Stats_Nba
                                    team={item.team}
                                    w={item.w}
                                    L={item.L}
                                    ptc={item.ptc}
                                    gb={item.gb}
                                    home={item.home}
                                    away={item.away}
                                    div={item.div}
                                    conf={item.conf}
                                    ppg={item.ppg}
                                    opp_ppg={item.opp_ppg}
                                    diff={item.diff}
                                    strk={item.strk}
                                    l10={item.l10}
                                />
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    )
}
