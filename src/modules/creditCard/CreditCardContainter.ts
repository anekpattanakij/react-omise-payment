import { connect } from 'react-redux';
import { State } from '../../redux/reducer';
import { dispatchList } from './CreditCardReducer';
import CreditCard from '../../common/Member';
import CreditCardView, {
  ICreditCardState,
  ICreditCardDispatch,
  ICreditCardProps,
} from './CreditCardView';

const stateToProps = (state: State): ICreditCardState => ({
  errorList:  state.credit.errorList,
});

export default connect<ICreditCardState, ICreditCardDispatch, ICreditCardProps>(
  stateToProps,
  {
    ...dispatchList,
  },
)(CreditCardView);
