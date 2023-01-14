
const url = 'https://catfact.ninja/fact';

fetch(url)
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Request failed.');
  })
  .then(data => {
    const newP = document.createElement('p');
    newP.textContent = data.fact;
    document.body.append(newP);
  })
  .catch(error => {
    console.log(error);
  });

    document.getElementById("reload").addEventListener("click", function(){
        location.reload();
    })
