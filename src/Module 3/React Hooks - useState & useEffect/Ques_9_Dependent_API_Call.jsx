import React, { useState, useEffect } from "react";

const Ques_9_Dependent_API_Call = () => {
  const [userId, setUserId] = useState(1);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error("Error fetching data:", error));
  }, [userId]);

  return (
    <div>
      <h2>Dependent API Call</h2>
      <button onClick={() => setUserId(userId + 1)}>Fetch Next Post</button>
      {data && (
        <div>
          <h3>{data.title}</h3>
          <p>{data.body}</p>
        </div>
      )}
    </div>
  );
};

export default Ques_9_Dependent_API_Call;
