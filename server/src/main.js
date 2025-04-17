import app from "./app.js"
import { APP_PORT } from "./config/app.config.js"
import { connectDB } from "./config/mongo.config.js";

connectDB()

app.listen(APP_PORT, () => {
    console.log(`Listening on port ${APP_PORT}`);
})