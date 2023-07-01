import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Detail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      const data = await response.json();
      setUser(data);
    };

    fetchUser();
  }, [id]);

  return (
    <>
      <h1>Dentista id {id}</h1>
      {user && (
        <div style={{textAlign:'center'}}>
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Website: {user.website}</p>
        </div>
      )}
    </>
  );
};

export default Detail;