import { Action, Dispatch } from 'redux';
import axios from 'axios';
import * as FormData from 'form-data';
import * as _ from 'lodash';
import { makeAction, isAction } from '../../redux/guards';
import CreditCard from '../../common/CreditCard';
import Error from '../../common/Error';

const OMISE_API_URL = 'https://vault.omise.co/tokens';
const API_OMISE_CHARGE_TOKEN = 'http://localhost:3000/chargeByToken';

export const CREDITCARD_INITIAL = 'CREDITCARD_INITIAL';
export const CREDITCARD_REQUESTING = 'CREDITCARD_REQUESTING';
export const CREDITCARD_SUCCESS = 'CREDITCARD_SUCCESS';
export const CREDITCARD_FAILURE = 'CREDITCARD_FAILURE';

export class CreditCardState {
  readonly creditCard: CreditCard;
  readonly loading: boolean = false;
  readonly readyStatus: string = CREDITCARD_INITIAL;
  readonly errorList: Array<Error> = [];
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
      'Basic cGtleV90ZXN0XzViYjN3NzN2aGl4YWVvOHhzbHQ6IA==';
    const data = new FormData();

    data.append('card[name]', 'Somchai Prasert');
    data.append('card[number]', '4242424242424242');
    data.append('card[expiration_month]', '10');
    data.append('card[expiration_year]', '2018');
    data.append('card[security_code]', '123');
    // Create card T
    axios
      .post(OMISE_API_URL, data)
      .then(returnToken => {
        return returnToken.data.id;
      })
      .then(returnToken => {
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.post(API_OMISE_CHARGE_TOKEN,{
          card:returnToken,
          amount:'100',
          currency:'THB',
        }).then(returnResult => {
          console.log(returnResult);
          dispatch(loadCreditCardTokenSuccess(returnToken));
          return;
        }).catch(error => {
          console.log(error.response.data.code);
          dispatch(loadCreditCardTokenFailure(error.response.data));
        });
      })
      .catch(error => {
        console.log(error.response.data.code);
        dispatch(loadCreditCardTokenFailure(error.response.data));
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
      errorList: [],
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
      errorList: [action.payload],
      readyStatus: CREDITCARD_FAILURE,
    };
  } else {
    return state;
  }
};

export default CreditCardReducer;
