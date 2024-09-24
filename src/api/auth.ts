import { API_BASE_URL } from '~/.config'
import { getUserInfo } from '~/api/user'

export async function signIn(address: string): Promise<any> {
  // const myHeaders = new Headers()
  // myHeaders.append('Content-Type', 'application/json')

  // const url = new URL(API_BASE_URL)
  // url.pathname = '/signIn'

  // console.log('address:', address)
  // fetch(url, {
  //   method: 'POST',
  //   headers: myHeaders,
  //   body: JSON.stringify({
  //     address,
  //   }),
  //   redirect: 'follow',
  // })
  //   .then(response => response.json())
  //   .then((result) => {
  //     localStorage.setItem('accessToken', result?.accessToken)
  //   })
  //   .catch(error => console.error(error))
  const myHeaders = new Headers()
  myHeaders.append('Authorization', 'Bearer')
  myHeaders.append('Content-Type', 'application/json')

  const raw = JSON.stringify({
    address,
  })

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
  }

  const url = new URL(API_BASE_URL)
  url.pathname = '/login'

  const result = await (await fetch(url, requestOptions)).json()
  console.log(result)
  localStorage.setItem('accessToken', result?.accessToken)
  return await getUserInfo(result?.accessToken)
}
