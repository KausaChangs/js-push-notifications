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

let notification;

let interval;

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    const leaveDate = new Date();

    setInterval(() => {
      notification = new Notification("come back please", {
        body: `You  were gone for ${Math.round(
          new Date() - leaveDate / 1000
        )} seconds`,
        tag: "COME BACK",
      });
    }, 100);
  } else {
    notification.close();
  }
});
