import { Action, Dispatch } from 'redux';
import axios from 'axios';
import * as _ from 'lodash';
import { makeAction, isAction } from '../../redux/guards';
import CreditCard from '../../common/CreditCard';

const OMISE_API_URL = 'https://vault.omise.co/tokens';

export const CREDITCARD_INITIAL = 'CREDITCARD_INITIAL';
export const CREDITCARD_REQUESTING = 'CREDITCARD_REQUESTING';
export const CREDITCARD_SUCCESS = 'CREDITCARD_SUCCESS';
export const CREDITCARD_FAILURE = 'CREDITCARD_FAILURE';

export class CreditCardState {
  readonly creditCard: CreditCard;
  readonly loading: boolean = false;
  readonly readyStatus: string = CREDITCARD_INITIAL;
}

export const loadCreditCardTokenRequesting = makeAction(CREDITCARD_REQUESTING)(
  () => ({
    type: CREDITCARD_REQUESTING,
  }),
);
export const loadCreditCardTokenSuccess = makeAction(CREDITCARD_SUCCESS)(
  result => ({
    type: CREDITCARD_SUCCESS,
    payload: result.token,
  }),
);
export const loadCreditCardTokenFailure = makeAction(CREDITCARD_FAILURE)(
  error => ({
    type: CREDITCARD_FAILURE,
    payload: error,
  }),
);

export const createCreditCardToken = () => {
  return async (dispatch: Dispatch<any>) => {
    axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
    axios.defaults.headers.post['Authorization'] =
      'Basic YourToken';
    const data = new FormData();
    
    data.append('card[name]', 'Somchai Prasert');
    data.append('card[number]', '4242424242424242');
    data.append('card[expiration_month]', '10');
    data.append('card[expiration_year]', '2018');
    data.append('card[security_code]', '123');

    axios
      .post(OMISE_API_URL, data)
      .then(returnToken => {
        console.log(returnToken.data.id);
        dispatch(loadCreditCardTokenSuccess(returnToken));
      })
      .catch(error => {
        console.log(error.response.data.code);
        dispatch(loadCreditCardTokenFailure(error.response));
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
