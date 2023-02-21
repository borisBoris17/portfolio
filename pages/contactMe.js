import { Button, FormControl, TextField } from '@mui/material';
import { useState } from 'react';
import styles from '../styles/ContactMe.module.css';

export default function ContactMePage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleNameUpdate = (event) => {
    setName(event.target.value);
  }

  const handleEmailUpdate = (event) => {
    setEmail(event.target.value);
  }

  const handleMessageUpdate = (event) => {
    setMessage(event.target.value);
  }

  const handleContact = () => {
    fetch("/api/contactMe", {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message
      })
    }).catch(() => {
      setErrorMessage("Error Sending contact Request.");
    }).then(() => {
      setName('')
      setEmail('')
      setMessage('')
    }
    );
  }

  return (
    <div>
      <main className={styles.main}>
        <h1>Let&apos;s Connect!</h1>
        <h2>Fill out form below and I will get back to you!</h2>
        <h2>Or if you want to reach out directly, please email me at support@tucker-dev.com</h2>
        <h3 style={{ color: "red" }}>{errorMessage}</h3>
        <FormControl className={styles.form} fullWidth>
          <div className={styles.formTop} style={{width:  "70%"}}>
            <TextField
              inputProps={{
                className: styles.formTopLeftInput,
              }}
              className={styles.formTopLeftInput}
              id="nameInput"
              value={name}
              onChange={handleNameUpdate}
              label="Name" />
            <TextField
              className={styles.formTopRightInput}
              id="emailInput"
              value={email}
              onChange={handleEmailUpdate}
              label="Email" />
          </div>
          <TextField
            inputProps={{
              style: { color: 'white' },
            }}
            className={styles.formBottomInput}
            id="messageInput"
            value={message}
            onChange={handleMessageUpdate}
            label="Message"
            multiline
            rows={4} />
          <Button className={styles.contactButton} variant="contained" onClick={handleContact}>Contact</Button>
        </FormControl>
      </main>
    </div>
  )
}