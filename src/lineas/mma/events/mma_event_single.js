import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Event_Mma_Single = props => {
    return (
        <div className="col-12 p-2 bg_black mt-2">
            <div className="row g-0  text-white text-center">
                <div className="col-12 bb1px lines fw-bold"><Link to={`/mma_event/${props.id}`}>{props.event}</Link></div>
            </div>
            <div>
                <div className="row g-0 text-center">
                    <div className="col-4 lines">{props.fighter_One}</div>
                    <div className="col-4 lines">vr</div>
                    <div className="col-4 lines">{props.fighter_Two}</div>
                </div>
            </div>
        </div>
    )
}
Event_Mma_Single.propTypes = {
    event: PropTypes.string,
    fighter_One: PropTypes.string,
    fighter_Two: PropTypes.string,

    hour: PropTypes.string,
    date: PropTypes.string
};