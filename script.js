const button = document.querySelector("button");

button.addEventListener("click", () => {
  Notification.requestPermission().then((perm) => {
    if (perm === "granted") {
      const notification = new Notification("Example Notification", {
        body: "this is more text",
        data: "world",
      });

      notification.addEventListener("close", (e) => {
        console.log(e);
      });
    }
  });
});
