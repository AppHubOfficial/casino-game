import React from 'react';

const Home = () => {
  const styles = {
    container: {
      backgroundColor: '#1a1a1a',
      color: '#ffd700',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Arial, sans-serif',
    },
    title: {
      fontSize: '3rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
    },
    subtitle: {
      fontSize: '1.5rem',
      marginBottom: '2rem',
    },
    button: {
      backgroundColor: '#ffd700',
      color: '#1a1a1a',
      padding: '0.8rem 2rem',
      border: 'none',
      borderRadius: '5px',
      fontSize: '1.2rem',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    buttonHover: {
      backgroundColor: '#e6b800',
    }
  };

  const handleHover = (e, hover) => {
    e.target.style.backgroundColor = hover ? styles.buttonHover.backgroundColor : styles.button.backgroundColor;
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to Gold Poker</h1>
      <p style={styles.subtitle}>Play, Win, and Enjoy the Ultimate Poker Experience</p>
      <button
        style={styles.button}
        onMouseEnter={(e) => handleHover(e, true)}
        onMouseLeave={(e) => handleHover(e, false)}
      >
        Get Started
      </button>
    </div>
  );
};

export default Home;
