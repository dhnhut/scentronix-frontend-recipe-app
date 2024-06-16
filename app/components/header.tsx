"use client";

import styles from "./layout.module.css";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Grid, ButtonGroup, Button, Container } from "@mui/material";
import clsx from "clsx";

const links = [
  { name: "Shop", href: "/shop" },
  { name: "Recipes", href: "/recipes" },
  { name: "Learn", href: "/learn" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <Grid container spacing={0}>
      <Grid xs={12}>
        <Container>
          <ButtonGroup
            className={styles.main_menu}
            size="large"
            variant="text"
            aria-label="Basic button group"
          >
            {links.map((link) => {
              return (
                <Button
                  component={Link}
                  key={link.href}
                  sx={{ flexGrow: 1 }}
                  href={link.href}
                  className={clsx(styles.main_menu_button, {
                    selected_menu: pathname === link.href,
                  })}
                >
                  {link.name}
                </Button>
              );
            })}
          </ButtonGroup>
        </Container>
      </Grid>
      <Grid xs={12} sx={{ bgcolor: "#efebe9" }}>
        <Container>
          <ButtonGroup
            className={styles.sub_menu}
            sx={{ display: "flex", flexDirection: "row", width: "100%" }}
            size="medium"
            variant="text"
            aria-label="Basic button group"
          >
            {["Categories", "Collections", "Resources"].map((k) => {
              return (
                <Button key={k} className={styles.sub_menu_button}>
                  {k}
                </Button>
              );
            })}
          </ButtonGroup>
        </Container>
      </Grid>
    </Grid>
  );
}
