import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import BaffleText from 'components/baffle-text'
import AnimationContainer from 'components/animation-container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faVuejs, faDocker, faAws, faMicrosoft, faDev, faNode } from '@fortawesome/free-brands-svg-icons'
import {
  faRobot,
  faSmileBeam,
  faPizzaSlice,
  faQuoteRight,
  faCode,
} from '@fortawesome/free-solid-svg-icons'
import Counter from 'components/counter'
import ThemeContext from '../../context'
import './styles.scss'

class Services extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
    }
    this.show = this.show.bind(this)
  }

  static contextType = ThemeContext

  show() {
    this.setState({ show: true })
  }

  render() {
    return (
      <section
        id={`${this.props.id}`}
        className="services"
        style={{ height: this.context.height }}
      >
        <Row
          className="top"
          style={{
            maxHeight:
              this.context.height !== 'auto'
                ? this.context.height * 0.8
                : 'inherit',
          }}
        >
          <div className="content">
            <Col md={12}>
              <div className="line-text">
                <h4>Serviços</h4>
              </div>
              <div className="heading">
                <BaffleText
                  text="O que eu faço?"
                  revealDuration={500}
                  revealDelay={500}
                  parentMethod={this.show}
                  callMethodTime={1100}
                />
              </div>
              <div
                className="services_container"
                style={{
                  minHeight:
                    this.context.height !== 'auto'
                      ? this.context.height * 0.6
                      : 'inherit',
                }}
              >
                <Container>{this.services()}</Container>
              </div>
            </Col>
          </div>
        </Row>
      </section>
    )
  }

  services() {
    if (this.state.show || this.context.height === 'auto') {
      return (
        <Row>
          <Col md={4} className="service">
            <AnimationContainer delay={200} animation="fadeInLeft fast">
              <div className="icon">
                <FontAwesomeIcon icon={faReact} /> <FontAwesomeIcon icon={faVuejs} />
              </div>
              <h4>React e Vue</h4>
              <p>
                Ultimamente tenho focado todos os meus estudos na área de frontend, mais especificamente esses dois frameworks que estão em crescente no mercado.
              </p>
            </AnimationContainer>
          </Col>
          <Col md={4} className="service border-side">
            <AnimationContainer delay={400} animation="fadeInDown fast">
              <div className="icon">
                <FontAwesomeIcon icon={faDocker} />
              </div>
              <h4>Docker</h4>
              <p>
                Aplicações rodando em container, para facilitação do desenvolvimento local e também para publicação em produção, aumentando a produtividade.
              </p>
            </AnimationContainer>
          </Col>
          <Col md={4} className="service">
            <AnimationContainer delay={600} animation="fadeInRight fast">
              <div className="icon">
                <FontAwesomeIcon icon={faAws} /> <FontAwesomeIcon icon={faMicrosoft} />
              </div>
              <h4>AWS Management e Azure</h4>
              <p>
                Experiência com configuração de servidores AWS e Azure, utilizando serviços como ECR, EKS, EC2 no caso da Amazon e similares na Azure(AKS, ACR).
              </p>
            </AnimationContainer>
          </Col>
          <Col md={4} className="service">
            <AnimationContainer delay={800} animation="fadeInLeft fast">
              <div className="icon">
                <FontAwesomeIcon icon={faDev} className="solid" />
              </div>
              <h4>Kubernetes</h4>
              <p>
                Configuração de serviços do Kubernetes para maior escabilidade dos servidores.
              </p>
            </AnimationContainer>
          </Col>
          <Col md={4} className="service border-side">
            <AnimationContainer delay={1000} animation="fadeInUp fast">
              <div className="icon">
                <FontAwesomeIcon icon={faRobot} className="solid" />
              </div>
              <h4>Chatbots</h4>
              <p>
                Larga experiência com desenvolvimento de chatbots, implementando fluxos conversacionais utilizando a plataforma BLiP.
              </p>
            </AnimationContainer>
          </Col>
          <Col md={4} className="service">
            <AnimationContainer delay={1200} animation="fadeInRight fast">
              <div className="icon">
                <FontAwesomeIcon icon={faNode} className="solid" />
              </div>
              <h4>Node.JS</h4>
              <p>
                Experiência com Node e alguns frameworks como Express e Adonis, utilizando das boas práticas também, como os princípios do SOLID no desenvolvimento, para entregar um código robusto e escalável.
              </p>
            </AnimationContainer>
          </Col>
        </Row>
      )
    }
  }
}

export default Services
