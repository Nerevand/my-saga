import { put, call, takeEvery } from 'redux-saga/effects'
import axios from 'axios';

const requestToServer = (payload) => {
    return axios.get('https://dog.ceo/api/breeds/image/random', payload)
        .then(response => response.data)
        .catch(err => err);
}

export function* workerSaga(obj) {       //here we have obj(from ../App.js)
    try {
        console.log("action", obj);
        const data = yield call(requestToServer, { title: 'new text here' }); //call our axios function(also you can add params)
        console.log("data", data);
        yield put({ type: 'INCREMENT', payload: data });        //write our data to redux store.
    } catch (e) {
        console.log(e); //dispatch your error here
    }
}

export default function* watcherSaga() {
    yield takeEvery('INCREMENT_ASYNC', workerSaga)      //get all action with INCREMENT_ASYNC and call function incrementAsync
}