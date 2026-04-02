import { Player } from "@/app/TeamSelection/page";
import React from "react";
type PlayerCardProps = {
  player: Player;
};
const PlayerFilter = ({ player }: PlayerCardProps) => {
    
  console.log("Child Rerendering");

  return (
    <div className="p-2 border rounded m-2 w-[20%]">
      {player.name} - {player.role}
    </div>
  );
};

export default React.memo(PlayerFilter);
