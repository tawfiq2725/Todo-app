import React from 'react';
import { useParams } from 'react-router-dom';

const Profile = () => {
  // Extract dynamic "id" from URL
  const { id } = useParams();

  // For simplicity, we can map some sample profile data
  const profiles = {
    1: { id: 1, name: "Tawfiq", age: 21 },
    2: { id: 2, name: "John", age: 25 },
    // Add more profiles as needed
  };

  const profile = profiles[id]; // Fetch the profile based on dynamic id

  // Handle the case where the profile id doesn't exist
  if (!profile) {
    return <h3>Profile Not Found</h3>;
  }

  return (
    <>
      <h3>Profile ID: {profile.id}</h3>
      <h3>Name: {profile.name}</h3>
      <h3>Age: {profile.age}</h3>
    </>
  );
}

export default Profile;
