const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));
app.use(express.json())
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.post("/search", (req, res) => {
    res.json({ requestBody: req.body });
    let query = req.body;
    console.log(query);
})

app.listen(process.env.PORT || 3000);