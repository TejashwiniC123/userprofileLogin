import React, { Component } from "react";
import styles from "./UserProfile.module.css";
import ImageWithInput from "./ImageWithInput";
import ToggleButton from "./ToggleButton";
import Button from "./Button";
import Image from "./Image";
import SearchForm from "./SearchBar"
import "../App";

export default class UserProfile extends Component {
  render() {
    return (
   
      <div className={styles.base}>
        <div className={styles.container}>
          <div className={styles.ProfileHolder}>
            <Image image={this.props.Image} size="cover" borderRadius="50%" />
          </div>
          <div className={styles.userProfile}>{this.props.Uname}</div>
        </div>
        <div className={styles.userDetails}>
          <div className={styles.userName}>{this.props.name1}</div>
          <div className={styles.profile}>{this.props.nameUser}</div>
          <ImageWithInput
            Icon={this.props.userIcon}
            type="text"
            placeholder="Enter user name"
            border="none"
          />
          <div className={styles.profile}>{this.props.emailUser}</div>
          <ImageWithInput
            Icon={this.props.email}
            type="text"
            placeholder="Enter email id"
            border="none"
          />
          <div className={styles.profile}>{this.props.mobileUser}</div>
          <ImageWithInput
            Icon={this.props.mobile}
            type="text"
            placeholder="Enter your 10 digit modile number"
            border="none"
          />
          <div className={styles.profile}>{this.props.dobUser}</div>
          <ImageWithInput
            Icon={this.props.dob}
            type="text"
            placeholder="dd/mm/yy"
            border="none"
          />
          <div className={styles.profile}>{this.props.sex}</div>
          <div className={styles.toggleSwitch}>
            <ToggleButton label={this.props.male} />
            <ToggleButton label={this.props.female} />
          </div>
          <Button>{this.props.ButtonSave}</Button>
        </div>
      </div>  
     
    );
  }
}
