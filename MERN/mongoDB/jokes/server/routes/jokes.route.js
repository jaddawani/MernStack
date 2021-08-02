const jokesContollers = require("../controllers/jokes.controller");

module.export = app => {
    app.get("/api/jokes/" , jokescontrollers.findAllJokes);
    app.get("/api/jokes/:id" , jokescontrollers.findOneSinglejoke)
    app.post("/api/jokes/new" , jokescontroller.reateNewjoke)
    app.put("/api/jokes/update/:id" , jokescontrollers.updateExistingjoke)
    app.delete("/api/jokes/delete/:id" , jokescontrollers.deleteAnExistingjoke)

}