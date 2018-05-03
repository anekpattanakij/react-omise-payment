import * as React from 'react';
import { Link } from 'react-router-dom';
import { Dispatch } from 'redux';
import CreditCardFormView from './CreditCardFormView';

export interface ICreditCardState {}

export interface ICreditCardDispatch {
  createCreditCardToken(): (dispatch: Dispatch<any>) => any;
}

export type ICreditCardProps = ICreditCardState & ICreditCardDispatch;

class CreditCardViewClass extends React.PureComponent<ICreditCardProps> {
  render() {
    return (
      <div>
        <CreditCardFormView {...this.props} />
      </div>
    );
  }
}

export default CreditCardViewClass;
