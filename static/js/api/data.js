const fetchData = async () => {
    try {
        let response = await fetch("https://hickory-quilled-actress.glitch.me/computers")
        return await response.json()
    } catch (error) {
        console.log(error);
    }
}
export default fetchData