import * as React from 'react';
import Error from '../../common/Error';

export interface IErrorItemProps {
    readonly error: Error;
}

const ErrorItem: React.StatelessComponent<IErrorItemProps> = ({ error }) => (
    <div>
    {error.code} - {error.message}
  </div>
);

export default ErrorItem;
