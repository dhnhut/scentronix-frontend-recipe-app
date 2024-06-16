import Image from "next/image";
import { Box, Breadcrumbs, Button, Divider, Grid, Link, List, ListItem, ListItemIcon, ListItemText, Stack, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AddIcon from "@mui/icons-material/Add";
import PrinterIcon from "@mui/icons-material/PrintOutlined";
import GroupWorkIcon from "@mui/icons-material/GroupWorkOutlined";
import { fetchRecipeDetail } from "../../libs/data";

import styles from "../layout.module.css";

export default async function RecipesPage({ params }: { params: { id: string } }) {
  const primaryTypography = { fontWeight: "thinner", fontSize: "small" };
  const secondaryTypography = { fontSize: "large" };
  const recipe = await fetchRecipeDetail(params.id);
  
  return (
    <Grid container className={styles.content}>
      <Grid item xs={6} padding={2}>
        <Breadcrumbs
          aria-label="breadcrumb"
          separator={<NavigateNextIcon fontSize="small" />}
        >
          <Link underline="hover" color="inherit" href="#">
            Receipes
          </Link>
          <Link underline="hover" color="inherit" href="#">
            Bread
          </Link>
          <Typography color="text.primary">Quick Bread</Typography>
        </Breadcrumbs>
        <Typography variant="h3" gutterBottom>
          {recipe.name}
        </Typography>
        <p style={{ fontWeight: "light" }}>{recipe.description}</p>
        <List
          sx={{
            bgcolor: "background.paper",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <ListItem>
            <ListItemIcon>
              <AccessTimeIcon fontSize="large" />
            </ListItemIcon>
            <ListItemText
              primary="PREP"
              secondary={recipe.preparation_time}
              primaryTypographyProps={primaryTypography}
              secondaryTypographyProps={secondaryTypography}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="BAKE"
              secondary={recipe.bake_time}
              primaryTypographyProps={primaryTypography}
              secondaryTypographyProps={secondaryTypography}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="TOTAL"
              secondary={recipe.total_time}
              primaryTypographyProps={primaryTypography}
              secondaryTypographyProps={secondaryTypography}
            />
          </ListItem>
        </List>
        <Divider />
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <List
            sx={{
              bgcolor: "background.paper",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <ListItem>
              <ListItemIcon>
                <GroupWorkIcon fontSize="large" />
              </ListItemIcon>
              <ListItemText
                primary="Yield"
                secondary="1 loaf, 12 generois serving"
                primaryTypographyProps={primaryTypography}
                secondaryTypographyProps={secondaryTypography}
              />
            </ListItem>
          </List>
          <Button variant="outlined" startIcon={<AddIcon />} size="small">
            Save recipe
          </Button>
          <Button variant="outlined" startIcon={<PrinterIcon />} size="small">
            Print
          </Button>
        </Stack>
      </Grid>
      <Grid
        item
        xs={6}
        style={{ width: "100%", position: "relative", verticalAlign: "top" }}
      >
        <Image alt="Mountains" src={recipe.image_url} fill objectFit="contain" />
      </Grid>
    </Grid>
  );
}
