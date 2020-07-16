import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  rootC: {
    maxWidth: 345,
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

function UserItem(props) {
  const classes = useStyles();

  return (
    <Grid item xs={6} sm={3}>
      <Card className={classes.rootC}>
        <CardHeader
          avatar={
            <Avatar
              alt={props.name}
              className={classes.large}
              src={props.image}
            />
          }
          action={
            <Link to={`/${props.id}/places`}>
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            </Link>
          }
          title={props.name}
          subheader={props.placeCount + " publication(s)"}
        />
      </Card>
    </Grid>
  );
}

export default UserItem;
