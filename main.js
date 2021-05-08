const baseUrl = 'https://dog.ceo/api/breeds/image/random'
const getMainButton = document.getElementById("main-button")
getMainButton.addEventListener('click', getDog)
const mainElement = document.getElementById("container")
const searchElement = document.getElementById("search-input")

function clearExisting() {
    // remove the image
    const dogImage = document.getElementById('dog-image')
   
    if (dogImage) {
      // delete the element
      mainElement.removeChild(dogImage)
    }
}

async function getDog() {
    clearExisting()
    let data = null
    try {
      let response = await fetch(baseUrl)
      data = await response.json()
      console.log(data)
        // createNewImage(data)
        const image = document.createElement('img');
    image.src = data.message; // Set the image source to the image URL value
    image.id = "dog-image"
    console.log(mainElement)
		mainElement.appendChild(image);
     
    } catch (error) {
      console.log(error.message)
    }
  }
