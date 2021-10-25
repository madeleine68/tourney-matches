import Player from './Player';
import { preparePlayerData, addWinsToPlayers } from '../helpers/playerHelpers';
// import matchData from '../data/matchData';
// import playerData from '../data/playerData';

function PlayerList (props) {
  const { z, y  } = props;

  const playerDataArray = preparePlayerData(y);
  const parsedPlayerData = addWinsToPlayers(playerDataArray, z);

  const parsedPlayers = parsedPlayerData.map(player => <Player key={player.gamerTag} {...player} />);


    return (
      <section className="PlayerList">
        <h1>Current participating players</h1>
        { parsedPlayers }
      </section>
    );
  }

  export default PlayerList;