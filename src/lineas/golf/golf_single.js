import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Golf_Single = props => {
    return (
        <div className="col-12 p-2 bg_black mt-2">
            <div className="row g-0 text_dest text-center">
                <div className="col-4 bg_lines">Event</div>
                <div className="col-4 bg_lines">Location</div>
                <div className="col-4 bg_lines">Hour</div>
            </div>
            <div>
                <div className="row g-0 text-center">
                    <div className="col-4 bb1px lines"><Link to={`/golf_lines/${props.id}`}>{props.event}</Link></div>
                    <div className="col-4 bb1px lines">{props.location}</div>
                    <div className="col-4 bb1px lines">{props.hour}</div>
                </div>
            </div>
        </div>
    )
}
Golf_Single.propTypes = {
    id: PropTypes.number,
    event: PropTypes.string,
    location: PropTypes.string,
    hour: PropTypes.string,
    date: PropTypes.string
};