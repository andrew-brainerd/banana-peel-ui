import { connect } from 'react-redux';
import { setCurrentUser } from '../../actions/user';
import Header from './Header';
import { getCurrentUser } from '../../selectors/user';

const mapStateToProps = state => ({
  currentUser: getCurrentUser(state)
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: email => dispatch(setCurrentUser(email))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
