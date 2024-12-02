import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

export default function ResetPage() {
  const location = useLocation();
  
  
  // Get the token and user ID from the query parameters
  const query = new URLSearchParams(location.search);
  const token = query.get('token');
  const id = query.get('id');

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check if passwords match
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      // Send reset password request to the backend
      const response = await axios.post('http://localhost:3000/api/auth/reset-password', {
        token,
        id,
        newPassword,
      });
      setSuccess(response.data.message); // Display success message
     
    } catch (err) {
      // Handle error from the backend
      setError(err.response?.data.message || "An error occurred while resetting the password.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.title}>Reset Password</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
        {success && <p style={{ color: 'green' }}>{success}</p>} {/* Display success message */}
        <form onSubmit={handleSubmit}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>New Password:</label>
            <input 
              type="password" 
              placeholder="New Password" 
              style={styles.input} 
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Confirm Password:</label>
            <input 
              type="password" 
              placeholder="Confirm Password" 
              style={styles.input} 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" style={styles.button}>Reset Password</button>
        </form>
      </div>
    </div>
  );
}

// Styles for the ResetPage component
const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: "#f9f9f9",
  },
  formContainer: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "8px",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    width: "400px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "600",
    color: "#333",
    marginBottom: "20px",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "15px",
  },
  label: {
    fontSize: "16px",
    color: "#666",
    marginBottom: "5px",
  },
  input: {
    padding: "10px",
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
    marginTop: "15px",
  },
};
