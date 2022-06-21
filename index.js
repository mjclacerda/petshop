import express from "express";
import cors from "cors";
import winston from "winston";
import proprietarioRouter from "./routes/proprietario.route.js";
import animalRouter from "./routes/animal.route.js";
import servicoRouter from "./routes/servico.route.js";
import postRouter from "./routes/post.route.js";

const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level} ${message}`;
});
global.logger = winston.createLogger({
  level: "silly",
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "petshop-api.log" }),
  ],
  format: combine(label({ label: "petshop-api" }), timestamp(), myFormat),
});

const app = express();
app.use(express.json());
app.use(cors());
app.use("/proprietario", proprietarioRouter);
app.use("/animal", animalRouter);
app.use("/servico", servicoRouter);
app.use("/post", postRouter)
app.use((err, req, res, next) => {
  logger.error(`${req.method} ${req.baseUrl} - ${err.message}`); //o log está capturando o método de requisição, a url origem da requisição e a mensagem de erro.
  res.status(400).send({ error: err.message }); //o callback mostra para o usuário a mensagem de erro
});

app.listen(3000, () => console.log("Api Started"));
