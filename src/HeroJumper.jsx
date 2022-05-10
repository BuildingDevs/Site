import React from 'react'

import GameImage from './img/herojumper.png'
import SteamIcon from './img/steam.png'
import GameScreenshot from './img/herojumper-screenshot.png'
import GameEngineImage from './img/ue4.png'
import { Button } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'

function HeroJumper() {
    return (
        <div>
            <h1 className='gameName'><img className='gameImage' src={GameImage} alt='game-img'></img>Hero Jumper</h1>

            <p>Survive in a world with only hexagons. Build your own house, weapons and collect resources to survive. Explore the darkness of one hexagon.</p>

            <Button variant='success'>Steam</Button>

            <h3>Screenshot</h3>

            <Image className='GameScreenshot' src={GameScreenshot} alt='game-screenshot'></Image>

            <blockquote>Engine used for the game: Unreal Engine 4.27<img className='mini-text-image' src={GameEngineImage} alt='game-engine-img'></img></blockquote>
        </div>
    )
}

export default HeroJumper