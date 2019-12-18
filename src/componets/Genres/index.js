import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Genres = () => {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get("/api/genres").then(res => {
      setData(res.data.data);
    });
  }, []);

  const deleteLine = id => {
    axios.delete("/api/genres/" + id).then(res => {
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
          <Link className="btn btn-info" to={`/edit-genres/${record.id}`}>
            <i className="fas fa-pencil-alt"></i>
          </Link>
        </td>
      </tr>
    );
  };

  return (
    <div className="container">
      <h1>Gêneros</h1>
      <Link to="/genres/new">Novo Gênero</Link>
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

export default Genres;
