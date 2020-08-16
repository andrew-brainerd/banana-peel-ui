import { connect } from 'react-redux';
import { getIsLoadingUser } from '../../../selectors/user';
import { getIsLoadingGames, getPlayerGames } from '../../../selectors/game';
import { loadPlayerGames } from '../../../actions/game';
import { navTo } from '../../../actions/routing';
import PlayerGames from './PlayerGames';

const mapStateToProps = state => ({
  isLoadingUser: getIsLoadingUser(state),
  isLoadingGames: getIsLoadingGames(state),
  games: getPlayerGames(state)
});

const mapDispatchToProps = dispatch => ({
  loadPlayerGames: () => dispatch(loadPlayerGames()),
  navTo: path => dispatch(navTo(path))
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayerGames);
