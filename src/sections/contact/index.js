import React from 'react'
import './styles.scss'
import { Row, Col } from 'react-bootstrap'
import AnimationContainer from 'components/animation-container'
import BaffleText from 'components/baffle-text'
import ThemeContext from '../../context'
import MailService from '../../services/mail';

class Contact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            message: "",
            error: false,
            show: false,
            submitMessage: "",
        }
        this.show = this.show.bind(this)
    }
    static contextType = ThemeContext


    show() {
      this.setState({show : true})
    }

    check(val) {
        if (this.state.error && val === "") {
                return false
        } else {
            return true
        }
    }

    async submit() {
        if (this.state.name === "" || this.state.email === "" || this.state.message === "") {
            this.setState({error: true})
        } else {
            this.setState({submitMessage: "Enviando..."})
            try {
                await MailService.send({ name: this.state.name, email: this.state.email, message: this.state.message });
                
                this.setState({error: false})
                this.setState({name: ''})
                this.setState({email: ''})
                this.setState({message: ''})
                this.setState({submitMessage: "Contato enviado com sucesso"})
                setTimeout(() => {
                    this.setState({submitMessage: ''});
                }, 4000)
            } catch (error) {
                this.setState({error: true})
                this.setState({submitMessage: "Falha ao enviar o contato"})
            }
        }
    }
    render() {
        return (
            <section id={`${this.props.id}`} className="contact" style={{height: this.context.height}}>
                <Row>
                    <Col md={2} className="side">
                        <h2>
                            <BaffleText text="Contato" revealDuration={500} revealDelay={500} parentMethod={this.show} callMethodTime={1100} />
                        </h2>
                    </Col>
                    <Col md={5} className="form">
                        {this.form()}
                    </Col>
                </Row>
            </section>
        )
    }

    form() {
        if (this.state.show || this.context.height === "auto") {
            return (
                <AnimationContainer delay={0} animation="fadeInUp fast">
                <div className="form-container">
                    <div className="line-text">
                        <h4>Entre em contato</h4>
                        <AnimationContainer delay={50} animation="fadeInUp fast">
                            <div className="form-group">
                                <input type="text" value={this.state.name} className={`name ${this.check(this.state.name) ? "" : "error"}`} placeholder="Nome" onChange={e => this.setState({name: e.target.value})} />
                            </div>
                        </AnimationContainer>
                        <AnimationContainer delay={100} animation="fadeInUp fast">
                        <div className="form-group">
                            <input type="text" value={this.state.email}  className={`email ${this.check(this.state.email) ? "" : "error"}`} placeholder="Email" onChange={e => this.setState({email: e.target.value})} />
                        </div>
                        </AnimationContainer>
                        <AnimationContainer delay={200} animation="fadeInUp fast">
                        <div className="form-group">
                            <textarea value={this.state.message} className={`message ${this.check(this.state.message) ? "" : "error"}`} placeholder="Mensagem" onChange={e => this.setState({message: e.target.value})}></textarea>
                        </div>
                        </AnimationContainer>
                        <p className={`${this.state.error ? "send-error" : "send-success"}`}>{this.state.submitMessage}</p>
                        <AnimationContainer delay={250} animation="fadeInUp fast">
                        <div className="submit">
                            <button className={`hover-button ${this.state.error ? "error" : ""}`} onClick={() => this.submit()}>
                                <span>Enviar</span>
                            </button>
                        </div>
                        </AnimationContainer>
                    </div>
                </div>
                </AnimationContainer>
            )
        }
    }

}

export default Contact