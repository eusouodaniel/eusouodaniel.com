import React from 'react'
import Particles from 'react-particles-js';
import Progress from 'components/progress'
import { Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faBehance, faDribbble, faSpotify, faDocker, faGoogleDrive } from '@fortawesome/free-brands-svg-icons'
import ThemeContext from '../../context'
import './styles.scss'

class Hero extends React.Component {

    static contextType = ThemeContext

    render() {
        return (
            <section id={`${this.props.id}`} className="about" style={{height: this.context.height}}>
                {this.particles()}
                <Row>
                    <Col md={6} className="content">
                        <div className="content-text">
                            <div className="line-text">
                                <h4>Sobre mim</h4>
                            </div>
                            <h3>Eu sou Fullstack web developer</h3>
                            <div className="separator" />
                            <p>Adoro resolver problemas através de código, recentemente adentrei ao universo frontend e como nunca gostei de tarefas repetitivas, também entrei no universo DevOps, e tento sempre juntar esses 3 universos pra entregar o melhor resultado.</p>
                            <div className="social social_icons">
                                <FontAwesomeIcon icon={faGithub} className="social_icon" onClick={() => window.open('https://www.github.com/eusouodaniel')}/>
                                <FontAwesomeIcon icon={faLinkedin} className="social_icon" onClick={() => window.open('https://www.linkedin.com/in/eusouodaniel')} />
                                <FontAwesomeIcon icon={faBehance} className="social_icon" onClick={() => window.open('https://www.behance.net/eusouodaniel')} />
                                <FontAwesomeIcon icon={faDocker} className="social_icon" onClick={() => window.open('https://hub.docker.com/u/danielrodriguess')} />
                                <FontAwesomeIcon icon={faDribbble} className="social_icon" onClick={() => window.open('https://dribbble.com/eusouodaniel')} />
                                <FontAwesomeIcon icon={faGoogleDrive} className="social_icon" onClick={() => window.open('http://bit.ly/meus-curriculos')} />
                                <FontAwesomeIcon icon={faSpotify} className="social_icon" onClick={() => window.open('https://open.spotify.com/user/danielrodriguesdrs331')} />
                            </div>
                        </div>
                    </Col>
                    <Col md={6} className="skills">
                            <div className="line-text">
                                <h4>Minhas principais habilidades</h4>
                            </div>
                            <div className="skills-container">
                                <Progress name="Node" value={90} delay={1100} />
                                <Progress name="React" value={50} delay={1100} />
                                <Progress name="PHP(Symfony e Laravel)" value={95} delay={1100} />
                                <Progress name="Vue" value={40} delay={1100} />
                                <Progress name="MongoDB" value={90} delay={1100} />
                                <Progress name="Docker" value={75} delay={1100} />
                                <Progress name="C#" value={55} delay={1100} />
                                <Progress name="SQL" value={80} delay={1100} />
                            </div>
                    </Col>
                </Row>
            </section>
        )
    }

    particles() {
        return (
            <Particles
                className="particles"
                params={{
                    "particles": {
                        "number": {
                            "value": 50,
                            "density": {
                                "enable": false,
                                "value_area": 5000
                            }
                        },
                        "line_linked": {
                            "enable": true,
                            "opacity": .5
                        },
                        "size": {
                            "value": 1
                        },
                    },
                    "retina_detect": true
            }}/>
        )
    }

}

export default Hero