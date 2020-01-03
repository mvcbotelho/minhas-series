import axios from "axios";
import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const NewSeries = () => {
  const [name, setName] = useState();
  const [success, setSuccess] = useState(false);

  const onChange = e => {
    setName(e.target.value);
  };

  const save = () => {
    axios
      .post("/api/series", { name })
      .then(res => setSuccess(true))
      .catch(erro => console.log(erro));
  };

  if (success) {
    return <Redirect to="/series" />;
  }

  return (
    <div className="container">
      <h1>Nova Série</h1>

      <form>
        <div className="form-group">
          <label htmlFor="name">Nome da série</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={onChange}
            id="name"
          />
        </div>

        <button type="button" onClick={save} className="btn btn-primary">
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default NewSeries;
