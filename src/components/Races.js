import React from "react";
import PropTypes from "prop-types";
import ListGroup from "react-bootstrap/ListGroup";

export default function Races({ listaVoznji }) {
  if (!listaVoznji || listaVoznji.length <= 0) {
    return null;
  }

  return (
    <div>
      <p>
        <strong>Utrke: </strong>
      </p>
      <ListGroup>
        {listaVoznji.map((voznja, index) => (
          <ListGroup.Item key={index}>
            Position: {voznja.Results[0].position} --- {voznja.raceName} (
            {voznja.season})
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

Races.propTypes = {
  listaVoznji: PropTypes.array,
};
