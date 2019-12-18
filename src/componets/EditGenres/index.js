import React, { useState, useEffect } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

const EditGenres = ({ match }) => {
  const [name, setName] = useState();
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    axios.get(`/api/genres/${match.params.id}`).then(res => {
      setName(res.data.name);
    });
  }, [match.params.id]);

  const onChange = e => {
    setName(e.target.value);
  };

  const save = () => {
    axios
      .put(`/api/genres/${match.params.id}`, { name })
      .then(res => setSuccess(true))
      .catch(erro => console.log(erro));
  };

  if (success) {
    return <Redirect to="/genres" />;
  }

  return (
    <div className="container">
      <h1>Editar Gênero</h1>

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

export default EditGenres;
