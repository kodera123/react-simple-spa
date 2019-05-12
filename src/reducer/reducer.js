import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

// コメント取得のreducer
import comment from './comment'
import user from './user'


// 作成したreducerをオブジェクトに追加していく
// combineReducersで１つにまとめてくれる
export default combineReducers({
  routing: routerReducer,
  comment,
  user,
})