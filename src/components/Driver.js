import React from "react";
import PropTypes from "prop-types";

const styles = {
  container: {
    textAlign: "justify",
  },
  titleContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: 24,
  },
  image: {
    width: 100,
    height: 100,
  },
  name: {
    fontSize: 64,
    display: "inline",
    marginLeft: 36,
  },
};

const Slika_svima_ista = "https://redux.js.org/img/redux.svg";

export default function Driver({ name }) {
  if (!name) {
    return null;
  }

  const { url, givenName, familyName, dateOfBirth, nationality } = name;

  return (
    <div style={styles.container}>
      <div style={styles.titleContainer}>
        <img src={Slika_svima_ista} alt='No logo' style={styles.image} />
        <span style={styles.name}>
          {givenName} {familyName}
        </span>
      </div>
      <p>
        <strong>Datum rođenja: </strong>
        {dateOfBirth}
      </p>
      <p>
        <strong>Nacionalnost: </strong>
        {nationality}
      </p>
      <p>
        <strong>Wikipedija: </strong>
        <a href={url}>{url}</a>
      </p>
    </div>
  );
}

Driver.propTypes = {
  name: PropTypes.object,
};
