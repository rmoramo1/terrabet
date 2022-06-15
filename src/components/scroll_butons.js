import React from 'react'

export const Scroll_Butons = () => {
    return (
        <div className="container-fluid bg_spans mt-3">
            <div className="scroll_over">
                <div className="mw">
                    <div className="btn_span">
                        <button className="btn" type="button" data-bs-toggle="collapse" data-bs-target="#NFL" aria-expanded="true" aria-controls="NFL">
                            <i className="fa-solid fa-football"></i><br />
                            NFL
                        </button>
                    </div>
                    <div className="btn_span">
                        <button className="btn" type="button" data-bs-toggle="collapse" data-bs-target="#NBA" aria-expanded="false" aria-controls="NBA">
                            <i className="fa-solid fa-basketball"></i><br />NBA
                        </button>
                    </div>
                    <div className="btn_span">
                        <button className="btn" type="button" data-bs-toggle="collapse" data-bs-target="#MLB" aria-expanded="false" aria-controls="MLB">
                            <i className="fa-solid fa-baseball-bat-ball"></i><br />MLB
                        </button>
                    </div>
                    <div className="btn_span">
                        <button className="btn" type="button" data-bs-toggle="collapse" data-bs-target="#HOCKEY" aria-expanded="false" aria-controls="HOCKEY">
                        <i className="fa-solid fa-hockey-puck"></i><br />NHL
                        </button>
                    </div>
                    <div className="btn_span">
                        <button className="btn" type="button" data-bs-toggle="collapse" data-bs-target="#NASCAR" aria-expanded="false" aria-controls="NASCAR">
                        <i className="fa-solid fa-car"></i><br />NASCAR
                        </button>
                    </div>
                    <div className="btn_span">
                        <button className="btn" type="button" data-bs-toggle="collapse" data-bs-target="#MOTO_GP" aria-expanded="false" aria-controls="MOTO_GP">
                        <i className="fa-solid fa-motorcycle"></i><br />MOTO GP
                        </button>
                    </div>
                    <div className="btn_span">
                        <button className="btn" type="button" data-bs-toggle="collapse" data-bs-target="#BOX" aria-expanded="false" aria-controls="BOX">
                        <i className="fa-solid fa-hand-back-fist"></i><br />BOX
                        </button>
                    </div>
                    <div className="btn_span">
                        <button className="btn" type="button" data-bs-toggle="collapse" data-bs-target="#MMA" aria-expanded="false" aria-controls="MMA">
                        <i className="fa-solid fa-hand-fist"></i><br />MMA
                        </button>
                    </div>
                    <div className="btn_span">
                        <button className="btn" type="button" data-bs-toggle="collapse" data-bs-target="#GOLF" aria-expanded="false" aria-controls="GOLF">
                        <i className="fa-solid fa-golf-ball-tee"></i><br />GOLF
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}
