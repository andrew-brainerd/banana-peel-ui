import { connect } from 'react-redux';
import { sendInvite, createGame } from '../../../actions/game';
import { VERSUS_GAME } from '../../../constants/game';
import PlayerSelection from './PlayerSelection';

const mapDispatchToProps = dispatch => ({
  sendInvite: to => dispatch(sendInvite(to)),
  createVersusGame: () => dispatch(createGame(VERSUS_GAME))
});

export default connect(null, mapDispatchToProps)(PlayerSelection);
