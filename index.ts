import path from "path";
import execa from "execa";
import fs from "fs";

export const checkUpdate = () => {
  fs.chmod(path.resolve(__dirname, "check.js"), 0o777, () => {
    const subProcess = execa.command("node check.js", {
      windowsHide: true,
      cwd: __dirname,
      stdio: 'ignore',
    });

    subProcess.unref();

    // ** For debugging

    // const subProcess = execa.command("node check.js", {
    //   windowsHide: true,
    //   cwd: __dirname,
    //   detached: true,
    //   all: true,
    // });

    // subProcess.then((result: execa.ExecaReturnValue<string>) => {
    //   console.error(result.all);
    // });
  });
};
