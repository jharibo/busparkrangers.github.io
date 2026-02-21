export interface Scorer {
  player: string;
  goals: number;
}

export interface Assister {
  player: string;
  assists: number;
}

export interface Match {
  id: string;
  date: string;
  season: string;
  opponent: string;
  venue: 'home' | 'away' | 'neutral';
  score: { us: number; them: number };
  squad: string[];
  scorers: Scorer[];
  assisters: Assister[];
  mom: string | null;
  report: string | null;
}

export interface Player {
  id: string;
  name: string;
  number: number;
  position: string;
  joined: string;
  bio: string;
}

export function result(score: { us: number; them: number }): 'W' | 'D' | 'L' {
  if (score.us > score.them) return 'W';
  if (score.us === score.them) return 'D';
  return 'L';
}

export function resultLabel(r: 'W' | 'D' | 'L') {
  return r === 'W' ? 'WIN' : r === 'D' ? 'DRAW' : 'LOSS';
}

export function resultClass(r: 'W' | 'D' | 'L') {
  if (r === 'W') return 'bg-green-900/40 text-green-400';
  if (r === 'D') return 'bg-yellow-900/40 text-yellow-400';
  return 'bg-red-900/40 text-red-400';
}

export function getSeasons(matches: Match[]): string[] {
  return [...new Set(matches.map((m) => m.season))].sort().reverse();
}

export function getPlayerStats(playerId: string, matches: Match[], season?: string) {
  const ms = season ? matches.filter((m) => m.season === season) : matches;
  const goals = ms.reduce(
    (acc, m) => acc + (m.scorers.find((s) => s.player === playerId)?.goals ?? 0),
    0
  );
  const assists = ms.reduce(
    (acc, m) => acc + (m.assisters.find((a) => a.player === playerId)?.assists ?? 0),
    0
  );
  const moms = ms.filter((m) => m.mom === playerId).length;
  const appearances = ms.filter((m) => m.squad.includes(playerId)).length;
  return { goals, assists, moms, appearances };
}

export function formatDate(dateStr: string): string {
  const [y, mo, d] = dateStr.split('-').map(Number);
  return new Date(y, mo - 1, d).toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export function shortDate(dateStr: string): string {
  const [y, mo, d] = dateStr.split('-').map(Number);
  return new Date(y, mo - 1, d).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}
