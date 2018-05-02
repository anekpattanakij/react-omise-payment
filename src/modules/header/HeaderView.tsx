import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Dispatch } from 'redux';
import { Config } from '../../config';
import { withRouter, RouteComponentProps } from 'react-router';
import './styles.scss';

const PATH_SEPERATOR = '/';
const IGNORE_FIRST_PATH_WITH_LANGUAGE = 1;

interface IProps {
  location: any;
}

export interface IHeaderState {}

export interface IHeaderDispatch {}

export interface IHeaderDispatch {}

export type IHeaderProps = IProps & IHeaderState & IHeaderDispatch;

class HeaderView extends React.PureComponent<
  RouteComponentProps<{}> & IHeaderProps
> {
  private removeLanguageFromPath(input: string): string {
    let returnPath: string;
    if (input) {
      let splitedPath = input.substring(IGNORE_FIRST_PATH_WITH_LANGUAGE);
      splitedPath = splitedPath.substring(splitedPath.indexOf(PATH_SEPERATOR));
      returnPath = splitedPath;
    } else {
      // if empty path - return local path
      returnPath = input;
    }
    return returnPath;
  }
  render() {

    return (
      <div className="blog-masthead">
        <div className="container">
          <nav className="blog-nav">
            <a className="blog-nav-item active" href="#">
              Home
            </a>
            <a className="blog-nav-item" href="#">
              New features
            </a>
            <a className="blog-nav-item" href="#">
              Press
            </a>
            <a className="blog-nav-item" href="#">
              New hires
            </a>
            <a className="blog-nav-item" href="#">
              About
            </a>
          </nav>
        </div>
      </div>
    );
  }
}

export default withRouter(HeaderView);
