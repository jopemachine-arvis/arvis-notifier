import path from "path";
import cp from "child_process";
import fs from "fs";

export const checkUpdate = () => {
  fs.chmod(path.join(__dirname, "check.js"), 0o777, () => {
    const subProcess = cp.spawn(path.join(__dirname, "check.js"), [], {
      detached: true,
      stdio: "ignore",
    });
    subProcess.unref();
  });
};
