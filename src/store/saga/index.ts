import {takeLatest, all, fork } from 'redux-saga/effects'
import { CONSTANT } from '../../utils/constants'

function* defaultHandlerSaga(){
    try{

    }catch(ex){

    }
}

export function* getUserSaga(){
    yield takeLatest(CONSTANT.DEFAULT, defaultHandlerSaga)
}

export function* mainSaga(){
    yield all([
        fork(getUserSaga)
    ])
}