import * as React from 'react';
import { Link } from 'react-router-dom';
import CreditCardFormView from './CreditCardFormView';

export interface ICreditCardState {}

export interface ICreditCardDispatch {}

export type ICreditCardProps = ICreditCardState & ICreditCardDispatch;

const ContentView: React.StatelessComponent<ICreditCardProps> = () => (
  <div>
    <CreditCardFormView {...this.props} />
  </div>
);

export default ContentView;
