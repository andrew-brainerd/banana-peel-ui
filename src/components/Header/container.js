import { connect } from 'react-redux';
import { setCurrentUser } from '../../actions/user';
import Header from './Header';

const mapDispatchToProps = dispatch => ({
  setCurrentUser: email => dispatch(setCurrentUser(email))
});

export default connect(null, mapDispatchToProps)(Header);
