import { makeStyles } from "@material-ui/core";
import { mergeClasses } from "@material-ui/styles";
import React, { useEffect } from "react";

import HomeIcon from "@material-ui/icons/Home";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
const drawerWidth = 240;
const useStyles = makeStyles((theme) => {
  return {
    page: {
      // background: "#f9f9f9",
      width: "100%",
      padding: theme.spacing(3),
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    root: {
      display: "flex",
    },
    active: {
      background: "#f4f4f4",
    },
    title: {
      padding: theme.spacing(2),
    },
    appbar: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    toolbar: theme.mixins.toolbar,
    head: {
      flexGrow: 1,
    },
    reg: {
      margin: theme.spacing(1),
    },
  };
});
const Layout = ({ children }) => {
  const listItems = [
    {
      text: "Home",
      icon: <HomeIcon color="secondary" />,
      path: "/",
    },
    {
      text: "About",
      icon: <AnnouncementIcon color="secondary" />,
      path: "/about",
    },
  ];
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(data.userData);
  });
  return (
    <div className={classes.root}>
      <div className={classes.page}>
        {/* <div className={classes.toolbar}></div> */}
        {children}
      </div>
    </div>
  );
};
export default Layout;
