import { put, call, takeEvery } from 'redux-saga/effects'
import axios from 'axios';

const createBlaBla = (payload) => {
    return axios.post('https://jsonplaceholder.typicode.com/posts', payload)
      .then(response => response.data)
      .catch(err => err);
  }

export function* incrementAsync(obj) {       //here we have obj(from ../App.js)
    console.log("action", obj);
    const data = yield call(createBlaBla, { mail: obj.mail, age: 26 }); //call our axios function
    console.log("data", data);      
    yield put({ type: 'INCREMENT', payload: data });        //write our data to redux store
}

export default function* rootSaga() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)      //get all action with INCREMENT_ASYNC and call function incrementAsync
}