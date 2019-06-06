import React from 'react'

let colors = ['sunrise','rose','navy','aqua','maize','teal']

const AdptNavMenu = ({toggleTheme}) =>
    <nav onClick={e => e.stopPropagation()}>
        <span className="main-nav">Nav menu</span>
        <div className="adptThemer">
            {colors.map((color) => 
                <div onClick={(e) => toggleTheme(color === 'sunrise' ? '' : color)} className={["adptTheme",color+"-bg"].join(' ')}></div>
            )}
        </div>
    </nav>

export default AdptNavMenu