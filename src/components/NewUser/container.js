import { connect } from 'react-redux';
import { getIsCheckingUsername, getIsUsernameAvailable } from '../../selectors/user';
import { checkUsername, createUser } from '../../actions/user';
import NewUser from './NewUser';

const mapStateToProps = state => ({
  isCheckingUsername: getIsCheckingUsername(state),
  isUsernameAvailable: getIsUsernameAvailable(state)
});

const mapDispatchToProps = dispatch => ({
  checkUsername: username => dispatch(checkUsername(username)),
  createUser: username => dispatch(createUser(username))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewUser);
