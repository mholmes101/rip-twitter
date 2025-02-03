const API_URL =
  "https://8rmgl8117h.execute-api.us-east-2.amazonaws.com/random-tweet";

document.getElementById("getTweetBtn").addEventListener("click", async () => {
  const tweetTextElem = document.getElementById("tweetText");
  const tweetDateElem = document.getElementById("tweetDate");
  const rtCountElem = document.getElementById("rtCount");
  const favCountElem = document.getElementById("favCount");
  const tweetDisplay = document.getElementById("tweetDisplay");
  const loadDisplay = document.getElementById("loadDisplay");
  loadDisplay.style.display = "flex";

  try {
    // const response = await fetch(API_URL, { method: "GET" });
    // if (!response.ok) {
    //   throw new Error("Failed to fetch a tweet.");
    // }
    // const data = await response.json();
    const data = {
      text: "I'm a cool tweet",
      date: "2022-01-01",
      rt_count: 100,
      fav_count: 200,
    };
    tweetTextElem.textContent = data.text || "Couldn't gerrowt";
    tweetDateElem.textContent = data.date || "Couldn't gerrowt";
    rtCountElem.textContent = data.rt_count || "Couldn't gerrowt";
    favCountElem.textContent = data.fav_count || "Couldn't gerrowt";

    loadDisplay.style.display = "none";
    tweetDisplay.style.display = "flex";
  } catch (error) {
    console.error("Error fetching the tweet:", error);
    loadDisplay.textContent = `An error occurred: ${error.message}. Please try again.`;
  }
});
