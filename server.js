const http = require("http");

const mongodb = require("mongodb");

let db;

const connectionString = "mongodb+srv://jacob9715:djj959799@cluster0.oanqewp.mongodb.net/reja";

mongodb.connect(connectionString,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err, client) => {
        if (err) console.log("ERROR on connection MongoDB", err);
        else {
            console.log("MongoDB connection succeed");
            module.exports = client;
            const app = require("./app");
            const server = http.createServer(app);
            let PORT = 3011;
            server.listen(PORT, function () {
                console.log(`The server is running successfully on PORT ${PORT}, http://localhost:${PORT}`);
            });
        }
    });