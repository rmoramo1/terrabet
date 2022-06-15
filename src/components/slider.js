import React from 'react'
export const Slider = () => {
    return (
        <div className=''>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner rounded overflow-hidden">
                    <div className="carousel-item active">
                        <div className='slider slider1'>
                            <span className="title d-flex justify-content-center align-items-center">
                                DON`T MISS NFL ACTION
                            </span>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className='slider slider2 text-white '>
                            <span className="title d-flex justify-content-center align-items-center">
                                LIFE BETTING ON ALL GAMES
                            </span>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className='slider slider3 text-white '>
                            <span className="title d-flex justify-content-center align-items-center">
                                CREATE YOUR OWN PROPOSITION WITH OUR PROP BUILDER
                            </span>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className='slider slider4 text-white '>
                            <span className="title d-flex justify-content-center align-items-center">
                            JUST PLAY. HAVE FUN. ENJOY THE GAME
                            </span>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
