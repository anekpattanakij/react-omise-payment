import * as React from 'react';
import { Link } from 'react-router-dom';
import { Dispatch } from 'redux';
import ErrorList from '../../components/ErrorList';
import Error from '../../common/Error';
import CreditCardFormView from './CreditCardFormView';

export interface ICreditCardState {
  errorList: Array<Error>;
}

export interface ICreditCardDispatch {
  createCreditCardToken(): (dispatch: Dispatch<any>) => any;
}

export type ICreditCardProps = ICreditCardState & ICreditCardDispatch;

class CreditCardViewClass extends React.PureComponent<ICreditCardProps> {
  render() {
    return (
      <div>
        <ErrorList errorList={this.props.errorList}/>
        <CreditCardFormView {...this.props} />
      </div>
    );
  }
}

export default CreditCardViewClass;
