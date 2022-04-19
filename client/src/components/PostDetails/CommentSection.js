import React, { useState, useRef, useEffect } from "react";
import { Typography, TextField, Button } from "@material-ui/core/";
import { useDispatch } from "react-redux";

import useStyles from "./styles";
import { commentPost } from "../../actions/posts";

const CommentSection = ({ post }) => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();
  const classes = useStyles();
  const commentsRef = useRef();

  // useEffect(() => {
  //   if (commentsRef.current) {
  //     commentsRef.current.scrollIntoView({
  //       block: "end",
  //       behavior: "smooth",
  //     });
  //   }
  // });

  const [comments, setComments] = useState(post?.comments);
  const [comment, setComment] = useState("");

  const handleSubmitComment = async () => {
    const finalComment = `${user.result.name}: ${comment}`;

    const newComments = await dispatch(commentPost(finalComment, post._id));
    setComments(newComments);
    setComment("");

    commentsRef.current.scrollIntoView({
            block: "end",
            behavior: "smooth",
          });

  };

  const ctrlPlusEnter = (e) => {
    if(e.ctrlKey && e.keyCode === 13){
      handleSubmitComment();
    }
  }

  return (
    <div>
      <div className={classes.commentsOuterContainer}>
        <div
          style={{ width: "35%" }}
          className={classes.commentsInnerContainer}
        >
          <Typography gutterBottom variant="h6">
            Comments
          </Typography>
          {comments?.map((c, i) => (
            <Typography
              ref={commentsRef}
              key={i}
              gutterBottom
              variant="subtitle1"
            >
              <strong>{c.split(': ')[0]}</strong>
              {c.split(':')[1]}
            </Typography>
          ))}
        </div>
        {user?.result?.name && (
          <div style={{ width: "65%" }}>
            <Typography gutterBottom variant="h6">
              Write a Comment
            </Typography>
            <TextField
              fullWidth
              rows={4}
              variant="outlined"
              label="Comment"
              multiline
              onKeyDown={ctrlPlusEnter}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <Button
              onClick={handleSubmitComment}
              color="primary"
              style={{ marginTop: "10px" }}
              fullWidth
              disabled={!comment}
              variant="contained"
            >
              Comment
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentSection;
