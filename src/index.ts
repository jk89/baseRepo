import express from "express";
import { extendApp as extendAppDep1 } from "dep-repo-1";
import { extendApp as extendAppDep2 } from "dep-repo-2";
import { https } from "firebase-functions";

const app = express();

extendAppDep1(app);
extendAppDep2(app);


export const webApi = https.onRequest(app);

export { app };