import { Button, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { useTranslation } from "react-i18next";
import { GetNewPostType } from "../../api/post_api";



export const CardNews = (props: CardNewsType) => {
  const { postData, onDeletePost } = props;
  const { t } = useTranslation();
  return (
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
  );
};
type CardNewsType = {
  postData: GetNewPostType[];
  onDeletePost: (id: number) => void;
};
