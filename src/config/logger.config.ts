import winston from "winston";
import { getCorelationId } from "../utils/helpers/request.healper";
import DailyRotateFile from "winston-daily-rotate-file";

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp({ format: "DD-MM-YYYY HH:mm:ss" }),
    winston.format.json(),
    // define a custom print
    winston.format.printf(({ timestamp, level, message, ...data }) => {
      const output = {
        timestamp,
        level,
        message,
        corelationId: getCorelationId(),
        data,
      };
      return JSON.stringify(output);
    })
  ),
  transports: [
        new winston.transports.Console(),
        new DailyRotateFile({
            filename: "logs/%DATE%-app.log", // The file name pattern
            datePattern: "YYYY-MM-DD", // The date format
            maxSize: "20m", // The maximum size of the log file
            maxFiles: "14d", // The maximum number of log files to keep
        })
    ],
});

export default logger;
