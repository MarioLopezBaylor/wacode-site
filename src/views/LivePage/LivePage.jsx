import React from "react";
import PropTypes from "prop-types";

// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinksLive from "components/Header/HeaderLinksLive.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import Button from "components/CustomButtons/Button.jsx";

import landingPageStyle from "assets/jss/material-kit-pro-react/views/landingPageStyle.jsx";

import { TwitterTimelineEmbed } from "react-twitter-embed";

// Sections
import SectionLocation from "./Sections/SectionLocation";
import SectionPrompts from "./Sections/SectionPrompts";
import SectionMainSchedule from "./Sections/SectionMainSchedule";
import SectioinJudging from "./Sections/SectionJudging";

class LivePage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          color="transparent"
          brand="Wacode: A Community Hackathon"
          links={<HeaderLinksLive dropdownHoverColor="info" />}
          fixed
          changeColorOnScroll={{
            height: 300,
            color: "primary"
          }}
          {...rest}
        />
        <Parallax image={require("assets/img/tech_background.png")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12}>
                <h2 className={classes.title}>Welcome to Wacode!</h2>
                <TwitterTimelineEmbed
                  sourceType="profile"
                  screenName="wacodeteam"
                  options={{
                    width: "100%",
                    height: "50vh"
                  }}
                  theme="light"
                />
                <Button
                  color="info"
                  href="https://twitter.com/WacodeTeam"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className="fab fa-twitter"
                    style={{ marginRight: "10px" }}
                  />
                  Follow Us!
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <SectionLocation id="venue" />
          <SectionMainSchedule id="schedule" />
          <SectionPrompts id="prompts" />
          <SectioinJudging id="judging" />
        </div>
        <Footer
          content={
            <div>
              <div className={classes.left}>
                <List className={classes.list}>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="http://computingforcompassion.org"
                      className={classes.block}
                    >
                      Baylor Computing for Compassion
                    </a>
                  </ListItem>
                </List>
              </div>
              <div className={classes.right}>
                &copy; {1900 + new Date().getYear()} , made with{" "}
                <Favorite className={classes.icon} /> by{" "}
                <a href="/#about-us">The Wacode Team</a>
              </div>
            </div>
          }
        />
      </div>
    );
  }
}

LivePage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(landingPageStyle)(LivePage);
