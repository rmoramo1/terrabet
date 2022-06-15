import React, { useContext, useState } from "react";
import { useParams } from 'react-router-dom';
import { Context } from "../../../store/appContext";

export const Moto_GP_Race = () => {
    const params = useParams();
    const { store } = useContext(Context);
    return (
        <div className="container-fluid border_top ">
            <div className="fs-5 text-white">
                <div className="row g-0">
                    <div className="col-lg-6 text-center fs-1">
                        <span className='fw-bold'> Event:</span> {store.moto_gp[params.theid] && store.moto_gp[params.theid].event} <br />
                        <span className='fw-bold'> Date:</span>{store.moto_gp[params.theid] && store.moto_gp[params.theid].date} {store.moto_gp[params.theid] && store.moto_gp[params.theid].hour}
                    </div>
                    <div className="col-lg-6 text-center fs-1">
                        <span className='fw-bold'> Status:</span> {store.moto_gp[params.theid] && store.moto_gp[params.theid].status} <br />
                        <span className='fw-bold'> Location:</span>{store.moto_gp[params.theid] && store.moto_gp[params.theid].location}
                    </div>
                </div>
            </div>
            <div className="scroll_over bg_black text-white">
                <div className="row g-0 text_dest text-center bg_title fs-3 mw">
                    <div className="col-3 bg_lines">Rotation #</div>
                    <div className="col-3 bg_lines">Driver</div>
                    <div className="col-3 bg_lines">Line</div>
                    <div className="col-3 bg_lines">Winner</div>
                </div>
                {/* primer */}
                <div className="row g-0 text-center mw">
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_1}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_1}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_1}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].winner_1}</div>
                </div>
                <div className="row g-0 text-center mw bb2px">
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_2}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_2}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_2}</div>
                </div>
                {/* primer */}
                {/* segunda */}
                <div className="row g-0 text-center mw">
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_3}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_3}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_3}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].winner_2}</div>
                </div>
                <div className="row g-0 text-center mw bb2px">
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_4}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_4}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_4}</div>
                </div>
                {/* segunda */}
                {/* tercera */}
                <div className="row g-0 text-center mw">
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_5}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_5}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_5}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].winner_3}</div>
                </div>
                <div className="row g-0 text-center mw bb2px">
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_6}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_6}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_6}</div>
                </div>
                {/* tercera */}
                {/* cuarta */}
                <div className="row g-0 text-center mw">
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_7}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_7}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_7}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].winner_4}</div>
                </div>
                <div className="row g-0 text-center mw bb2px">
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_8}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_8}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_8}</div>
                </div>
                {/* cuarta */}
                {/* cuarta */}
                <div className="row g-0 text-center mw">
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_9}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_9}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_9}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].winner_5}</div>
                </div>
                <div className="row g-0 text-center mw bb2px">
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_10}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_10}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_10}</div>
                </div>
                {/* cuarta */}
                {/* cuarta */}
                <div className="row g-0 text-center mw">
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_11}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_11}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_11}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].winner_6}</div>
                </div>
                <div className="row g-0 text-center mw bb2px">
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_12}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_12}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_12}</div>
                </div>
                {/* cuarta */}
                {/* sexta */}
                <div className="row g-0 text-center mw">
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_13}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_13}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_13}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].winner_7}</div>
                </div>
                <div className="row g-0 text-center mw bb2px">
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_14}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_14}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_14}</div>
                </div>
                {/* sexta */}
                {/* septima */}
                <div className="row g-0 text-center mw">
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_15}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_15}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_15}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].winner_8}</div>
                </div>
                <div className="row g-0 text-center mw bb2px">
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_16}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_16}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_16}</div>
                </div>
                {/* septima */}
                {/* octaba */}
                <div className="row g-0 text-center mw">
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_17}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_17}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_17}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].winner_9}</div>
                </div>
                <div className="row g-0 text-center mw bb2px">
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_18}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_18}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_18}</div>
                </div>
                {/* octaba */}
                {/* novena */}
                <div className="row g-0 text-center mw">
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_19}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_19}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_19}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].winner_10}</div>
                </div>
                <div className="row g-0 text-center mw bb2px">
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_20}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_20}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_20}</div>
                </div>
                {/* novena */}
                {/* diez */}
                <div className="row g-0 text-center mw">
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_21}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_21}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_21}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].winner_11}</div>
                </div>
                <div className="row g-0 text-center mw bb2px">
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_22}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_22}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_22}</div>
                </div>
                {/* diez */}
                {/* onze */}
                <div className="row g-0 text-center mw">
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_23}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_23}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_23}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].winner_12}</div>
                </div>
                <div className="row g-0 text-center mw bb2px">
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_24}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_24}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_24}</div>
                </div>
                {/* onze */}
                {/* doce */}
                <div className="row g-0 text-center mw">
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_25}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_25}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_25}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].winner_13}</div>
                </div>
                <div className="row g-0 text-center mw bb2px">
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_26}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_26}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_26}</div>
                </div>
                {/* doce */}
                {/* trece */}
                <div className="row g-0 text-center mw">
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_27}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_27}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_27}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].winner_14}</div>
                </div>
                <div className="row g-0 text-center mw bb2px">
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_28}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_28}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_28}</div>
                </div>
                {/* trece */}
                {/* catorce */}
                <div className="row g-0 text-center mw">
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_29}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_29}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_29}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].winner_15}</div>
                </div>
                <div className="row g-0 text-center mw bb2px">
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_30}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_30}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_30}</div>
                </div>
                {/* catorce */}
                {/* quince */}
                <div className="row g-0 text-center mw">
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_31}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_31}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_31}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].winner_16}</div>
                </div>
                <div className="row g-0 text-center mw bb2px">
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_32}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_32}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_32}</div>
                </div>
                {/* quince */}
                {/* dieciseis */}
                <div className="row g-0 text-center mw">
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_33}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_33}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_33}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].winner_17}</div>
                </div>
                <div className="row g-0 text-center mw bb2px">
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_34}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_34}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_34}</div>
                </div>
                {/* dieciseis */}
                {/* dieciete */}
                <div className="row g-0 text-center mw">
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_35}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_35}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_35}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].winner_18}</div>
                </div>
                <div className="row g-0 text-center mw bb2px">
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_36}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_36}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_36}</div>
                </div>
                {/* dieciete */}
                {/* dieciocho */}
                <div className="row g-0 text-center mw">
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_37}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_37}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_37}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].winner_19}</div>
                </div>
                <div className="row g-0 text-center mw bb2px">
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_38}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_38}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_38}</div>
                </div>
                {/* dieciocho */}
                {/* diesinueve */}
                <div className="row g-0 text-center mw">
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_39}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_39}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_39}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].winner_20}</div>
                </div>
                <div className="row g-0 text-center mw bb2px">
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_40}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_40}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_40}</div>
                </div>
                {/* diesinueve */}
                {/* veinte */}
                <div className="row g-0 text-center mw">
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_41}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_41}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_41}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].winner_21}</div>
                </div>
                <div className="row g-0 text-center mw bb2px">
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_42}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_42}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_42}</div>
                </div>
                {/* veinte */}
                {/* vaintiuno */}
                <div className="row g-0 text-center mw">
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_43}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_43}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_43}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].winner_22}</div>
                </div>
                <div className="row g-0 text-center mw bb2px">
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_44}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_44}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_44}</div>
                </div>
                {/* vaintiuno */}
                {/* veintidos */}
                <div className="row g-0 text-center mw">
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_45}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_45}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_45}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].winner_23}</div>
                </div>
                <div className="row g-0 text-center mw bb2px">
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_46}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_46}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_46}</div>
                </div>
                {/* veintidos */}
                {/* veintitres */}
                <div className="row g-0 text-center mw">
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_47}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_47}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_47}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].winner_24}</div>
                </div>
                <div className="row g-0 text-center mw bb2px">
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_48}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_48}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_48}</div>
                </div>
                {/* veintitres */}
                {/* veinticuatro */}
                <div className="row g-0 text-center mw">
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_49}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_49}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_49}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].winner_25}</div>
                </div>
                <div className="row g-0 text-center mw bb2px">
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].rotation_number_50}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].competitor_50}</div>
                    <div className="col-3 bb1px lines">{store.moto_gp[params.theid] && store.moto_gp[params.theid].money_line_50}</div>
                </div>
                {/* veinticuatro */}
            </div>
        </div>
    )
}
