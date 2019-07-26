import { Component } from 'react'

export default class AdptTeamBio extends Component {

    state = {
        active: 0
    }

    render() {

        const { data } = this.props

        return (
            <adpt-team-bio role="complementary">
                <adpt-parallax-bg class="adpt-parallax"></adpt-parallax-bg>
                <section className="adpt-bio-heading">
                    <h4>Meet Our Team</h4>
                </section>
                <adpt-team-bio-content class="actif">
                    {data.map((person, i) => (
                        <figure className={this.state.active === i ? 'active' : 'narp'}>
                            <img className="bio-image" src={person.image} alt={person.name} onClick={(e) => this.setState({active:i})}/>
                            <figcaption>{person.bio}</figcaption>
                            <h4>{person.name}</h4>
                        </figure>
                    ))}
                </adpt-team-bio-content>
            </adpt-team-bio>
        )
    }
}