import { Button, Text } from '@nextui-org/react'
import type { NextPage } from 'next'
import Link from 'next/Link'

const Home: NextPage = () => {
  return (
    <div>
      <Text h2>Inteligencia artificial</Text>
      <Text>Prueba las inteligencias artificiales</Text>
      <Link href="herramientas"><Button>Ver herramientas</Button></Link>
      <Button bordered color="gradient">Revivir genios</Button>
    </div>
  )
}

export default Home
