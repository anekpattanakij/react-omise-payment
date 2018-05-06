import * as React from 'react';
import * as _ from 'lodash';
import ErrorItem from '../ErrorItem';
import Error from '../../common/Error';

export interface IErrorListProps {
  errorList: Array<Error>;
}

const ErrorList: React.StatelessComponent<IErrorListProps> = ({
  errorList,
}) => (
  <div>
    {errorList.map(element => (
      <ErrorItem key={_.uniqueId()} error={element}/>
    ))}
  </div>
);

export default ErrorList;
