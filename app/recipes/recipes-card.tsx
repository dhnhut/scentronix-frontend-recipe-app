import {
  Button,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AddIcon from "@mui/icons-material/Add";
import PrinterIcon from "@mui/icons-material/PrintOutlined";
import GroupWorkIcon from '@mui/icons-material/GroupWorkOutlined';

export default function RecipesDetailComponent() {
  const primaryTypography = { fontWeight: "thinner", fontSize: "small",};
  const secondaryTypography = { fontSize: "large" };
  return (
    <>
      <Typography variant="h3" gutterBottom>
        Whole-Gain Banana Bread
      </Typography>
      <p style={{fontWeight: 'light'}}>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
        corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
        quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
        voluptas nulla pariatur?
      </p>
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
            primary="Photos"
            secondary="Jan 9, 2014"
            primaryTypographyProps={primaryTypography}
            secondaryTypographyProps={secondaryTypography}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Work"
            secondary="Jan 7, 2014"
            primaryTypographyProps={primaryTypography}
            secondaryTypographyProps={secondaryTypography}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Vacation"
            secondary="July 20, 2014"
            primaryTypographyProps={primaryTypography}
            secondaryTypographyProps={secondaryTypography}
          />
        </ListItem>
      </List>
      <Divider/>
      <Stack direction="row" justifyContent="space-between" alignItems="center">

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
      <Button variant="outlined" startIcon={<AddIcon />} size="small">Save recipe</Button>
      <Button variant="outlined" startIcon={<PrinterIcon />} size="small">Print</Button>
      </Stack>
    </>
  );
}
