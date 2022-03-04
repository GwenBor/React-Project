import { TextField, Toolbar, IconButton, Paper } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { React, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  searchContainer: {
    display: "flex",
    margin: "5px",
  },
  searchIcon: {
    alignSelf: "flex-end",
    marginTop: "5px",
    paddingRight: "5px",
  },
}));

export default function Search(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    props.onChangeQuery(searchInput);
  };

  function handleChange(e) {
    setSearchInput(e.target.value);
  }

  const classes = useStyles();
  const [searchInput, setSearchInput] = useState("");
  return (
    <Paper component="form">
      <Toolbar>
        <div className={classes.searchContainer}>
          <TextField
            onChange={handleChange}
            className={classes.searchInput}
            label="Search country"
          ></TextField>
          <IconButton type="submit" onClick={handleSubmit} value={searchInput}>
            <SearchIcon className={classes.searchIcon}></SearchIcon>
          </IconButton>
        </div>
      </Toolbar>
    </Paper>
  );
}
