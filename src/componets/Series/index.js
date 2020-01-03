import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Series = () => {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get("/api/series").then(res => {
      setData(res.data.data);
    });
  }, []);

  const deleteLine = id => {
    axios.delete("/api/series/" + id).then(res => {
      const filtered = data.filter(item => item.id !== id);
      setData(filtered);
    });
  };

  const renderLine = record => {
    return (
      <tr key={record.id}>
        <th scope="row">{record.id}</th>
        <td>{record.name}</td>
        <td>
          <button
            className="btn btn-danger mr-2"
            onClick={() => deleteLine(record.id)}
          >
            <i className="fas fa-trash"></i>
          </button>
          <Link className="btn btn-info" to={`/series/${record.id}`}>
            <i className="fas fa-pencil-alt"></i>
          </Link>
        </td>
      </tr>
    );
  };
  console.log("data", data);
  if (data) {
    if (data.length === 0) {
      return (
        <div className="container">
          <h1>Série</h1>
          <Link to="/series/new">Nova Série</Link>
          <div className="alert alert-warning" role="alert">
            Você não possui série cadastradas!!!
          </div>
        </div>
      );
    }
  } else {
    return (
      <div className="container">
        <h1>Série</h1>
        <Link to="/series/new">Nova Série</Link>
        <div className="spinner-border text-dark" role="status">
          <span className="sr-only">Carregando...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Séries</h1>
      <Link to="/series/new">Nova Série</Link>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nome</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody>{data ? data.map(renderLine) : "carregando..."}</tbody>
      </table>
    </div>
  );
};

export default Series;
