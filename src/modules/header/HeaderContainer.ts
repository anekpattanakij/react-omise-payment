import { connect } from 'react-redux';
import { State } from '../../redux/reducer';
import HeaderView, {
  IHeaderState,
  IHeaderDispatch,
  IHeaderProps,
} from './HeaderView';

export default connect<IHeaderState, IHeaderDispatch, IHeaderProps>(
  () => ({}),
  {},
)(HeaderView);
