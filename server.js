const mongodb = require("mongodb");
const htt = require("http");

let db;
const connectionString = "mongodb+srv://jjuraboev330_db_user:RGFsU2ZF5hE8iZ5C@cluster0.oanqewp.mongodb.net/rejalar?appName=Cluster0"


mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("ERROR on connection MongoDB");
    else {
      console.log("MongoDB connection succeed");
      module.exports = client;
      
      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT, function () {
        console.log(
          'The server is running successfully on port: ${PORT}, http://localhost:${PORT}'
        );
      });
    }
  }
);