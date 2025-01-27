import axios from "axios";

// Fetch items from JSONPlaceholder API
export const getItems = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data: ", error);
    return [];
  }
};
