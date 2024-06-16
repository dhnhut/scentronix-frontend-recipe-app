"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Grid, Box, ButtonGroup, Button, Container } from "@mui/material";
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
          {/* <Image src="logo.svg" width={100} height={100} /> */}
          <ButtonGroup
            size="large"
            variant="text"
            aria-label="Basic button group"
          >
            {links.map((link) => {
              return (
                <Button component={Link} key={link.href} sx={{ flexGrow: 1 }} href={link.href} className={clsx({
                  "selected": pathname === link.href,
                })}>
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
            sx={{ display: "flex", flexDirection: "row", width: "100%" }}
            size="medium"
            variant="text"
            aria-label="Basic button group"
          >
            <Button>Categories</Button>
            <Button>Collections</Button>
            <Button>Resources</Button>
          </ButtonGroup>
        </Container>
      </Grid>
    </Grid>
  );
}
