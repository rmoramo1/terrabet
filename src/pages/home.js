import React from 'react';
import { Slider } from '../components/slider';
import { Scroll_Butons } from '../components/scroll_butons';
import { Tabs_Sports } from '../components/tabs_sports.js';
export const Home = () => {
    return (
        <div>
            <Slider />
            <Scroll_Butons />
            <Tabs_Sports />
        </div>
    )
}
