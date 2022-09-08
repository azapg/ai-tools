import {Button, Link, Navbar, Text} from "@nextui-org/react";
import NextLink from 'next/link'
import { useRouter } from 'next/router'

function NavbarLink({ href, text }: { href: string, text: string }) {
  const router = useRouter();
  return (
    <NextLink href={href}>
      <Navbar.Link isActive={router.pathname === href}>{text}</Navbar.Link>
    </NextLink>
  )
}

function Navigation() {
  return (
    <Navbar isBordered isCompact variant="floating">
      <Navbar.Content >
        <NavbarLink href="/" text="Inicio" />
        <NavbarLink href="/herramientas" text="Herramientas" />
        <NavbarLink href="/genios" text="Genios" />
        <NavbarLink href="/recursos" text="Recursos" />
      </Navbar.Content>
    </Navbar>
  )
}

export default Navigation;