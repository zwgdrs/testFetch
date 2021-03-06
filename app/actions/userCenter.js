export function fetchUserCenterInfo() {
  return (dispatch) => {
    return fetch('http://t.c.m.163.com/uc/activity/card/exchange/info')
      .then(res => res.json())
      .then((json) => {
        dispatch({
          type: 'FETCH_USERCENTER_INFO',
          data: json.data
        })
      })
  }
}
