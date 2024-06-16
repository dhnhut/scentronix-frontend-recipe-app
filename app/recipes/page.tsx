import Image from "next/image";
import { Box, Grid } from "@mui/material";
import BreadcrumbsComponent from "./breadcrumbs";
import RecipesCardComponent from "./recipes-card";

export default function RecipesPage() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <BreadcrumbsComponent />
        <RecipesCardComponent />
      </Grid>
      <Grid
        item
        xs={6}
        style={{ width: "100%", position: "relative", verticalAlign: "top" }}
      >
        <Image alt="Mountains" src="/cake.webp" fill objectFit="contain" />
      </Grid>
    </Grid>
  );
}
