nextImageButton = document.getElementById("nextImageButton");
dogImageContainer = document.getElementById("dogImg");

const fetchImg =  () => {
    const img = new Image();
    img.setAttribute("alt", "Dog Image");

    const fetchResult = fetch("https://dog.ceo/api/breeds/image/random", {method: "GET"})
    fetchResult.then(res => res.json()).then(res => {
        img.setAttribute("src", res.message);
        img.setAttribute("style", "height: 500px");
        console.log(img);
        dogImageContainer.innerHTML = ""
        dogImageContainer.appendChild(img);
    })
    fetchResult.catch(err => console.log("Error: ", err))
}

nextImageButton.addEventListener("click", fetchImg);