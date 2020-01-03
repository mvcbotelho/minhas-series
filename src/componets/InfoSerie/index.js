import axios from "axios";
import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { Badge } from "reactstrap";

const InfoSeries = ({ match }) => {
  const [name, setName] = useState();
  const [genres, setGenres] = useState();
  const [status, setStatus] = useState();
  const [success, setSuccess] = useState(false);
  const [mode, setMode] = useState("INFO");
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(`/api/series/${match.params.id}`)
      .then(res => setData(res.data))
      .catch(error => console.log(error));
  }, [match.params.id]);

  const masterHeader = {
    height: "50vh",
    minHeight: "500px",
    backgroundImage: `url('${data.background}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
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
    <div>
      <header style={masterHeader}>
        <div className="h-100" style={{ background: "rgba(0, 0, 0, 0.7)" }}>
          <div className="h-100 container">
            <div className="row h-100 align-items-center">
              <div className="col-3">
                <img
                  className="img-fluid img-thumbnail"
                  alt="poster serie"
                  src={data.poster}
                />
              </div>
              <div className="col-8">
                <h1 className="font-weight-light text-white">{data.name}</h1>
                <div className="lead text-white">
                  <Badge color="success">Assistido</Badge>
                  <Badge color="warning">A Assistir</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        {mode !== "EDIT" && (
          <button className="btn btn-primary" onClick={() => setMode("EDIT")}>
            Editar
          </button>
        )}
      </div>
      {mode === "EDIT" && (
        <div className="container">
          <h1>Editar Série</h1>
          <button className="btn btn-danger" onClick={() => setMode("INFO")}>
            Cancelar edição
          </button>
          <form>
            <div className="form-group">
              <label htmlFor="name">Nome da série</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={e => setName(e.target.value)}
                id="name"
              />
              <label htmlFor="genre">Gênero da série</label>
              <input
                type="text"
                className="form-control"
                value={genres}
                onChange={e => setGenres(e.target.value)}
                id="genres"
              />
            </div>

            <button type="button" onClick={save} className="btn btn-primary">
              Cadastrar
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default InfoSeries;
