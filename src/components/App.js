// create your App component here
import React, { useState, useEffect } from 'react';

const App = () => {
  const [dogImage, setDogImage] = useState(null);

  useEffect(() => {
    // Send fetch request to the API
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => {
        // Set the dog image in the state
        setDogImage(data.message);
      })
      .catch((error) => {
        console.error('Error fetching dog image:', error);
      });
  }, []);

  return (
    <div>
      {dogImage ? (
        // If the dog image is available, show it
        <img src={dogImage} alt="A Random Dog" />
      ) : (
        // If the dog image is not available yet, show "Loading..."
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;