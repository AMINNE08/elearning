import { useState } from 'react';
import axios from 'axios';
import fpassword from '../shared/images/Fpassword.svg';

export default function ForgotPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/auth/forgot-password', { email });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response ? error.response.data.message : 'An error occurred');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img src={fpassword} alt="Forgot password" style={styles.image} />
      </div>
      <div style={styles.formContainer}>
        <h2 style={styles.title}>Mot de passe oublié</h2>
        <p style={styles.label}>Saisissez votre email :</p>
        <input
          type="email"
          placeholder="Email"
          style={styles.input}
          value={email}
          onChange={handleEmailChange}
        />
        <button style={styles.button} onClick={handleSubmit}>Réinitialiser le mot de passe</button>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}


const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: "#f9f9f9",
  },
  imageContainer: {
    marginBottom: "20px",
  },
  image: {
    width: "150px",
    height: "auto",
  },
  formContainer: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "8px",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  title: {
    fontSize: "24px",
    fontWeight: "600",
    color: "#333",
    marginBottom: "10px",
  },
  label: {
    fontSize: "16px",
    color: "#666",
    marginBottom: "8px",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "20px",
    border: "1px solid #ddd",
    borderRadius: "4px",
  },
  button: {
    backgroundColor: "#e74c3c",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};
