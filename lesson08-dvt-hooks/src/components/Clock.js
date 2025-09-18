import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer); // cleanup khi component unmount
  }, []);

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>useEffect với Timer</h2>
      <p>Bây giờ là: {time.toLocaleTimeString()}</p>
    </div>
  );
}

export default Clock;
