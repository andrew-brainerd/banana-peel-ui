import { connect } from 'react-redux';
import { getUsername } from '../../../selectors/routing';
import { getIsLoadingUser } from '../../../selectors/user';
import { getIsLoadingGames, getPlayerGames } from '../../../selectors/game';
import { loadPlayerGames } from '../../../actions/game';
import PlayerGames from './PlayerGames';

const mapStateToProps = state => ({
  username: getUsername(state),
  isLoadingUser: getIsLoadingUser(state),
  isLoadingGames: getIsLoadingGames(state),
  games: getPlayerGames(state)
});

const mapDispatchToProps = dispatch => ({
  loadPlayerGames: username => dispatch(loadPlayerGames(username))
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayerGames);
