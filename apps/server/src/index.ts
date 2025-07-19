import createApp from "./app.ts";

const app = createApp();

app.listen({ port: 8080 }, () => {
    console.log("Server is running on port 8080");
});
