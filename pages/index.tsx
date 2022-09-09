import { Button, Text } from '@nextui-org/react'
import type { NextPage } from 'next'
import NextLink from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <Text h2>Inteligencia artificial</Text>
      <Text>Prueba las inteligencias artificiales</Text>
      <NextLink href="herramientas"><Button>Ver herramientas</Button></NextLink>
      <NextLink href="genios"><Button bordered color="gradient">Revivir genios</Button></NextLink>
    </div>
  )
}

export default Home
