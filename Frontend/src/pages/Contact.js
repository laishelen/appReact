import React, { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import { Container, Button, TextField } from '@mui/material';
import Grid from '@mui/material/Grid';

import styles from '../pages/Contact.module.css';

function Contact() {
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = async () => {   
    try {
      let response = await fetch('http://localhost:3001/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          to,
          subject,
          message
        })
      });

      if (response.status === 200) {
        alert('Email enviado com sucesso!');
      } else {
        alert('Erro ao enviar o e-mail');
      }
    } catch (error) {
      console.error('Erro ao enviar o e-mail:', error);
    }
  };

  return ( 
    <Container className={styles.container}>   
      <Grid container spacing={2} columns={16}>        
        <Grid item xs={8}>
          <div className={styles.map}>
          <iframe title="myFrame" className="mt-3" src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d973.7284222003758!2d-9.150411723626172!3d38.72495860826368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sMarqu%C3%AAs%20de%20pombal!5e1!3m2!1spt-PT!2spt!4v1653677985798!5m2!1spt-PT!2spt" width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
            </svg>
            &nbsp;
            <span>geral@whitenote.pt</span>
          </div>
        </Grid>
        <Grid item xs={8}>
          <div className={styles.contact}>
            <h2 className={styles.h2}>Contate-nos</h2>
            <label className={styles.label}>
              <TextField
                className={styles.email}
                type="email"
                name="email"
                placeholder="E-mail"
                variant="standard"
                value={to}
                onChange={e => setTo(e.target.value)}
              />    
            </label>
            <label className={styles.label}>
              <TextField
                className={styles.subject}
                type="text"
                name="subject"
                placeholder="Assunto"
                variant="standard"
                value={subject}
                onChange={e => setSubject(e.target.value)}
              />     
            </label>
            <label className={styles.label}>
              <TextField
                  className={styles.message}
                  label="Mensagem"
                  multiline
                  rows={4}
                  variant="standard"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                />   
            </label> 
            <label className={styles.labe}>
              <Button className={styles.button} variant="contained" color="success" onClick={sendEmail} endIcon={<SendIcon />}>Enviar</Button> 
            </label>
          </div>
        </Grid>
      </Grid>   
    </Container>    
  );
}

export default Contact;
