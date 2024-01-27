import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "./ui/hover-card";

function NewFeature() {
  return (
    <HoverCard openDelay={0}>
      <HoverCardTrigger>a</HoverCardTrigger>
      <HoverCardContent>
        Tes
      </HoverCardContent>
    </HoverCard>
  );
}

export default NewFeature;
