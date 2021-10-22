#!/usr/bin/env node
import pkgDir from "pkg-dir";
import latestVersion from "latest-version";
import semver from "semver";
import CacheConf from "cache-conf";
import fse from "fs-extra";
import path from "path";
import markLatest from "./lib/markLatest";
import { readJson5 } from "./lib/readJson5";

const ONE_DAY = 86400000;

const checkNpm = (pkg: any) =>
  latestVersion(pkg.name).then((version) => ({
    latest: version,
    current: pkg.version,
    name: pkg.name,
  }));

const outer = __dirname.split(path.sep).slice(0, -2).join(path.sep);

pkgDir(outer).then(async (extensionPath: any) => {
  const pkg = await readJson5(path.resolve(extensionPath, "package.json")) as any;
  const conf = new CacheConf({ projectName: pkg.name });

  if (conf.has(pkg.name)) {
    // Skip checking if a valid entry exists
    return;
  }

  return checkNpm(pkg)
    .then((res) => {
      // Store the latest version in the cache for one day
      conf.set(res.name, res.latest, { maxAge: ONE_DAY });

      if (!semver.eq(res.latest, res.current)) {
        return markLatest(extensionPath, res.latest);
      }
    })
    .catch(console.error);
});
