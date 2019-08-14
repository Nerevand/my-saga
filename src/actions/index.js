import * as types from './types';

export const onIncrement = (payload) => ({          //created acrion
    type: types.INCREMENT_ASYNC,
    mail: payload.mail
});