/**
 * This function renders image from selected option of computer 
 * @param {Object} selected Selected option of computer 
 */
export const imageView = (selected) => {
    const imageSrc = `https://hickory-quilled-actress.glitch.me/${selected.image}`
    const image=new Image();
    //If image is not found, setting error message to replace the image
    image.onerror =() => {
        document.getElementById("image").innerHTML = "<p>Image not found</p>";
    }
    image.src=imageSrc;
    document.getElementById("image").innerHTML = `<img src="${imageSrc}" alt="computer" />`
}

/**
 * This function renders information about selected option of computer 
 * @param {Object} selected Selected option
 */
export const computerView = (selected) => {
    try {
        //This modification so that prices would sound more realistic in euros.
        const euroPrice = selected.price/10    
        document.getElementById("info").innerHTML = `<h4>${selected.title}</h4><p>${selected.description}</p>`
        document.getElementById("price").innerText = `${euroPrice}€`
    } catch (error) {
        console.log(error);
    }
}