import { useContext } from 'react'
import AdoptEDSan from './AdoptEDSan'
import PageContext from './context'

import { adptKeygen } from '../utilities/functions'

const AdptTeamBio = props => {

    const data = useContext(PageContext)['components']['teambio']

    return (
        <adpt-team-bio id="team" role="complementary">
            <adpt-parallax-bg class="adpt-parallax"></adpt-parallax-bg>
            <section className="adpt-bio-heading">
                <h4><AdoptEDSan str={data.headline}/></h4>
                <img src={data.heroimg}/>
            </section>
            <adpt-team-bio-content>
                {data.people.map((person, i) => {
                    let key = adptKeygen()
                    return (
                        <figure className='narp' key={key} data-key={key}>
                            <picture>
                                <img className="bio-image" src={person.image} alt={person.name}/>
                                <h4>{person.name}</h4>
                            </picture>
                            <figcaption>{person.bio}</figcaption>
                        </figure>
                    )
                })}
            </adpt-team-bio-content>
        </adpt-team-bio>
    )
}

export default AdptTeamBio