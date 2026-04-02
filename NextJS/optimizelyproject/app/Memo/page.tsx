"use client";
import { Suspense, useMemo, useState, lazy } from "react";
import { internationalCricketData } from "@/DB/Player";
import { Player } from "../TeamSelection/page";
import PlayerFilter from "@/Component/PlayerFilter";

const PlayerPage = lazy(() => import("@/Component/PlayerPage"));

const Memo = () => {
  const [selectedRole, setSelectedRole] = useState("Batter");
  const [showPlayer, setShowPlayer] = useState(false);


  const useTopBatters = (players: Player[]) => {
    return useMemo(() => {
      return [...players]
        .filter((p) => p.role === "Batter")
        .sort((a, b) => b.batting - a.batting);
    }, [players]);
  };


  const filteredPlayers = useMemo(() => {
    console.log("Filtering...");
    return internationalCricketData[0].players.filter(
      (p: Player) => p.role === selectedRole,
    );
  }, [selectedRole]); 


  const topBatters = useTopBatters(internationalCricketData[0].players);

  return (
    <div className="w-full">
      <h1 className="text-[30px]">MEMO</h1>
      <button
        onClick={() => setSelectedRole("Batter")}
        className="border p-2 m-2 hover:cursor-pointer"
      >
        Batter
      </button>
      <button
        onClick={() => setSelectedRole("Bowler")}
        className="border p-2 m-2 hover:cursor-pointer"
      >
        Bowler
      </button>

      {filteredPlayers &&
        filteredPlayers.map((player: Player) => (
          <PlayerFilter key={player.id} player={player} />
        ))}
      <hr />

      <h1 className="text-[30px]">LAZY LOADING</h1>
      <button
        onClick={() => setShowPlayer(!showPlayer)}
        className="border p-2 m-2"
      >
        {showPlayer ? "Hide" : "Show"}
      </button>

      {showPlayer && (
        <Suspense fallback={<p>Loading...</p>}>
          <PlayerPage />
        </Suspense>
      )}

      <hr />
      <h1 className="text-[30px]">Separation of UI logic vs business logic</h1>
      <div>
        {topBatters.map((items) => {
          return (
            <div key={items.id} className="flex gap-x-3">
              <h1>{items.name}</h1>
              <h1>Batting :{items.batting}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Memo;
