import { takeEvery, call, put, select, take } from 'redux-saga/effects';
import { ADD_TO_FAVORITES, ADD_TO_FAVORITES_SUCCESS } from '../../actions/actionTypes';

// export function* watchAddingToFavorites() {
//   const { id } = yield take(ADD_TO_FAVORITES);
//
//   const {
//     shop: { items }
//   } = yield select();
//
//   yield put({
//     type: ADD_TO_FAVORITES_SUCCESS,
//     item: items.find(item => item.id === id)
//   });
// }

function* addToFavorites({ id }) {
  const {
    shop: { items }
  } = yield select();

  yield put({
    type: ADD_TO_FAVORITES_SUCCESS,
    item: items.find(item => item.id === id)
  });
}

export function* watchAddingToFavorites() {
  yield takeEvery(ADD_TO_FAVORITES, addToFavorites);
}