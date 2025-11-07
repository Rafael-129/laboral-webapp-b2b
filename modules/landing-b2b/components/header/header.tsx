"use client";

import React from "react";
// import Logo from "@/modules/shared/components/icons/Logo"; // Comentado temporalmente
import { Button } from "@nextui-org/button";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar maxWidth="2xl" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          {/* <Logo fill="#3461FF" /> */}
          <span className="text-2xl font-bold text-blue-600">TuLogo</span>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden md:block">
          <Link color="foreground" href="#header">
            Empresas
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden md:block">
          <Link href="">Blog/Empresas</Link>
        </NavbarItem>
        <NavbarItem className="hidden md:block">
          <Link href="">Inicio/Postulantes</Link>
        </NavbarItem>

        <NavbarItem className="hidden md:block">
          <Button
            as={Link}
            color="primary"
            href="/app/login"
            radius="full"
            variant="flat"
          >
            Ingresar
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem>
          <Link href="#">Login</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
