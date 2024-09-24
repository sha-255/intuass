import { API_BASE_URL } from '~/.config'

export async function getUserInfo(token: string) {
  // const myHeaders = new Headers()
  // myHeaders.append('Authorization', `Bearer ${localStorage.getItem('accessToken')}`)

  // const url = new URL(API_BASE_URL)
  // url.pathname = '/users/main/1'

  // fetch(url, {
  //   method: 'GET',
  //   headers: myHeaders,
  //   redirect: 'follow',
  // })
  //   .then(response => response.json())
  //   .then((result) => {
  //     return result
  //   })
  //   .catch(error => console.error(error))
  const myHeaders = new Headers()
  myHeaders.append('Authorization', `Bearer ${token}`)

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
  }

  const url = new URL(API_BASE_URL)
  url.pathname = '/user'

  const result = await (await fetch(url, requestOptions)).json()
  console.log(result)
  return result
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
