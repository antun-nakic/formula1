import React from "react";
import { Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";

export default class Search extends React.Component {
  state = { uneseno: "" };

  handleChange = (event) => {
    const trenutno = event.target.value;
    this.setState({ uneseno: trenutno });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.setDriver(this.state.uneseno);
  };

  render() {
    return (
      <Form>
        <Form.Group>
          <Form.Label style={{ textAlign: "left" }}>
            Unesite ime vozača:
          </Form.Label>
          <Form.Control
            type='text'
            placeholder='npr.: Alonso'
            name='vozac'
            onChange={this.handleChange}
            value={this.state.uneseno}
          />
        </Form.Group>
        <Button
          variant='primary'
          type='submit'
          onClick={(event) => this.handleSubmit(event)}
          style={{ marginTop: "20px", width: "100%" }}>
          Pretraži
        </Button>
      </Form>
    );
  }
}

Search.propTypes = {
  setDriver: PropTypes.func,
};
