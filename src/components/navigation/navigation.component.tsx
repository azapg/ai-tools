import {Navbar, Text} from "@nextui-org/react";
import NextLink from 'next/link'
import {useRouter} from 'next/router'

function NavbarLink({
                      href,
                      text,
                      gradient,
                      bold = false
                    }: { href: string, text: string, gradient?: string, bold?: boolean }) {
  const router = useRouter();
  const style = gradient !== undefined ? { textGradient: gradient } : undefined;
  return (
    <NextLink href={href}>
      <Navbar.Link
        isActive={router.pathname === href}
        variant="underline"
        css={style}>
        {bold ? <Text b>{text}</Text> : text}
      </Navbar.Link>
    </NextLink>
  )
}

function Navigation() {
  return (
    <Navbar isBordered isCompact variant="floating">
      <Navbar.Content/>
      <Navbar.Content>
        <NavbarLink href="/" text="Inicio"/>
        <NavbarLink href="/herramientas" text="Herramientas"/>
        <NavbarLink href="/genios" text="Genios" gradient="45deg, $blue600 -20%, $pink600 50%" bold/>
        <NavbarLink href="/recursos" text="Recursos"/>
      </Navbar.Content>
      <Navbar.Content/>
    </Navbar>
  )
}

export default Navigation;