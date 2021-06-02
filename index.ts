import path from 'path';
import cp from 'child_process';

export default () => {
  const subProcess = cp.spawn(path.join(__dirname, "check.js"), [], {
    detached: true,
    stdio: "ignore",
  });
  subProcess.unref();
};
