import React from "react"
import axios from "axios"
import * as qs from "query-string"

import contactStyles from '../styles/contact.module.scss'
import buttonStyles from '../styles/button.module.scss'

class Contact extends React.Component {
    constructor(props) {
        super(props)
        this.domRef = React.createRef()
        this.state = {
            feedbackMsg: null,
            msgColor: null,
            submitted: null
        }
    }

    handleSubmit(event) {
        event.preventDefault()
        const formData = {}
        Object.keys(this.refs).map(key => (formData[key] = this.refs[key].value))

        const axiosOptions = {
            url: this.props.location,
            method: "post",
            headers: {"Content-Type": "application/x-www-form-urlencoded"},
            data: qs.stringify(formData),
        }

        axios(axiosOptions)
            .then(response => {
                this.setState({
                    feedbackMsg: "Message submitted successfully",
                    msgColor: "green",
                    submitted: true
                })
                this.domRef.current.reset()
            })
            .catch(err =>
                this.setState({
                    feedbackMsg: "Message could not be submitted",
                    msgColor: "red",
                    submitted: false
                })
            )
    }

    handle

    render() {
        const styles = {
            feedbackMsgStyle: {
                color: this.state.msgColor,
            }
        }
        const { feedbackMsgStyle } = styles;
        return (
            <div>
                { this.state.feedbackMsg && 
                    <p 
                        style={feedbackMsgStyle}
                        className={contactStyles.formMsg}
                    >
                        {this.state.feedbackMsg}
                    </p>
                }
                { !this.state.submitted && (
                    <form 
                    name="Contact Form"
                    method="post"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    className={contactStyles.formBox}
                    ref={this.domRef}
                    onSubmit={event => this.handleSubmit(event)}
                    >
                        <input type="hidden" name="form-name" value="Contact Form" />
                        <h1 className={contactStyles.contactHeader}>Contact</h1>

    
    
                        <div className={contactStyles.name}>
                            <input ref="name" type="text" placeholder="name" name="name" />
                        </div>
                        <div className={contactStyles.email}>
                            <input ref="email" type="text" placeholder="email" name="email" />
                        </div>
                        <div className={contactStyles.msg}>
                            <textarea ref="message" placeholder="message" name="message" rows="6" />
                        </div>
                        <div className={contactStyles.actions}>
                            <button type="submit" value="Send Message" className={buttonStyles.submit}>
                                <span>send</span>
                            </button>
                        </div>
                    </form>
                )}
            </div>
        )
    }
}

export default Contact
