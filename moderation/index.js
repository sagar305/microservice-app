const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require('cors')

const app = express();
app.use(cors());


app.use(bodyParser.json());

app.post("/events", async (req, res) => {
  const { type, data } = req.body;
  if (type === "CommentCreated") {
    console.log(data);
    const status = data.content.includes("orange") ? "Rejected" : "Approved";

    await axios.post("http://event-bus-srv:4005/events", {
      type: "commentModerated",
      data: {
        id: data.id,
        content: data.content,
        status: status,
        postId: data.postId
      },
    });
  }
});

app.listen(4003, () => {
  console.log("Listening on 4003");
});
