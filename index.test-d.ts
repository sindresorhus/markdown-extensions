import { expectAssignable } from "tsd";
import extension = require("./index.js");

expectAssignable<string[]>(extension);
