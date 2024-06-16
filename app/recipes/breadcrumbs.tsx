import { Breadcrumbs, Link, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export default function BreadcrumbsComponent() {
  return (
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
  );
}
