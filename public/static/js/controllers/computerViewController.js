export const imageView = (selected) => {
    const imageSrc = `https://hickory-quilled-actress.glitch.me/${selected.image}`
    const image=new Image();
    image.onerror =() => {
        document.getElementById("image").innerHTML = "<p>Image not found</p>";
    }
    image.src=imageSrc;
    document.getElementById("image").innerHTML = `<img class="image" src="${imageSrc}" alt="Dewald Avatar" />`
}

export const computerView = (selected) => {
    try {
        const euroPrice = selected.price/10    
        document.getElementById("info").innerHTML = `<h4>${selected.title}</h4><p>${selected.description}</p>`
        document.getElementById("price").innerText = `${euroPrice}€`
    } catch (error) {
        console.log(error);
    }
}