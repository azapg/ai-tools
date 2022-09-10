import { Spacer, Text } from '@nextui-org/react';
import PlatoChat from '../components/geniuses/plato.chat.component';

function GeniusesPage() {
  return (
    <div>
      <Text h1 css={{ lineHeight: "50px" }}>Habla con genios de la historia</Text>
      <Text color="$gray800">Puedes hablar con genios de la historia, preguntarles sobre sus vidas, sobre ciencia, historia, arte o cualquier cosa que te interese.</Text>
      
      <Spacer y={1} />

      <PlatoChat />
    </div>
  )
}

export default GeniusesPage;