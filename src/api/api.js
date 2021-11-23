const Api = {
  apiUrl: 'https://m03p03restaurante.herokuapp.com/entradas',
  fetchGetAll: () => fetch(`${Api.apiUrl}/listall`),
  fetchGetById: id => fetch(`${Api.apiUrl}/listid/${id}`),
  fetchPost: (entrada) => {
    return fetch(`${Api.apiUrl}/add`, {
      method: 'POST',
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(entrada)
    })
  },
  fetchPut: (entrada, id) => {
    return fetch(`${Api.apiUrl}/update/${id}`, {
      method: 'PUT',
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(entrada)
    })
  },
  fetchDelete: (id) => {
    return fetch(`${Api.apiUrl}/delete/${id}`, {
      method: 'DELETE'
    })
  }
}

export default Api;