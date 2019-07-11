import React, { Fragment } from "react";
import RegistryTitle from "./RegistryTitle";
import RegistryItem from "./RegistryItem";
import "../../styles/registry.css";

class Registry extends React.Component {
  render() {
    return (
      <Fragment>
        <section>
          <h1>
            Registry Page Test <br />
            Welcome to your registry
          </h1>
          <RegistryTitle />
        </section>

        <section>
          <h3>Register with one of the following retail stores</h3>
          <RegistryItem />
        </section>
      </Fragment>
    );
  }
}
export default Registry;
