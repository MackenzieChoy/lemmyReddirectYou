chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
      if (details.url.includes("reddit.com")) {
        return { redirectUrl: "https://lemmy.world" };
      }
    },
    { urls: ["<all_urls>"] },
    ["blocking"]
  );
  