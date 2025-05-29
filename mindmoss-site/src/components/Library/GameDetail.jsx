import { useParams } from "react-router-dom";

export default function GameDetail() {
  const { gameId } = useParams();
  return <div>Details for game: {gameId}</div>;
}
