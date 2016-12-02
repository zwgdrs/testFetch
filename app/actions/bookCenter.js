export function fetchBookCenterInfo() {
  return (dispatch) => {
    return fetch('http://t.c.m.163.com/uc/activity/card/exchange/info')
      .then(res => res.json())
      .then((json) => {
        dispatch({
          type: 'FETCH_BOOKCENTER_INFO',
          data: json.data
        })
      })
  }
}
