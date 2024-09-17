import { API_BASE_URL } from '~/.config'

export function signIn(address: string) {
  const myHeaders = new Headers()
  myHeaders.append('Content-Type', 'application/json')

  const url = new URL(API_BASE_URL)
  url.pathname = '/signIn'

  console.log('address:', address)
  fetch(url, {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify({
      address,
    }),
    redirect: 'follow',
  })
    .then(response => response.json())
    .then((result) => {
      localStorage.setItem('accessToken', result?.accessToken)
    })
    .catch(error => console.error(error))
}
