export function UserList () {
  const users = [
    { name: 'Umair Khan', id: 'umair' },
    { name: 'John Doe', id: 'john' },
  ]

  const elements = users.map(({name, id}) => <li key={id}>{name}</li>)

  return (
    <div>
      <a href='/'>Home</a>
      <h1>User List</h1>
      <ul>{elements}</ul>
    </div>
  )
}
