import { createRequestHandler } from "@remix-run/node";

const build = () => import("virtual:server-entry");
export const requestHandler = createRequestHandler(build);
