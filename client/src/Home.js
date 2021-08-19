import React, { useState, useEffect} from 'react';

function Home() {
    const [message, setMessage] = useState(null);
    useEffect(() => {
        fetch('http://localhost:8080/api', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(res => res.json())
            .then((result) => {
                console.log(result);
            }, (error) => {
                console.log(error);
                console.log('error');
            });
    });
  return (
      <div>
          testing!
          { message }
      </div>
  );
}

export default Home;
