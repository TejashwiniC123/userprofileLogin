import React, { Component } from "react";
import styles from "./Toggle.module.css";
export default class ToggleButton extends Component {
  render() {
    return (
      <label className={styles.switch}>
        {this.props && this.props.label && (
          <div className={styles.label}>{this.props.label}</div>
        )}
        <input type="checkbox" />
        <span class={styles.slider} />
      </label>
    );
  }
}
