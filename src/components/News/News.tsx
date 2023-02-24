import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deletePost,
  getNewPost,
  getPost,
} from "../../redux/PostReducer/post_reducer";
import { getPostDataSelector } from "../../redux/PostReducer/post_selector";
import { AppDispatch } from "../../redux/store";
import { useTranslation } from "react-i18next";
import { DownloadButton } from "./DownloadButton";
import { CardNews } from "./CardNews";

const News = () => {
  /*  start */
  const { t } = useTranslation();
  const dispatch: AppDispatch = useDispatch();
  //get data
  const postData = useSelector(getPostDataSelector);
  // post number
  const [postNumber, setPostNumber] = useState(1);
  /* get post  */
  useEffect(() => {
    dispatch(getPost(postNumber));
    return () => {};
  }, []);
  // get more posts
  const onGetPost = (numberPost: number) => {
    dispatch(getNewPost(numberPost));
    setPostNumber(numberPost);
  };
  // delete post
  const onDeletePost = (numberPost: number) => {
    dispatch(deletePost(numberPost));
    setPostNumber(numberPost);
  };
  //return
  return (
    <Container>
      {/*  title */}
      <Typography variant="h3" component="h1" gutterBottom>
        {t("News")}
      </Typography>
      {/*  content */}
      {postData.length > 0 && (
        <CardNews postData={postData} onDeletePost={onDeletePost} />
      )}
      {/* no find nothing */}
      {postData.length === 0 && <Box>{t("No find posts")}</Box>}
      {/* button */}
      {postData.length > 0 && (
        <DownloadButton onGetPost={onGetPost} postNumber={postNumber} />
      )}
    </Container>
  );
};

export default News;



