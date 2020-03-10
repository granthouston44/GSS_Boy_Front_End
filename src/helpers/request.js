class Request {

    get(url) {
      return fetch(url, {
        mode: 'no-cors'
      })
      .then((res) => res.json());
    }
    post(url, payload){
      return fetch(url, {
        method: "POST",
        mode: 'no-cors',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
      })
    }
  }

  export default Request;
