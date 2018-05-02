import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

export interface IContentDispatch {
}

export type IContentProps = IContentDispatch;

const ContentView: React.StatelessComponent<IContentProps> = () => (
  <div>
    <Helmet>
      <title>Nested Title</title>
    </Helmet>
    <h4>Welcome Text</h4>
  </div>
);

export default ContentView;
