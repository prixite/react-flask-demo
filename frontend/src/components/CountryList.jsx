import React from 'react'

export class CountryList extends React.Component {
  constructor (props) {
    super(props)
    this.state = { countries: [] }
  }

  componentDidMount () {
    fetch('/api/countries')
      .then(res => res.json())
      .then((result) => {
        this.setState({ countries: result })
      })
  }

  render () {
    const countries = this.state.countries

    return (
      <div>
        <a href='/'>Home</a>
        <h1>Country List</h1>
        <ul>{
          countries.map((country) => {
            return <li key={country.id}>{country.name}</li>
          })
          }
        </ul>
      </div>
    )
  }
}
