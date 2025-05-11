import React from "react";

const Profile = ({ name, age }) => {
  return (
    <div className="profile-card">
      <h3>Name: {name}</h3>
      <p>Age: {age}</p>
    </div>
  );
};

export default Profile;
