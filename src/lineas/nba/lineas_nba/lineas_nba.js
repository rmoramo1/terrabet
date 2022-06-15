import React from "react";
import PropTypes from "prop-types";

export const Lineas_Nba = props => {
    let status = props.status;

    let color_of_text;

    if( status == "Finished"){
        color_of_text= "col-12 scroll_over mt-2 text-white";
    }
    if( status == "Cancelled"){
        color_of_text= "col-12 scroll_over mt-2 text-danger";
    }
    if( status == "In Progress"){
        color_of_text= "col-12 scroll_over mt-2 text-success";
    }
    if( status == "Pending"){
        color_of_text= "col-12 scroll_over mt-2 text-warning";
    }
    return (
        <div className={color_of_text}>
            <div className="row g-0  text-center mw">
                <div className="odds-spanTeam fw-bold" id="statusNfl">
                    <div className="row g-0">
                        <div className="col-6">
                            {props.status}
                        </div>
                        <div className="col-6">

                        </div>
                    </div>
                </div>
                <div className="odds-span"></div>
                <div className="odds-span text_dest">Spread</div>
                <div className="odds-span text_dest">Juice</div>
                <div className="odds-span text_dest">Money Line</div>
                <div className="odds-span text_dest">Total</div>
                <div className="odds-span text_dest">Juice</div>
                <div className="odds-span text_dest">Team Total</div>
                <div className="odds-span text_dest">Juice Over</div>
                <div className="odds-span text_dest">Juice Under</div>
                <div className="odds-span text_dest">Score</div>
            </div>
            <div className="mw">
                <div className="row g-0 text-center mw ">
                    <div className="odds-span fw-bold text_dest">{props.date}</div>
                    <div className="odds-spanTeam bb1px lines fw-bold">{props.away}</div>
                    <div className="odds-span bb1px lines">{props.spread_away}</div>
                    <div className="odds-span bb1px lines">{props.juice_spread_away}</div>
                    <div className="odds-span bb1px lines">{props.moneyLineAway}</div>
                    <div className="odds-span bb1px lines">{props.total}</div>
                    <div className="odds-span bb1px lines">{props.juice_total_over}</div>
                    <div className="odds-span bb1px lines">{props.tt_away}</div>
                    <div className="odds-span bb1px lines">{props.juice_over_away}</div>
                    <div className="odds-span bb1px lines">{props.juice_under_away}</div>
                    <div className="odds-span bb1px lines">{props.final_score_away}</div>
                </div>
                <div className="row g-0 text-center mw">
                    <div className="odds-span fw-bold text_dest">{props.hour}</div>
                    <div className="odds-spanTeam lines fw-bold">{props.home}</div>
                    <div className="odds-span lines">{props.spread_home}</div>
                    <div className="odds-span lines">{props.juice_spread_home}</div>
                    <div className="odds-span lines">{props.moneyLineHome}</div>
                    <div className="odds-span lines"></div>
                    <div className="odds-span lines">{props.juice_total_under}</div>
                    <div className="odds-span lines">{props.tt_home}</div>
                    <div className="odds-span lines">{props.juice_over_home}</div>
                    <div className="odds-span lines">{props.juice_under_home}</div>
                    <div className="odds-span lines">{props.final_score_home}</div>
                </div>
            </div>
        </div>
    )
};
Lineas_Nba.propTypes = {
    away: PropTypes.string,
    home: PropTypes.string,
    hour: PropTypes.string,
    status: PropTypes.string,
    date: PropTypes.string,
    spread_away: PropTypes.string,
    juice_spread_away: PropTypes.string,
    juice_spread_home: PropTypes.string,
    moneyLineAway: PropTypes.string,
    moneyLineHome: PropTypes.string,
    total: PropTypes.string,
    juice_total_over: PropTypes.string,
    juice_total_under: PropTypes.string,
    tt_away: PropTypes.string,
    tt_home: PropTypes.string,
    juice_over_away: PropTypes.string,
    juice_over_home: PropTypes.string,
    juice_under_away: PropTypes.string,
    juice_under_home: PropTypes.string,
    final_score_away: PropTypes.string,
    final_score_home: PropTypes.string,

};
