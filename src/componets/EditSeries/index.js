import axios from "axios";
import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";

const EditSeries = ({ match }) => {
  const [name, setName] = useState();
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    axios.get(`/api/series/${match.params.id}`).then(res => {
      setName(res.data.name);
    });
  }, [match.params.id]);

  const onChange = e => {
    setName(e.target.value);
  };

  const save = () => {
    axios
      .put(`/api/series/${match.params.id}`, { name })
      .then(res => setSuccess(true))
      .catch(erro => console.log(erro));
  };

  if (success) {
    return <Redirect to="/series" />;
  }

  return (
    <div className="container">
      <h1>Editar Série</h1>

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

export default EditSeries;
