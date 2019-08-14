import { put, call, takeEvery } from 'redux-saga/effects'
import axios from 'axios';

const requestToServer = (payload) => {
    return axios.post('https://jsonplaceholder.typicode.com/posts', payload)      //modify post with id=11, change title in this post
      .then(response => response.data)
      .catch(err => err);
  }

export function* incrementAsync(obj) {       //here we have obj(from ../App.js)
    console.log("action", obj);
    const data = yield call(requestToServer, {  title: 'new text here' }); //call our axios function
    console.log("data", data);      
    yield put({ type: 'INCREMENT', payload: data });        //write our data to redux store
}

export default function* rootSaga() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)      //get all action with INCREMENT_ASYNC and call function incrementAsync
}