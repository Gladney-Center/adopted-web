let colors = ['sunrise','rose','navy','aqua','maize','teal']

export default ({toggleTheme}) =>
    <nav onClick={e => e.stopPropagation()}>
        <span className="main-nav">Nav menu</span>
        <div className="adptThemer">
            {colors.map((color) => 
                <div onClick={(e) => toggleTheme(color)} className={["adptTheme",color+"-bg"].join(' ')}></div>
            )}
        </div>
    </nav>