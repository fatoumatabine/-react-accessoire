import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({ fullName, bio, profession, children, handleName }) => {
  const handleButtonClick = () => {
    handleName(fullName);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.fullName}>{fullName}</h1>
      <p style={styles.bio}>{bio}</p>
      <p style={styles.profession}>{profession}</p>
      <div style={styles.profilePhoto}>{children}</div>
      <button style={styles.button} onClick={handleButtonClick}>
        voir plus
      </button>
    </div>
  );
};

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  handleName: PropTypes.func.isRequired,
};

Profile.defaultProps = {
  fullName: 'Modibo camara',
  bio: ' invalide ',
  profession: 'ingenieur ',
};

const styles = {
  container: {
    backgroundColor: '#f5f5f5',
    padding: '10px',
    margin: '0 auto',
    textAlign: 'center',
    maxWidth: '500px', 
    
  },
  fullName: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  bio: {
    fontStyle: 'italic',
    marginBottom: '10px',
  },
  profession: {
    color: 'blue',
    marginBottom: '20px',
  },
  profilePhoto: {
    border: '1px solid black',
    borderRadius: '50%',
    width: '200px',
    height: '200px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',
    overflow: 'hidden',
  },
  button: {
    backgroundColor: 'blue',
    color: 'white',
    border: 'none',
    padding: '20px 30px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Profile;
