/* eslint-disable import/order */
/* eslint-disable quotes */
/* eslint-disable import/no-unresolved */
import React, { useState } from "react";
import useStyles from "./styles";
import {
  Container,
  Grid,
  Grow,
  Paper,
  AppBar,
  TextField,
  Button,
} from "@material-ui/core";
import { useHistory, useLocation } from "react-router-dom";
import Posts from "../Posts/Posts";
import Paginate from "../Pagination";
import Form from "../Form/Form";
import { useDispatch } from "react-redux";
import { getPostsBySearch } from "../../actions/posts";
import ChipInput from "material-ui-chip-input";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
  const classes = useStyles();
  const query = useQuery();
  const history = useHistory();
  const page = query.get("page") || 1;
  const searchQuery = query.get("searchquery");
  const [searchValue, setSearchValue] = useState("");
  const [searchTags, setSearchTags] = useState([]);

  // useEffect(() => {
  //   dispatch(getPosts());
  // }, [currentId, dispatch]);

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      // search post
      handleSearchPost();
    }
  };

  const handleAddTag = (tag) => {
    setSearchTags([...searchTags, tag]);
  };

  const handleDeleteTag = (tagDelete) => {
    setSearchTags(searchTags.filter((tag) => tag !== tagDelete));
  };

  const handleSearchPost = () => {
    if (searchValue.trim() || searchTags) {
      // dispatch => fetch search post
      dispatch(
        getPostsBySearch({ search: searchValue, tags: searchTags.join(",") })
      );
      history.push(
        `/posts/search?searchQuery=${
          searchValue || "none"
        }&tags=${searchTags.join(",")}`
      );
    } else {
      history.push("/");
    }
  };

  return (
    <Grow in>
      <Container maxWidth="xl">
        <Grid
          className={classes.gridContainer}
          container
          justify="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={6} md={9}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppBar
              className={classes.appBarSearch}
              position="static"
              color="inherit"
            >
              <TextField
                name="search"
                variant="outlined"
                label="Search Memories"
                onKeyPress={handleKeyPress}
                fullWidth
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                autoComplete="off"
              />
              <ChipInput
                style={{ margin: "10px 0" }}
                value={searchTags}
                onAdd={handleAddTag}
                onDelete={handleDeleteTag}
                label="Search Tags"
                variant="outlined"
              />
              <Button
                className={classes.searchButton}
                color="primary"
                onClick={handleSearchPost}
                variant="contained"
              >
                Search
              </Button>
            </AppBar>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
            {!searchQuery && !searchTags.length && (
              <Paper className={classes.pagination} elevation={6}>
                <Paginate page={page} />
              </Paper>
            )}
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
