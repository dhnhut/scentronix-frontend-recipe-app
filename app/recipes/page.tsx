import React from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import Masonry from "@mui/lab/Masonry";
import { CardActionArea } from "@mui/material";
import { fetchRecipes } from "../libs/data";

import styles from "./layout.module.css";

export default async function RecipesPage() {
  const recipes = await fetchRecipes();
  return (
    <Box className={styles.content}>
      <Masonry columns={3} spacing={5}>
        {recipes.map((item, index) => (
          <Card key={index}>
            <CardActionArea href={`/recipes/${item.id}`}>
              <CardMedia
                component="img"
                height="194"
                image={item.image_url}
                alt={item.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.quick_description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Masonry>
    </Box>
  );
}
