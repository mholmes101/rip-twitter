const API_URL =
  "https://8rmgl8117h.execute-api.us-east-2.amazonaws.com/random-tweet";

const button_text = [
  "GIMME GIMME GIMME",
  "Giz another big lad",
  "Gu on then one more",
  "Plz sir",
  "Gizit",
  "tweet machine go brrrr",
];

var click_count = 0;

document.getElementById("getTweetBtn").addEventListener("click", async () => {
  const tweetTextElem = document.getElementById("tweetText");
  const tweetDateElem = document.getElementById("tweetDate");
  const rtCountElem = document.getElementById("rtCount");
  const likeCountElem = document.getElementById("likeCount");
  const tweetDisplay = document.getElementById("tweetDisplay");
  const loadDisplay = document.getElementById("loadDisplay");
  loadDisplay.style.display = "block";
  tweetDisplay.style.display = "none";

  click_count++;

  // Congratulate user after 5 clicks
  if (click_count === 5) {
    const firstModal = new bootstrap.Modal(
      document.getElementById("firstModal")
    );
    firstModal.show();
  }
  // Congratulate user after 5 clicks
  if (click_count === 9) {
    const secondModal = new bootstrap.Modal(
      document.getElementById("secondModal")
    );
    secondModal.show();
  }
  // Block user after 6 clicks
  if (click_count === 10) {
    document.body.innerHTML =
      "<h1 style='color: red; text-align: center;'>THAT'S IT YOU'VE DONE IT NOW I'M GOING HOME AND IT'S MY BALL AND I'M TAKING IT WITH ME </h1>";
  }
  try {
    const response = await fetch(API_URL, { method: "GET" });
    if (!response.ok) {
      throw new Error("Failed to fetch a tweet.");
    }
    const data = await response.json();
    // const data = {
    //   text: "I'm a cool tweet",
    //   date: "2022-01-01",
    //   rt_count: 100,
    //   like_count: 200,
    // };
    tweetTextElem.textContent = data.text || "Couldn't gerrowt";
    tweetDateElem.textContent = data.date || "Couldn't gerrowt";
    rtCountElem.textContent = data.rt_count || "Couldn't gerrowt";
    likeCountElem.textContent = data.like_count || "Couldn't gerrowt";

    loadDisplay.style.display = "none";
    tweetDisplay.style.display = "block";

    // Update the button text
    if (click_count === 9)
      document.getElementById("getTweetBtn").textContent =
        "Shurrup and give me another ya dosser";
    else
      document.getElementById("getTweetBtn").textContent =
        button_text[click_count % 6];
  } catch (error) {
    console.error("Error fetching the tweet:", error);
    loadDisplay.textContent = `An error occurred: ${error.message}. Sorry lmao I'm still working out web dev just try again it'll probably work`;
  }
});
