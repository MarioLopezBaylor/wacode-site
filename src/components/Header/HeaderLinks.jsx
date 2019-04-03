/* eslint-disable */
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import PersonAdd from "@material-ui/icons/PersonAdd";
import HowToReg from "@material-ui/icons/HowToReg";
import SupervisorAccount from "@material-ui/icons/SupervisorAccount";
import Grade from "@material-ui/icons/Grade";
// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-pro-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
  const { classes, dropdownHoverColor } = props;
  return (
    <List className={classes.list + " " + classes.mlAuto}>
      <ListItem className={classes.listItem}>
        <Button
          href={"#about-us"}
          color={"transparent"}
          className={classes.navButton}
          round
        >
          About Us
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href={"#faq"}
          color={"transparent"}
          className={classes.navButton}
          round
        >
          F.A.Q.
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href={"#schedule"}
          color={"transparent"}
          className={classes.navButton}
          round
        >
          Schedule
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          hoverColor={dropdownHoverColor}
          buttonText="Registration Links"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={HowToReg}
          dropdownList={[
            <a
              href="https://scottyshaw.typeform.com/to/WFEVuG"
              target="_blank"
              className={classes.dropdownLink}
            >
              <PersonAdd className={classes.dropdownIcons} />
              Participant
            </a>,
            <a
              href="https://wacodeteam.typeform.com/to/mpK8Ns"
              target="_blank"
              className={classes.dropdownLink}
            >
              <SupervisorAccount className={classes.dropdownIcons} />
              Volunteer
            </a>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="https://www.wacode.org/live"
          color={window.innerWidth < 960 ? "info" : "white"}
          className={classes.navButton}
          round
        >
          <Grade className={classes.icons} /> LIVE!
        </Button>
      </ListItem>
    </List>
  );
}

HeaderLinks.defaultProps = {
  hoverColor: "primary"
};

HeaderLinks.propTypes = {
  dropdownHoverColor: PropTypes.oneOf([
    "dark",
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose"
  ])
};

export default withStyles(headerLinksStyle)(HeaderLinks);
