import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
      buttonMessage: 'SEND MESSAGE'
    };

    this.updateName = this.updateName.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.updateSubject = this.updateSubject.bind(this);
    this.updateMessage = this.updateMessage.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }
    updateName(event){
      this.setState({name: event.target.value});
    }
    updateEmail(event){
      this.setState({email: event.target.value});
    }
    updateSubject(event){
      this.setState({subject: event.target.value});
    }
    updateMessage(event){
      this.setState({message: event.target.value});
    }
    sendMessage(){
      axios.post('/api/message', {payload:this.state})
      .then( response => {
        console.log(response)
        this.setState({buttonMessage: 'THANKS FOR YOUR MESSAGE'})
        this.setState({name: ''})
        this.setState({email: ''})
        this.setState({subject: ''})
        this.setState({message: ''})
      })
    }
  
    render() {
        return (
        <section className="section contact" id="contact">
            <div className="contact-me">
              <h2>
                Hit me up!
              </h2>
              <p>
                Interested in working with me? Or just want to say ‘Hello’? Please use the contact form below or send me an email to <a className="email" href="mailto:simonliolios@gmail.com"> simonliolios@gmail</a>. I'll get back to you as soon as I can.
              </p>
                <label htmlFor="fullname">&nbsp;</label>
                <input className="contact-input" id="fullname" type="text" placeholder="Full name" value={this.state.name} onChange={this.updateName}></input>
                <label htmlFor="email">&nbsp;</label>
                <input className="contact-input" id="email" type="text" placeholder="Email" value={this.state.email} onChange={this.updateEmail}></input>
                <label htmlFor="subject">&nbsp;</label>
                <input className="contact-input" id="subject" type="text" placeholder="Subject" value={this.state.subject} onChange={this.updateSubject}></input>
                <div className="formfield">
                  <label htmlFor="message">&nbsp;</label>
                  <textarea className="formfield" id="message" name="name" rows="4" cols="50" placeholder="Message" value={this.state.message} onChange={this.updateMessage}></textarea>
                </div>
                <div className="contact-button" onClick={this.sendMessage}>
                    {this.state.buttonMessage}
                </div>
            </div>
          </section>
      );
    }
}
