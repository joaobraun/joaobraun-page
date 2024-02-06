import Express from "express";
import indexRoute from "./routes/index.js";

const port = process.env.PORT || 10000;
const app = Express();

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use(Express.static("public"));

app.set("view engine", "pug");
app.set("views", "./views");

app.use("/", indexRoute);

app.listen(port, () => {
	console.log(`Server initialized on port:${port}`);
});
