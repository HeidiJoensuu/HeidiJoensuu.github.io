/**
 * 
 */
export const computerList = async (elSelection, data) => {
    try {
        data.forEach(element => {
            const newOption = document.createElement("option")
            newOption.value = element.id
            newOption.text = element.title
            elSelection.add(newOption)
            
        });       
    } catch (error) {
        document.getElementById("smalltitle").innerText = "\nUnable to fetch data"
        console.log(error);
    }
}

/**
 * 
 * @param {*} selected 
 */
export const features = (selected) => {
    try {
        document.getElementById("smalltitle").innerText = "Features:\n"
        document.getElementById("features").innerText=selected.specs.join("\n")
    } catch (error) {
        document.getElementById("smalltitle").innerText = "\nUnable to get features"
    }
}