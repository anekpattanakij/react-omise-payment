import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import { routerReducer, RouterState } from 'react-router-redux';
import IndexReducer, { IndexEpics, IndexState } from '../modules/index/IndexReducer';
import MemberReducer, { MemberState } from '../modules/members/MemberReducer';
import CreditCardReducer, { CreditCardState } from '../modules/creditCard/CreditCardReducer';

const reducer = combineReducers<State>({
    router: routerReducer,
    index: IndexReducer,
    member: MemberReducer,
    credit: CreditCardReducer,
});

export class State {
    readonly router: RouterState = null;
    readonly index: IndexState = new IndexState();
    readonly member: MemberState = new MemberState();
    readonly credit: CreditCardState = new CreditCardState();
}

export const epics = combineEpics(IndexEpics);

export default reducer;
