import React from "react";
import UserItem from "./UserItem";

import { makeStyles } from "@material-ui/core/styles";

import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  rootC: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function UsersList(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  if (props.users.length === 0) {
    return (
      <div>
        <h2>No users found.</h2>
      </div>
    );
  }
  return (
    <>
      {props.users.map((user) => {
        return (
          <UserItem
            key={user.id}
            id={user.id}
            image={user.image}
            name={user.name}
            placeCount={user.placeCount}
          />
        );
      })}
    </>
  );
}

export default UsersList;
