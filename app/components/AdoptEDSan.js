const AdoptEDSan = ({str}) => {
    let yaya = null

    str.replace(/adopt(ed)/gi, (m, p1) => {
        let strSplit = str.split(m)
        yaya = <span>{strSplit[0]+'adopt'}<span className="notbold">ED</span>{strSplit[1]}</span>
    })

    return yaya
}

export default AdoptEDSan