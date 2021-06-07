import path from "path";
import execa from "execa";
import fs from "fs";

export const checkUpdate = () => {
  fs.chmod(path.resolve(__dirname, "check.js"), 0o777, () => {
    const subProcess = execa.command(`node check.js"`, {
      windowsHide: true,
      cwd: path.resolve(__dirname, "dist"),
      detached: true,
      stdio: 'ignore',
    });
    subProcess.unref();
  });
};
