import { React, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  searchBar: {
    display: "flex",
    justifyContent: "center",
    margin: "20px",
  },
}));

function PaginationComponent(props) {
  const classes = useStyles();
  return (
    <Pagination
      className={classes.searchBar}
      count={props.pageData.pageCount}
      page={props.pageNumber}
      onChange={props.onPageChange}
    ></Pagination>
  );
}

export default PaginationComponent;
