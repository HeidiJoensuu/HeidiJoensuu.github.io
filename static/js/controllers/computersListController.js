/**
 * This function creates options into computer selection
 * @param {Object} elSelection Selection element
 * @param {Array<Object>} data Array of data of computers
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
 * This function lists specs of the selected option of computer
 * @param {Object} selected Selected option
 */
export const features = (selected) => {
    try {
        document.getElementById("smalltitle").innerText = "Features:\n"
        document.getElementById("features").innerText=selected.specs.join("\n")
    } catch (error) {
        document.getElementById("smalltitle").innerText = "\nUnable to get features"
    }
}