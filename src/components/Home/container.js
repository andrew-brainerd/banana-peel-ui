import { connect } from 'react-redux';
import { getIsLoadingUser } from '../../selectors/user';
import Home from './Home';

const mapStateToProps = state => ({
  isLoadingUser: getIsLoadingUser(state)
});

export default connect(mapStateToProps)(Home);
