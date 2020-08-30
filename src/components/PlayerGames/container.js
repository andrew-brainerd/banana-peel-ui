import { connect } from 'react-redux';
import { getConnectCode } from '../../selectors/routing';
import { getIsLoadingUser } from '../../selectors/user';
import { getIsLoadingGames, getPlayerGames } from '../../selectors/game';
import { loadPlayerGames } from '../../actions/game';
import PlayerGames from './PlayerGames';

const mapStateToProps = state => ({
  connectCode: getConnectCode(state),
  isLoadingUser: getIsLoadingUser(state),
  isLoadingGames: getIsLoadingGames(state),
  games: getPlayerGames(state)
});

const mapDispatchToProps = dispatch => ({
  loadPlayerGames: connectCode => dispatch(loadPlayerGames(connectCode))
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayerGames);
