export function Profile () {
  const user = {
    name: 'Umair Khan',
    email: 'umair@example.com',
    country: 'Pakistan'
  }

  return (
    <div>
      <a href='/'>Home</a>
      <h1>Profile</h1>
      <p><b>Name</b>: {user.name}</p>
      <p><b>Email</b>: {user.email}</p>
      <p><b>Country</b>: {user.country}</p>
    </div>
  )
}
