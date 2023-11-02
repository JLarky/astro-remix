/// <reference types="astro/client" />

declare module "virtual:server-entry" {
  import { ServerBuild } from "@remix-run/node";
  export = serverBuild as ServerBuild;
}
