import React from "react";

const Test = () => {
  const [time, setTime] = React.useState("");
  const [error, setError] = React.useState("");

  const handleTimeChange = (event) => {
    const value = event.target.value;
    const pattern = /^([9]|1[0-9]):([0-5][0]|[0-5][2]|[0-5][4]|[0-5][6]|[0-5][8])$/;
    if (!pattern.test(value)) {
      setError("Por favor, introduzca un tiempo válido entre las 9:00 y las 19:00, en intervalos de 10 minutos.");
    } else {
      setError("");
    }
    setTime(value);
  };

  return (
    <div className="max-w-xl mx-auto text-center text-zinc-100">
      <h1 className="text-zinc-100">Pagination</h1>
      {/* <Pagination itemsPerPage={3} /> */}
      <input type="date" placeholder="select the date" />
      <input type="text" placeholder="select the time" value={time} onChange={handleTimeChange} />
      {error && <p>{error}</p>}
    </div>
  );
};

export default Test;