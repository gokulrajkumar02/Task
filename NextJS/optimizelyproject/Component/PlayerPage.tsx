import { Player } from "@/app/TeamSelection/page";
import { internationalCricketData } from "@/DB/Player";

const PlayerPage = () => {
    const internationalPlayers = internationalCricketData[1].players
  return (
    <div className="w-[20%] gap-3">
        {internationalPlayers.map ((players : Player) => {
            return <div key={players.id} className="flex">
                <h1>{players.name}</h1>
                <h1> - {players.role}</h1>
            </div>
        })}
        
    </div>
  )
}

export default PlayerPage
