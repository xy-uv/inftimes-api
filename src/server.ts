import { type Server } from "http";
import mongoose from "mongoose";
import config from "./config/confg.js";
import app from "./app.js";

process.on("uncaughtException", (error) => {
  console.error(error);
  process.exit(1);
});

let server: Server;

async function bootstrap() {
  try {
    await mongoose.connect(config.mongoDBUri as string);
    console.log(`🛢   Database is connected successfully`);

    server = app.listen(config.port, () => {
      console.log(`Application  listening on port ${config.port}`);
    });
  } catch (error) {
    console.error("Failed to connect database", error);
  }

  process.on("unhandledRejection", (error) => {
    if (server) {
      server.close(() => {
        console.error(error);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}

bootstrap();

// process.on("SIGTERM", () => {
//   log.info("SIGTERM is received");
//   if (server) {
//     server.close();
//   }
// });
