// Asynchronous function to fetch user data from a fake API
async function fetchUserData() {
  try {
    // Asynchronous operation - assume it fetches data from an API
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

    // Check if the response is not OK (e.g., 404 or 500)
    if (!response.ok) {
      throw new Error("Failed to fetch data from the server!");
    }

    // Convert the response to JSON
    const data = await response.json();
    console.log("✅ Data fetched successfully:", data);
  } catch (error) {
    // This block runs if any error occurs during fetch or JSON parsing
    console.error("❌ An error occurred:", error.message);
  }
}

// Call the function
fetchUserData();
