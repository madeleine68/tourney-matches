import Player from './Player';

function PlayerList () {
    return (
      <section className="PlayerList">
        <h1>Current participating players</h1>
        <Player/>
        {/* Players will be shown here */}
      </section>
    );
  }

  export default PlayerList;