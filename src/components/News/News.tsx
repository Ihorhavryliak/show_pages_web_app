import { Button, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
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
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { useTranslation } from "react-i18next";

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
        <Grid2>
          {postData.map((post) => {
            return (
              <Card sx={{ marginBottom: 3 }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {post.body}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={() => onDeletePost(post.id)}>
                     {t("Delete post")}
                  </Button>
                </CardActions>
              </Card>
            );
          })}
        </Grid2>
      )}
      {/* no find nothing */}
      {postData.length === 0 && <Box>{t("No find posts")}</Box>}

      {/* button */}
      {postData.length > 0 && (
        <Box sx={{textAlign: 'center', mt: 2}}>
  
            <Button
              variant="outlined"
              size="medium"
              onClick={() => onGetPost(postNumber + 1)}
            >
              {t("Download yet")}
            </Button>

        </Box>
      )}
    </Container>
  );
};

export default News;
