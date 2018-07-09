import React from 'react'

class Brewery extends Component.React {

  state = { brewery: '' }

  componentDidMount() {
    axios.get('/api/brewery')
      .then( res => {
        const { data: brewery, headers } = res
        dispatch(setHeaders(headers))
        this.setState({ brewery })
      })
      .catch( res => {
        dispatch(setHeaders(res.headers))
      })
  }

  render() {
    const { brewery } = this.state
    
    return(
      <div>  
        brewery.name
        brewery.description
        brewery.established
      </div>
    )
  }

}

export default Brewery