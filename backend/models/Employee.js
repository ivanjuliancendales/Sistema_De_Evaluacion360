// Schema para cada objeto creado en la aplicación
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let evaluationSchema = new Schema(
    {
        date: {
            type: String,
        },
        name: {
            type: String,
        },
        rol: {
            type: String,
        },
        evaluatedPerson: {
            type: String,
        },
        workerCode: {
            type: Number,
        },
        evaluation: {
            type: Number,
        },
    },
    {
        collection: "employee",
    }
);

module.exports = mongoose.model("Employee", evaluationSchema);