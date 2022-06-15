import React, { useContext, useState } from "react";
import { Context } from "../../../store/appContext";
import { MLB_Team_Stats } from "./Mlb_team_st";

export const Stats_mlb = () => {
    const { store } = useContext(Context);
    const [team, setTeam] = useState("Arizona Diamondbacks");
    const [year, setyear] = useState("2022");

    let selectYear = [];
    for (let i = 2002; i < 2025; i++) {
        selectYear.push(i);
    }

    let teamFilter = store.stats_mlb_team;
	var total_points = teamFilter;
	total_points.sort(function(a,b) {
		return b.w - a.w;
	});

    return (
        <div className="col-12" id="sports">
            <div className="text-white ps-lg-5 fs-2 font_bold">
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
                    <div className="quince_spans"></div>
                    <div className="quince_spans">Team</div>
                    <div className="quince_spans">W</div>
                    <div className="quince_spans">L</div>
                    <div className="quince_spans">PCT</div>
                    <div className="quince_spans">GB</div>
                    <div className="quince_spans">Home</div>
                    <div className="quince_spans">Away</div>
                    <div className="quince_spans">Rs</div>
                    <div className="quince_spans">Ra</div>
                    <div className="quince_spans">Diff</div>
                    <div className="quince_spans">Strk</div>
                    <div className="quince_spans">L10</div>
                </div>
                    {teamFilter.map((item, index) => {
                        if (item.season == year) {
                            return (
                                <div key={index}>
                                    <MLB_Team_Stats
                                        team={item.team}
                                        w={item.w}
                                        L={item.L}
                                        pct={item.pct}
                                        gb={item.gb}
                                        home={item.home}
                                        away={item.away}
                                        rs={item.rs}
                                        ra={item.ra}
                                        diff={item.diff}
                                        strk={item.strk}
                                        L10={item.L10}
                                    />
                                </div>
                            );
                        }

                    })}
              
            </div>
        </div>
    )
}