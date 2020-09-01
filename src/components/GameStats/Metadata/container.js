import { connect } from 'react-redux';
import { getStageId } from '../../../selectors/game';
import Metadata from './Metadata';

const mapStateToProps = state => ({
  stageId: getStageId(state)
});

export default connect(mapStateToProps)(Metadata);
