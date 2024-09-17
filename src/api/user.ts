import { API_BASE_URL } from '~/.config'

export function getUserInfo() {
  const myHeaders = new Headers()
  myHeaders.append('Authorization', `Bearer ${localStorage.getItem('accessToken')}`)

  const url = new URL(API_BASE_URL)
  url.pathname = '/users/main/1'

  fetch(url, {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  })
    .then(response => response.json())
    .then((result) => {
      return result
    })
    .catch(error => console.error(error))
}

export function claim() {
  const myHeaders = new Headers()
  myHeaders.append('Authorization', `Bearer ${localStorage.getItem('accessToken')}`)

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
  }

  const url = new URL(API_BASE_URL)
  url.pathname = '/users/1/claimReward'

  fetch(url, requestOptions)
    .then(response => response.json())
    .then(result => result)
    .catch(error => console.error(error))

  getUserInfo()
}
