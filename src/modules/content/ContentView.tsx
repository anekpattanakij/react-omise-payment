import * as React from 'react';
import { Link } from 'react-router-dom';

export interface IContentDispatch {
}

export type IContentProps = IContentDispatch;

const ContentView: React.StatelessComponent<IContentProps> = () => (
  <div>
    <h4>Welcome Text</h4>
  </div>
);

export default ContentView;
