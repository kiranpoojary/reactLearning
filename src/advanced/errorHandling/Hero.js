import React from 'react'

function Hero({ heroName }) {
    if (heroName === 'Joker') {
        throw new console.error('Not a Hero');
    }
    return (
        <div>

            {heroName}
        </div>
    )
}

export default Hero
