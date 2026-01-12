window.onload = function () {
    const request = new XMLHttpRequest();
    let data;
    let grid;

  
    xhr.addEventListener('readystatechange', function () {
      if (xhr.readyState === 4 && xhr.response === 200) {
        data = JSON.parse(request.responseText);
        console.log(data);
        if(data){
            let movie = toString(data.Movie);
        }
      }
    });
  };

  request.open("GET", "file.JSON", true);
  request.send();

