import { Avatar, Grid, Navbar, Spacer, Text } from "@nextui-org/react";
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";

function NavbarLink({
  href,
  text
}: { href: string, text: string }) {
  const router = useRouter();
  return (
    <NextLink href={href}>
      <Navbar.Link
        isActive={router.pathname === href}
        variant="underline">
        {text}
      </Navbar.Link>
    </NextLink >
  )
}

function Navigation() {
  const router = useRouter();

  const [avatarIndex, setAvatarIndex] = useState(0);
  const geniusesAvatars = [
    "https://upload.wikimedia.org/wikipedia/commons/e/e9/Albert-einstein-profile-picture-512x512.png.cf.png",
    "https://play-lh.googleusercontent.com/OGmSJWcggXr5ZAn9tg0LqQJ6A_STanYzJWUP4nLD7lLSxcF2KXLx_PuaY3AjchAh9Uo",
    "https://m.media-amazon.com/images/I/71N9j7P8Q8L._AC_SL1260_.jpg"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setAvatarIndex((prevIndex) => (prevIndex + 1) % geniusesAvatars.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [geniusesAvatars.length]);

  return (
    <Navbar isBordered isCompact variant="floating">
      <Navbar.Content />
      <Navbar.Content>
        <NavbarLink href="/" text="Inicio" />
        <NavbarLink href="/herramientas" text="Herramientas" />
        <NextLink href="/genios">
          <Navbar.Link
            isActive={router.pathname === "/genios"}
            variant="underline"
            css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%", padding: 0, margin: 0 }}>
            <Grid xs>
              <Avatar size="sm" squared bordered color="success" src={geniusesAvatars[avatarIndex]} />
              <Spacer x={0.3} />
            </Grid>
            <Text b>Genios</Text>
          </Navbar.Link>
        </NextLink>
        {/* <NavbarLink href="/recursos" text="Recursos" /> */}
      </Navbar.Content>
      <Navbar.Content />
    </Navbar >
  )
}

export default Navigation;