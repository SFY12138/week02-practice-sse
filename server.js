const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const arr = ["金", "山", "办", "公", "W", "P", "S"];

app.get("/api/sse", (req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/event-stream; charset=utf-8"
  });
  let counter = 0;
  const intervalId = setInterval(() => {
    res.write("data:" + arr[counter] + "\n\n");
    counter++;
    if (counter >= arr.length) {
      clearInterval(intervalId);
    }
  }, 1000);

  res.on("close", () => {
    console.log("客户端断开连接");
    clearInterval(intervalId);
    res.end();
  });
});

app.listen(3000, () => console.log("http://localhost:3000"));
