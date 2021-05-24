import "./App.css";
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { vozac, voznje, reset } from "./redux/actions";

import Driver from "./components/Driver";
import Races from "./components/Races";
import { Button } from "react-bootstrap";

import Search from "./components/Search";

class App extends React.Component {
  setDriver = (driverName) => {
    const { getVozac, getVoznje } = this.props;

    Promise.all([getVozac(driverName), getVoznje(driverName)]).catch((error) =>
      alert(error)
    );
  };

  handleResetDriver = () => {
    const { resetDriver } = this.props;
    resetDriver();
  };
  componentDidUpdate() {
    console.log("Update Komponente.");
  }
  render() {
    const { name, listaVoznji } = this.props;

    if (!name) {
      return (
        <div className='app'>
          <Search setDriver={this.setDriver} />
        </div>
      );
    }

    return (
      <div className='app'>
        <Driver name={name} />
        <Races listaVoznji={listaVoznji} />
        <Button
          variant='secondary'
          onClick={this.handleResetDriver}
          type='submit'
          size='lg'
          block
          className='mt-5'
          style={{ width: "100%" }}>
          Reset
        </Button>
      </div>
    );
  }
}

App.propTypes = {
  name: PropTypes.object,
  listaVoznji: PropTypes.array,
  getVozac: PropTypes.func,
  getVoznje: PropTypes.func,
  resetDriver: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    name: state.name,
    listaVoznji: state.listaVoznji,
  };
}

const mapDispatchToProps = {
  getVozac: vozac,
  getVoznje: voznje,
  resetDriver: reset,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
