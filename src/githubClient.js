const axios = require('axios');

async function fetchUserData(username) {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (err) {
    console.log(`Error: ${err}`);
  }
}

module.exports = { fetchUserData };
