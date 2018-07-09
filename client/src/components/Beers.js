import React from 'react'
import Beer from './components/beer'

class Beers extends Component.React {
 
  state = { token: '' }

  componentDidMount() {
    
    const { dispatch } = this.props

    axios.get('/api/beer_token')
      .then( res => {
        const { data: token, headers } = res
        dispatch(setHeaders(headers))
        this.setState({ token })
      })
      .catch( res => {
        dispatch(setHeaders(res.headers))
      })
  }

  render() {
    const {  } = this.state
    
    return(
      <div>  
        <Beer 
          authorizationToken={ this.state.token }
        />
      </div>
    )
  }

}

export default Beers;