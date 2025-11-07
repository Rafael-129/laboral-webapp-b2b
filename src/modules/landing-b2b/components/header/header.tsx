"use client";

import React from "react";
import Logo from "@/src/modules/shared/components/icons/Logo";
import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import Link from "next/link";
import { motion } from "framer-motion";

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
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Logo fill="#3461FF" />
          </motion.div>
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
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Button
              as={Link}
              color="primary"
              href="/app/login"
              radius="full"
              variant="flat"
            >
              Ingresar
            </Button>
          </motion.div>
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
