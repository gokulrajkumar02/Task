import { Player } from "@/app/TeamSelection/page";
import { useLeague } from "@/Context/LeagueContext";
import type { SelectLeague } from "@/Context/LeagueContext";


 // type Role = {
  //   AR: number,
  //   Batter : number,
  //   Bowler : number,
  //   WK:number
  // } 
  
const roleCount: any = {
  AR: 0,
  Batter: 0,
  Bowler: 0,
  WK: 0,
  total: 0,
};

const resetCounter = () => {
  roleCount.AR = 0;
  roleCount.Batter = 0;
  roleCount.Bowler = 0;
  roleCount.WK = 0;
  roleCount.total = 0;
};

const checkPlayingXI = (playingXI: (Player | null)[]) => {
  resetCounter();
  playingXI.forEach((player) => {
    if (player?.role) {
      roleCount[player.role]++;
      roleCount.total++;
    }
  });

  if (roleCount.total != 11) {
    alert("Select 11 players");
    return false;
  }
  if (roleCount.WK < 1) {
    alert("One Wicket Keeper Required");
    return false;
  }
  const totalBatting = roleCount.Batter + roleCount.AR + roleCount.WK;
  const hasBatting = totalBatting >= 3;
  if (!hasBatting) {
    alert("Atleast two Batter required with Allrounders");
    return false;
  }
  const totalBowling = roleCount.Bowler + roleCount.AR;
  const hasBowling = totalBowling >= 5;

  if (!hasBowling) {
    alert("Atleast 5 bowler required with Allrounders");
    return false;
  }

  const totalAllRounder = roleCount.AR;
  if (!(totalAllRounder >= 1)) {
    alert("Team Required atleast one AllRounder");
    return false;
  }

  return true;
};

export default checkPlayingXI;
