import { Action, Dispatch } from 'redux';
import axios from 'axios';
import * as _ from 'lodash';
import * as omise from 'omise';
import { makeAction, isAction } from '../../redux/guards';
import CreditCard from '../../common/CreditCard';

const OMISE_API = 'https://api.omise.co/tokens';

export const CREDITCARD_INITIAL = 'CREDITCARD_INITIAL';
export const CREDITCARD_REQUESTING = 'CREDITCARD_REQUESTING';
export const CREDITCARD_SUCCESS = 'CREDITCARD_SUCCESS';
export const CREDITCARD_FAILURE = 'CREDITCARD_FAILURE';

export class CreditCardState {
  readonly creditCard: CreditCard;
  readonly loading: boolean = false;
  readonly readyStatus: string = CREDITCARD_INITIAL;
}

export const loadCreditCardTokenRequesting = makeAction(CREDITCARD_REQUESTING)(() => ({
  type: CREDITCARD_REQUESTING,
}));
export const loadCreditCardTokenSuccess = makeAction(CREDITCARD_SUCCESS)(result => ({
  type: CREDITCARD_SUCCESS,
  payload: result.token,
}));
export const loadCreditCardTokenFailure = makeAction(CREDITCARD_FAILURE)(error => ({
  type: CREDITCARD_FAILURE,
  payload: error,
}));

export const createCreditCardToken = () => {
  return (dispatch: Dispatch<any>) => {
    dispatch(loadCreditCardTokenRequesting());
    axios
      .get(OMISE_API)
      .then(result => {
        dispatch(loadCreditCardTokenSuccess(result));
      })
      .catch(error => {
        dispatch(loadCreditCardTokenFailure(error));
      });
  };
};

export const dispatchList = { createCreditCardToken };

const CreditCardReducer = (
  state: CreditCardState = new CreditCardState(),
  action: Action,
): CreditCardState => {
  if (isAction(action, loadCreditCardTokenRequesting)) {
    return {
      ...state,
      loading: true,
      readyStatus: CREDITCARD_REQUESTING,
    };
  } else if (isAction(action, loadCreditCardTokenSuccess)) {
    return {
      ...state,
      creditCard: action.payload,
      loading: false,
      readyStatus: CREDITCARD_SUCCESS,
    };
  } else if (isAction(action, loadCreditCardTokenFailure)) {
    return {
      ...state,
      loading: false,
      readyStatus: CREDITCARD_FAILURE,
    };
  } else {
    return state;
  }
};

export default CreditCardReducer;
