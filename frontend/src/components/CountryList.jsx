export function CountryList () {
  const countries = [
    { name: 'Pakistan', id: 'pak' },
    { name: 'United States of America', id: 'usa' },
    { name: 'England', id: 'eng' }
  ]

  const rows = []
  countries.forEach((country) => {
    rows.push(
      <li key={country.id}>{country.name}</li>
    )
  })

  return (
    <div>
      <a href='/'>Home</a>
      <h1>Country List</h1>
      <ul>{rows}</ul>
    </div>
  )
}
