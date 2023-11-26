
const fetchButton = document.getElementById("fetchButton");
const dogImgContainer = document.getElementById("dogImgContainer");

const fetchDisplayImage = () => {
    dogImgContainer.innerHTML = ""
    const response = fetch("https://dog.ceo/api/breeds/image/random")
    response.then(res => res.json()).then(res => {
        const dogImg = new Image;
        dogImg.setAttribute("src", res.message);
        dogImg.setAttribute("id", "dogImg");
        dogImg.setAttribute("alt", "Dog Image");
        dogImg.setAttribute("height", "400px")
        dogImgContainer.appendChild(dogImg);
    })
}

fetchDisplayImage()

fetchButton.addEventListener("click", fetchDisplayImage);