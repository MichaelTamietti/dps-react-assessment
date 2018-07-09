import React from 'react'

class Beer extends Component.React {

  state = { beer: '' }

  componentDidMount() {
    axios.get('/api/beers')
      .then( res => {
        const { data: beer, headers } = res
        dispatch(setHeaders(headers))
        this.setState({ beer })
      })
      .catch( res => {
        dispatch(setHeaders(res.headers))
      })
  }

  render() {
    const { beer } = this.state
    
    return(
      <div>  
        beer.name
        beer.year
        beer.glasswareId
        beer.availableId
      </div>
    )
  }

}

export default Beer