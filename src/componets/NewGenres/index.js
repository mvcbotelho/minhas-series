import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

const NewGenres = () => {
  const [name, setName] = useState();
  const [success, setSuccess] = useState(false);

  const onChange = e => {
    setName(e.target.value);
  };

  const save = () => {
    axios
      .post("/api/genres", { name })
      .then(res => setSuccess(true))
      .catch(erro => console.log(erro));
  };

  if (success) {
    return <Redirect to="/genres" />;
  }

  return (
    <div className="container">
      <h1>Novo Gênero</h1>

      <form>
        <div className="form-group">
          <label htmlFor="name">Nome do gênero</label>
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

export default NewGenres;
