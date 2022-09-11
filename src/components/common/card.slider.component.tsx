import { Grid } from "@nextui-org/react";
import { useRef, useState, ReactNode } from "react";

function CardSlider(props: {
  cards: ReactNode[];
  initialIndex: number;
}) {
  const [selectedIndex, setSelectedIndex] = useState(props.initialIndex);
  const selectedCardRef = useRef<HTMLDivElement>(null);

  return (
    <div style={
      {
        display: "flex",
        overflowX: "auto",
        position: "relative",
      }
    }>
      {props.cards.map((card, index) => {
        
        const style = index === selectedIndex ?
          { margin: 0, boxSizing: "border-box", } :
          {
            boxSizing: "border-box",
            opacity: 0.5,
            transform: "scale(0.8)",
            transition: "all 0.3s ease-in-out",
          };

        return <Grid
          key={index}
          css={style}
          sm
          id={"card-" + index}
          ref={index === selectedIndex ? selectedCardRef : undefined}
          onClick={(event) => {
            const el: any = event.target as HTMLElement;
            if(el.scrollIntoViewIfNeeded) {
              event.preventDefault();
              el.scrollIntoViewIfNeeded();
            } else if(el.scrollIntoView) {
              event.preventDefault();
              el.scrollIntoView()
            }

            setSelectedIndex(index);
          }}>
          {card}
        </Grid>;
      })} 
    </div>
  )
}

export default CardSlider;