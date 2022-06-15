import React, { useContext, useState } from "react";
import DateTime from 'luxon/src/datetime'
import { Context } from "../../../store/appContext";
import { Single_Results_MLB } from "./single_resultados_mlb";

export const Resultados_MLB = () => {
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
    <div className="col-12 mt-3 bg_spans" id="sports">
      <div className="text-white p-1 fs-5 font_bold">
        <div className="row g-0 pt-2">
            <div className="row g-0">
              <div className="col-2 text-center">Year</div>
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
      <div className="row g-0">
        {
          store.mlb.map((item, index) => {
            let mes = item.date.slice(5, 7);
            let ano = item.date.slice(0, 4);
            if (mes == R_date && ano == year) {
              let url_aw = "";
              let url_hm = "";
              store.logos_mlb.map((item2) => {
                if (item2.team == item.away) {
                  url_aw = item2.url
                }
              })
              store.logos_mlb.map((item3) => {
                if (item3.team == item.home) {
                  url_hm = item3.url
                }
              })

              return (
                <div className="col-lg-6 p-2 " key={index}>
                  <Single_Results_MLB
                    logo_away={url_aw}
                    logo_home={url_hm}
                    away={item.away}
                    home={item.home}
                    date={item.date}
                    final_score_away={item.final_score_away}
                    final_score_home={item.final_score_home}
                  />
                </div>
              );
            }
          })
        }

      </div>
    </div>
  )
}
