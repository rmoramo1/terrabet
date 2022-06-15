import React from 'react'

import { Tabs_Nfl } from '../tabs/nfl/tabs_nfl';
import { Tabs_Nba } from '../tabs/nba/tabs_nba';
import { Tabs_MLB } from '../tabs/mlb/tabs_mlb';
import { Tabs_NHL } from '../tabs/nhl/tabs_nhl';
import { Tabs_Nascar } from '../tabs/nascar/nascar_tabs';
import { Tabs_Moto_GP } from '../tabs/moto_gp/Tabs_Moto_gp';
import { Tabs_Box } from '../tabs/box/tabs_box';
import { Tabs_MMA } from '../tabs/mma/tabs_mma';
import { Tabs_Golf } from '../tabs/golf/tabs_golf';
export const Tabs_Sports = () => {
    return (
        <div className='mt-3'>
            <div className="accordion" id="accordionExample">
                <div className="text-white">
                    <div id="NFL" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <Tabs_Nfl/>
                    </div>
                </div>
                <div className="text-white">
                    <div id="NBA" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <Tabs_Nba/>
                    </div>
                </div>
                <div className="text-white">
                    <div id="MLB" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <Tabs_MLB/>
                    </div>
                </div>
                <div className="text-white">
                    <div id="HOCKEY" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                        <Tabs_NHL/>
                    </div>
                </div>
                <div className="text-white">
                    <div id="NASCAR" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                        <Tabs_Nascar/>
                    </div>
                </div>
                <div className="text-white">
                    <div id="MOTO_GP" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                        <Tabs_Moto_GP/>
                    </div>
                </div>
                <div className="text-white">
                    <div id="BOX" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                        <Tabs_Box/>
                    </div>
                </div>
                <div className="text-white">
                    <div id="MMA" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                        <Tabs_MMA/>
                    </div>
                </div>
                <div className="text-white">
                    <div id="GOLF" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                        <Tabs_Golf/>
                    </div>
                </div>
            </div>
        </div>
    )
}
