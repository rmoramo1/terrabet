import React from "react";
import PropTypes from "prop-types";

export const Single_Fighter_stats = props => {
    return (
        <div className="col-12 p-2 bg_black">
            <div className="row g-0 text-center bb1px odds-list">
                <div className="diez_spans"><img src={props.headshot} alt="Headshot"></img></div>
                <div className="diez_spans d-flex justify-content-start align-items-center">{props.name}</div>
                <div className="diez_spans d-flex justify-content-center align-items-center">{props.nickname}</div>
                <div className="diez_spans d-flex justify-content-center align-items-center">{props.height}</div>
                <div className="diez_spans d-flex justify-content-center align-items-center">{props.weight}</div>
                <div className="diez_spans d-flex justify-content-center align-items-center">{props.category}</div>
                <div className="diez_spans d-flex justify-content-center align-items-center">{props.w}</div>
                <div className="diez_spans d-flex justify-content-center align-items-center">{props.w_by}</div>
                <div className="diez_spans d-flex justify-content-center align-items-center">{props.L}</div>
                <div className="diez_spans d-flex justify-content-center align-items-center">{props.L_by}</div>
            </div>
        </div>
    )
};
Single_Fighter_stats.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    headshot: PropTypes.string,
    nickname: PropTypes.string,
    height: PropTypes.string,
    weight: PropTypes.string,
    category: PropTypes.string,
    w: PropTypes.string,
    w_by: PropTypes.string,
    L: PropTypes.string,
    L_by: PropTypes.string
};