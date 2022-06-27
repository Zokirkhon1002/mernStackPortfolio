import React, { useEffect } from "react";
import { Paper, Typography, Divider } from "@material-ui/core/";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useParams, useHistory, Link } from "react-router-dom";
import CommentSection from "./CommentSection";

import useStyles from "./styles";
import { getPost, getPostsBySearch } from "../../actions/posts";
import NewLoader from "../../loader/Loader";

const PostDetails = () => {
  const { post, posts, isLoading } = useSelector((state) => state?.posts);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const { id } = useParams();
  

  useEffect(() => {
    dispatch(getPost(id));
  }, [id, dispatch]);

  useEffect(() => {
    if (post) {
      dispatch(
        getPostsBySearch({ search: "none", tags: post?.tags.join(",") })
      );
    }
  }, [dispatch, post]);

  if (!post) return null;

  const openPost = (_id) => history.push(`/posts/${_id}`);

  if (isLoading) {
    return (
      <Paper elevation={6} className={classes.loadingPaper}>
        <NewLoader />
      </Paper>
    );
  }

  const recommendedPosts = posts.filter(({ _id }) => _id !== post._id);

  document.title = `Post details | ${post.title}`

  return (
    <Paper style={{ padding: "20px", borderRadius: "15px" }} elevation={6}>
      <div className={classes.card}>
        <div className={classes.section}>
          <Typography variant="h3" component="h2">
            {post.title}
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            color="textSecondary"
            component="h2"
          >
            {post.tags.map((tag, idx) => (
              <Link
                key={idx}
                to={`/tags/${tag.trim()}`}
                style={{ textDecoration: "none", color: "#3f51b5" }}
              >
                {` #${tag.trim()} `}
              </Link>
            ))}
          </Typography>
          <Typography className="wordBreak" gutterBottom variant="body1">
            {post.message.split("\n").map((i, index) =>
              i.startsWith("https:") ? (
                <a
                  key={index}
                  // eslint-disable-next-line react/jsx-no-target-blank
                  target="_blank"
                  href={i}
                  style={{ textDecoration: "none", color: "#3f51b5" }}
                >
                  {` ${i} `}
                </a>
              ) : (
                <div>{i}</div>
              )
            )}
          </Typography>
          <Typography variant="h6">
            Created by:
            <Link
              to={`/creators/${post.name}`}
              style={{ textDecoration: "none", color: "#3f51b5" }}
            >
              {` ${post.name}`}
            </Link>
          </Typography>
          <Typography variant="body1">
            created: {moment(post.createdAt).fromNow()}
          </Typography>
          <Divider style={{ margin: "20px 0" }} />
          <Typography variant="body1">
            <strong>Realtime Chat - coming soon!</strong>
          </Typography>
          <Divider style={{ margin: "20px 0" }} />
          <CommentSection post={post} />
          <Divider style={{ margin: "20px 0" }} />
        </div>
        <div className={classes.imageSection}>
          <img
            className={classes.media}
            src={
              post.selectedFile ||
              "https://cdn.theculturetrip.com/wp-content/uploads/2021/04/dnce6n-e1618929428972.jpg"
            }
            alt={post.title}
          />
        </div>
      </div>
      {!!recommendedPosts.length && (
        <div className={classes.section}>
          <Typography style={{ marginTop: "20px" }} gutterBottom variant="h5">
            You might also like:
          </Typography>
          <Divider />
          <div className={classes.recommendedPosts}>
            {recommendedPosts.map(
              ({ title, name, message, likes, selectedFile, _id }) => (
                <div
                  style={{ margin: "20px", cursor: "pointer"}}
                  onClick={() => openPost(_id)}
                  key={_id}
                >
                  <Typography style={{color: '#3f51b5', fontWeight: 'bold'}} gutterBottom variant="h6">
                    {title}
                  </Typography>
                  <Typography style={{color: '#3f51b5', fontWeight: 'bold'}} gutterBottom variant="subtitle2">
                    {name}
                  </Typography>
                  <Typography style={{color:"#3f51b594"}} className="wordBreak" gutterBottom variant="subtitle2">
                    {message.length < 50 ? message: `${message.slice(0,50)}...`}
                  </Typography>
                  <Typography style={{color: '#3f51b5', fontWeight: 'bold'}} gutterBottom variant="subtitle1">
                    Likes: {likes.length}
                  </Typography>
                  <img src={selectedFile || "https://cdn.theculturetrip.com/wp-content/uploads/2021/04/dnce6n-e1618929428972.jpg"} width="200px" alt={title} />
                </div>
              )
            )}
          </div>
        </div>
      )}
    </Paper>
  );
};

export default PostDetails;
