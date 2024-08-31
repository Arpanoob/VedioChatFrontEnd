import axios from "axios";

const serverApi = "http://localhost:5002/api";

async function getRoomExist(roomId) {
  try {
    const response = await axios.get(`${serverApi}/room-exists/${roomId}`);
    return response.data;
  } catch (e) {
    console.log("Error " + e);
  }
}

export default getRoomExist;
