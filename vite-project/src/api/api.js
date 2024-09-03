const fetchAPI = async = () => {
    const response = await axios.get()
    const data = await response.json()
    return data
}
export default fetchAPI()