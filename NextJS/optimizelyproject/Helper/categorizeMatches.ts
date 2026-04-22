import { Match } from "@/DB/District";

export const categorizeMatches = (matches: Match[]) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const ONE_DAY = 24 * 60 * 60 * 1000;

  return matches.reduce(
    (acc, match) => {
      const matchDate = new Date(match.date);
      matchDate.setHours(0, 0, 0, 0);

      const diffDays = Math.floor(
        (matchDate.getTime() - today.getTime()) / ONE_DAY,
      );

      if (diffDays >= 0 && diffDays <= 7) {
        acc.ticketOnSale.push(match);
      } else if (diffDays > 7 && diffDays <= 14) {
        acc.upcoming.push(match);
      } else if (diffDays > 14) {
        acc.saleStartsSoon.push(match);
      }

      return acc;
    },
    {
      ticketOnSale: [] as Match[],
      upcoming: [] as Match[],
      saleStartsSoon: [] as Match[],
    },
  );
};