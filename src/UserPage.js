import React from 'react'
// import Rect from "./component/Rect"
import { connect } from 'react-redux';
// import { load } from './reducer/comment'
import { load } from './reducer/user'
import { AppBar, Toolbar, Avatar, Card, CardContent, Button, Dialog, DialogTitle, DialogContent } from '@material-ui/core'
// import Typography from 'material-ui/Typography'
// import Typography from 'material-ui/core/Typography'
import { Email } from '@material-ui/icons'

class UserPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      open: false,
      user: null,
    }
  }

  componentWillMount() {
    // user取得APIコールのactionをキックする
    this.props.load()
  }

  handleClickOpen(user) {
    this.setState({
      open: true,
      user: user,
    })
  }

  handleRequestClose() {
    this.setState({ open: false })
  }

  handlePageMove(path) {
    this.props.history.push(path)
  }

  render() {
    const { users } = this.props
    // 初回はnullが返ってくる（initialState）、処理完了後に再度結果が返ってくる
    // console.log(users)
    return (
      <div>
        <AppBar position="static" color="primary">
          <Toolbar>
            {/* <Typography type="title" color="inherit">
              ユーザページ
              </Typography> */}
            <Button style={{ color: '#fff', position: 'absolute', top: 15, right: 0 }} onClick={() => this.handlePageMove('/todo')}>TODOページへ</Button>
          </Toolbar>
        </AppBar>
        {/* 配列形式で返却されるためmapで展開する */}
        {users && users.map((user) => {
          return (
            // ループで展開する要素には一意なkeyをつける（ReactJSの決まり事）
            <Card key={user.email} style={{ marginTop: '10px' }}>
              <CardContent style={{ color: '#408040' }}>
                <Avatar src={user.picture.thumbnail} />
                <p style={{ margin: 10 }}>{'名前:' + user.name.first + ' ' + user.name.last} </p>
                <p style={{ margin: 10 }}>{'性別:' + (user.gender == 'male' ? '男性' : '女性')}</p>
                <div style={{ textAlign: 'right' }} >
                  <Button onClick={() => this.handleClickOpen(user)}><Email />メールする</Button>
                </div>
              </CardContent>
            </Card>
          )
        })}
        {
          this.state.open &&
          <Dialog open={this.state.open} onRequestClose={() => this.handleRequestClose()}>
            <DialogTitle>メールアドレス</DialogTitle>
            <DialogContent>{this.state.user.email}</DialogContent>
          </Dialog>
        }
      </div>
    )
  }
}

export default connect(state => ({
  users: state.user.users
}), { load })(UserPage);
