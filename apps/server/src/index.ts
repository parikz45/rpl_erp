import createApp from "./app.ts";
import dotenv from "dotenv";

dotenv.config();

const { PORT } = process.env;

const app = createApp();

app.listen({ port: PORT }, () => {
    console.log(`Server listening on port ${PORT}`);
});
