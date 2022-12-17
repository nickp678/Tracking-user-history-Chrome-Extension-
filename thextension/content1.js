//content1.js


const data = {URL: document.URL};
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };
fetch('http://127.0.0.1:3000/', options);



