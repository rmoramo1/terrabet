import React, { useContext, useState } from "react";
import { Lineas_Nfl } from '../lineas_nfl/lineas_nfl';
import DateTime from '../../../../node_modules/luxon/src/datetime.js'
import { Context } from "../../../store/appContext";

export const Juego_Nfl = () => {
    const { store } = useContext(Context);
    const monthLux = DateTime.now().month;
    const yearLux = DateTime.now().year;

    let monthShow = [];
    if (monthLux < 10) {
        monthShow.push("0" + monthLux);
    } else {
        monthShow.push(monthLux);
    }

    const [year, setyear] = useState(yearLux);
    const [month, setmonth] = useState(monthShow);
    let R_date = month;
    let selectYear = [];
    for (let i = 2002; i < 2025; i++) {
        selectYear.push(i);
    }

    let selectMonth = [];
    for (let i = 1; i < 13; i++) {
        if (i < 10) {
            selectMonth.push("0" + i);
        } else {
            selectMonth.push(i);
        }
    }

    return (
        <div className="col-12 bg_spans mt-3" id="sports">
            <div className="title_sport text-white p-1 fs-5 font_bold">
                <div className="row g-0 pt-2">
                    <div className="row g-0">
                        <div className="col-2 text-center">Year</div>
                        <div className="col-lg-2 d-flex align-items-center">
                            <select className="form-select" name="Day" aria-label="Default select example" defaultValue={year} onChange={e => setyear(e.target.value)} required>
                                {
                                    selectYear.map((index) => {
                                        return (
                                            <option key={index} name="promotions" value={index}>{index}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className="col-2 text-center">Month</div>
                        <div className="col-lg-2 d-flex align-items-center">
                            <select className="form-select" name="month" aria-label="Default select example" defaultValue={month} onChange={e => setmonth(e.target.value)} required>
                                {
                                    selectMonth.map((index) => {
                                        return (
                                            <option key={index} name="month" value={index}>{index}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg_black" >
                {store.nfl.map((item, index) => {
                    let mes = item.date.slice(5, 7);
                    let ano = item.date.slice(0, 4);
                    if (mes == R_date && ano == year) {
                        return (
                            <div key={index}>
                                <Lineas_Nfl
                                    away={item.away}
                                    home={item.home}
                                    hour={item.hour}
                                    status={item.status}
                                    date={item.date}
                                    spread_away={item.spread_away}
                                    spread_home={item.spread_home}
                                    juice_spread_away={item.juice_spread_away}
                                    juice_spread_home={item.juice_spread_home}
                                    moneyLineAway={item.moneyLineAway}
                                    moneyLineHome={item.moneyLineHome}
                                    total={item.total}
                                    juice_total_over={item.juice_total_over}
                                    juice_total_under={item.juice_total_under}
                                    tt_away={item.tt_away}
                                    tt_home={item.tt_home}
                                    juice_over_away={item.juice_over_away}
                                    juice_under_away={item.juice_under_away}
                                    juice_over_home={item.juice_over_home}
                                    juice_under_home={item.juice_under_home}
                                    final_score_away={item.final_score_away}
                                    final_score_home={item.final_score_home}
                                />
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    )
}