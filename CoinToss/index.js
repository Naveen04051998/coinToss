// Write your code here
import {Component} from 'react'

import './index.css'

export default class CoinToss extends Component {
  state = {
    total: 0,
    heads: 0,
    tails: 0,
    imageIndex: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  tossCoin = () => {
    // eslint-disable-next-line
    //const {total, heads, tails, imageIndex} = this.state

    // const newIndex = imageIndex === 1 ? 2 : 1
    // this.setState({imageIndex: newIndex})
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      // return (this.setState(prevState=>({heads:prevState.heads+1}))
      this.setState(prevState => ({heads: prevState.heads + 1}))
      this.setState(prevState => ({total: prevState.total + 1}))
      this.setState({
        imageIndex: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      })
    } else {
      this.setState(prevState => ({tails: prevState.tails + 1}))
      this.setState(prevState => ({total: prevState.total + 1}))
      this.setState({
        imageIndex: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      })
    }
  }

  render() {
    const {total, heads, tails, imageIndex} = this.state
    // const image1 = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
    // const image2 = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    // const currentImage = imageIndex === 1 ? image1 : image2
    return (
      <div className="container-1">
        <div className="container-2">
          <h1 className="main-heading">Coin Toss Game</h1>
          <p className="heading-2">Heads (or) Tails</p>
          <div className="container-4">
            <img className="icon" src={imageIndex} alt="toss result" />
          </div>
          <div className="container-4">
            <button className="button" onClick={this.tossCoin}>
              Toss Coin
            </button>
          </div>
          <div className="container-3">
            <p className="heading">Total: {total}</p>
            <p className="heading">Heads: {heads}</p>
            <p className="heading">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
