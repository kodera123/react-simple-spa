import React from 'react'
import { ConnectedRouter as Router } from 'react-router-redux'
import { Route, Redirect, Switch } from 'react-router-dom'

import UserPage from './UserPage'
import ReadMePage from './ReadMePage'

export default class App extends React.Component {

  // componentWillMount() {
  //   // コメントのactionをキックする
  //   this.props.load();
  // }

  // render() {
  //   // connectで取得したstateはpropsに入る
  //   const { comments } = this.props
  //   // 初回はnullが返ってくる（initialState）、処理完了後に再度結果が返ってくる
  //   console.log(comments)
  //   // return (
  //   //   <div>
  //   //     <h1>Hello, world!</h1>
  //   //     {/* <Rect num={1} bgcolor='#e02020' />
  //   //     <Rect num={2} bgcolor='#20e020' />
  //   //     <Rect num={3} bgcolor='#2020e0' /> */}
  //   //     {/* {comments} */}
  //   //   </div>

  render() {
    const { history } = this.props
    return (
      <Router history={history}>
        <Route component={AppRoute} />
      </Router>
    )
  }
}

// function mapStateToProps(state) {
//   return { comments: state.comment.comments }
// }

const AppRoute = (props) => (
  <Switch>
    <Route exact path="/" component={UserPage} />
    <Route path="/" component={ReadMePage} />
    {/* それ以外のパス */}
    {/* <Route component={NotFound} /> */}
  </Switch>
)

// export default connect(state => ({
//   users: state.user.users
// }),{ load })(App);
