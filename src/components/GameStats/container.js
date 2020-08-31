import { connect } from 'react-redux';
import { getGameId } from '../../selectors/routing';
import { getSelectedGameStats } from '../../selectors/game';
import { loadGame } from '../../actions/game';
import GameStats from './GameStats';

const mapStateToProps = state => ({
  gameId: getGameId(state),
  stats: getSelectedGameStats(state)
});

const mapDispatchToProps = dispatch => ({
  loadGame: gameId => dispatch(loadGame(gameId))
});

export default connect(mapStateToProps, mapDispatchToProps)(GameStats);
