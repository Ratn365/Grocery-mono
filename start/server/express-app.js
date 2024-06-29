module.exports = async (app) => {
  app.get("/", (req, res) => {
    // throw new Error("error");
    res.send("Hello World!");
  });
};
