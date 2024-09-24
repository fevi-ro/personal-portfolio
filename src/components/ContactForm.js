import React from "react"
import {useState} from "react";
import {NavBar, Nav, Container, Row, Col} from "react-bootstrap"

import { useForm, ValidationError } from '@formspree/react';




export const ContactForm= () => {





    const [state, handleSubmit] = useForm("mqazvndn");
    if (state.succeeded) {
        return <p>Thanks for contacting!</p>;
    }

  

      
    return (
      <section>
        <Container className="contact" id="contact">
        <Col sm={4} className="contactBx">
        <h2>Get in Touch</h2>
      <form onSubmit={handleSubmit} action="https://formspree.io/f/mqazvndn" method="POST">

      <Row>
    {/* First Name and Last Name in the same row */}
    <Col sm={6}>
      <label htmlFor="firstname">First Name</label>
      <input type="text" name="firstname" id="firstname" required />
    </Col>
    <Col sm={6}>
      <label htmlFor="lastname">Last Name</label>
      <input type="text" name="lastname" id="lastname" required />
    </Col>
  </Row>

  <Row>
    {/* Phone and Email in the same row */}
    <Col sm={6}>
      <label htmlFor="phone">Phone</label>
      <input type="tel" name="phone" id="phone"  required />
    </Col>
    <Col sm={6}>
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" required />
    </Col>
  </Row>

  <Row>
    {/* Message area full width */}
    <Col>
      <label htmlFor="message">Message</label>
      <textarea name="message" id="message" rows="4" required></textarea>
    </Col>
  </Row>
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />


  <div class="g-recaptcha" data-sitekey="your_site_key"></div>
  <br />
        <button type="Send" disabled={state.submitting}>
          Submit
        </button>
        
      </form>
      </Col>
      </Container>
      </section>
    );
  }
  