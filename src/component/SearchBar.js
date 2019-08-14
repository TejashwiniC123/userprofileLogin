import React, { Component } from "react";
import styles from "./SearchBar.module.css";
export default class SearchBar extends Component {
  render() {
    return (
      <div className={styles.searchContainer}>
        <form class="search-container">
          <input
          type={this.props.type}
          placeholder={this.props.placeholder}/>
            
        </form>
      </div>
    );
  }
}



