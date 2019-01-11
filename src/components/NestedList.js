import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

const styles = theme => ({
    root: {
        width: "100%",
        maxWidth: 320,
        backgroundColor: theme.palette.background.paper
    },
    nested: {
        paddingLeft: theme.spacing.unit * 4
    },
    moreNested: {
        paddingLeft: theme.spacing.unit * 4,
        fontFamily: 'Roboto',
        color: 'rgba(0, 0, 0, 0.87)',
        fontSize: '1rem',
        fontWeight: 400
    }
});

class NestedList extends React.Component {
    state = {
        open: false,
        pending: false
    };

    handleClick = () => {
        this.setState(state => ({open: !state.open}));
    };

    testClick = () => {
        this.setState(state => ({pending: !state.pending}));
    };

    render() {
        const {classes} = this.props;
        const {pending} = this.state;

        return (
            <List
                component="nav"
                className={classes.root}>
                <ListItem button onClick={this.handleClick}>
                    <ListItemText primary="Microphone"/>
                    {this.state.open ? <ExpandLess/> : <ExpandMore/>}
                </ListItem>
                <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            <ListItemText onClick={this.testClick} primary="Audio Capture"/>
                        </ListItem>
                    </List>
                    {pending ?
                        (<p className="MuiTypography-subheading-36">[INFO] Test not run yet</p>) : null}
                </Collapse>

            </List>
        );
    }
}

NestedList.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NestedList);
