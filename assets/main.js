
  function getPhotos(images){
    images.map(image=>{
      const res = document.getElementById('info')
      res.innerHTML += `
          <div class="images">
              <img src="${image.src.medium}"/>
          </div>
      `
    })
  }

  const url = 'https://api.pexels.com/v1/search?query=people/3'

  fetch(url, {
    headers: {
      Authorization: '563492ad6f91700001000001c78ba43b137740adb2d27dd8017c2858',
    }

  }).then(response=>{
     response.json().then(data=>{

      console.log(data)
  
       getPhotos(data.photos)
         
     })
  })
  
  .catch(error=> console.error('erro na requisição',error))