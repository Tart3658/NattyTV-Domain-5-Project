window.onload = function () {
    const xhr = new XMLHttpRequest();
    let url =
      'https://gist.github.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4.js';
    let data;
  
    xhr.addEventListener('readystatechange', function () {
      if (xhr.readyState === 4 && xhr.response === 200) {
        data = JSON.parse(this.responseText);
        console.log(data);
      }
    });
  
    xhr.open('GET', url);
    xhr.send();
  };

  