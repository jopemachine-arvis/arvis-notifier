import path from "path";
import fse from "fs-extra";
import { checkFileExists } from "./util";

export default async (extensionPath: string, latestVersion: string) => {
  const workflowFile = path.resolve(extensionPath, "arvis-workflow.json");
  const pluginFile = path.resolve(extensionPath, "arvis-plugin.json");

  let file = "";
  if (await checkFileExists(workflowFile)) {
    file = workflowFile;
  } else if (await checkFileExists(pluginFile)) {
    file = pluginFile;
  } else {
    console.error("It seems project is not arvis-extension");
    return;
  }

  return fse.readJSON(file).then((json) => {
    if (file === workflowFile) {
      json.latest = latestVersion;
    } else if (file === pluginFile) {
      json.latest = latestVersion;
    } else {
      console.error("It seems project is not arvis-extension");
      return;
    }

    fse.writeJSON(file, json, { encoding: "utf8", spaces: 4 });
  });
};
