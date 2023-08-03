import axios from "axios";


const addNewTask = async(task) => {
    try {
        const response = await axios.post(process.env.REACT_APP_BASE_URL + "/tasks.json", task)
        return response.data.name;
    } catch (error) {
        
    }
}

export { addNewTask };