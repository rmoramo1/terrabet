import React from "react";
import PropTypes from "prop-types";

export const Single_Driver_Moto_GP_Stats = props => {
    return (
        <div className="col-12 g-0 bg_black">
            <div className="row g-0 text-center odds-list bb1px">
                <div className="quince_spans lines"><img src={props.headshot} alt="headshot"></img> </div>
                <div className="quince_spans lines d-flex justify-content-center align-items-center">{props.name}</div>
                <div className="quince_spans lines d-flex justify-content-center align-items-center">{props.number_car}</div>
                <div className="quince_spans lines d-flex justify-content-center align-items-center">{props.rank}</div>
                <div className="quince_spans lines d-flex justify-content-center align-items-center">{props.starts}</div>
                <div className="quince_spans lines d-flex justify-content-center align-items-center">{props.poles}</div>
                <div className="quince_spans lines d-flex justify-content-center align-items-center">{props.top5}</div>
                <div className="quince_spans lines d-flex justify-content-center align-items-center">{props.top10}</div>
                <div className="quince_spans lines d-flex justify-content-center align-items-center">{props.laps_lead}</div>
                <div className="quince_spans lines d-flex justify-content-center align-items-center">{props.pts}</div>
                <div className="quince_spans lines d-flex justify-content-center align-items-center">{props.AVG_laps}</div>
                <div className="quince_spans lines d-flex justify-content-center align-items-center">{props.AVG_finish}</div>
            </div>
        </div>
    )
};
Single_Driver_Moto_GP_Stats.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    number_car: PropTypes.string,
    headshot: PropTypes.string,
    rank: PropTypes.string,
    starts: PropTypes.string,
    poles: PropTypes.string,
    top5: PropTypes.string,
    top10: PropTypes.string,
    laps_lead: PropTypes.string,
    pts: PropTypes.string,
    AVG_laps: PropTypes.string,
    AVG_finish: PropTypes.string
};