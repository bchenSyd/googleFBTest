import { rest } from "msw";
import sampleResponse  from "./sample.json";


export const handlers = [
  rest.get("/api/sample", (req, res, ctx) =>
    res(ctx.delay(1200), ctx.status(200), ctx.json(sampleResponse))
  ),
];
