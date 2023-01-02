const button = document.querySelector("button");

button.addEventListener("click", () => {
  Notification.requestPermission().then((perm) => {
    if (perm === "granted") {
      const notification = new Notification("Example Notification", {
        body: Math.random(),
        data: "world",
        tag: "welcome text",
      });

      notification.addEventListener("close", (e) => {
        console.log(e);
      });
    }
  });
});

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    new Notification("come back please", {
      body: "PLEASE",
      tag: "COME BACK",
    });
  }
});
