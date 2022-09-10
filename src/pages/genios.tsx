import { Spacer, Text } from '@nextui-org/react';
import FigureTalk from '../components/geniuses/simple.figure.chat.component';

function GeniusesPage() {
  return (
    <div>
      <Text h1 css={{ lineHeight: "50px" }}>Habla con genios de la historia</Text>
      <Text color="$gray800">Puedes hablar con los mayores genios de la historia incluyendo científicos, artistas y algunas celebridades. Prueba preguntarles sobre sus vidas, ciencia, historia, arte o cualquier cosa que te interese.</Text>
      <Spacer y={1} />
      <FigureTalk with="einstein" />
    </div>
  )
}

export default GeniusesPage;