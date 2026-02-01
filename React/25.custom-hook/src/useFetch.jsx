import React from 'react'

function useFetch(url) {
    const [users, setUsers] = React.useState([])

    React.useEffect(() => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => setUsers(data))
    }, [])
  return { users } //returns an object of users
}

export default useFetch
