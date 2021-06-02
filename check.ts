#!/usr/bin/env node
import readPkg from "read-pkg";
import latestVersion from "latest-version";
import semver from "semver";
import CacheConf from "cache-conf";
import markLatest from "./lib/markLatest";

const pkg = require("./package.json");

const ONE_DAY = 86400000;

const extensionPath = process.cwd();
const conf = new CacheConf({ projectName: pkg.name });

const checkNpm = (pkg: any) =>
  latestVersion(pkg.name).then((version) => ({
    latest: version,
    current: pkg.version,
    name: pkg.name,
  }));

readPkg(extensionPath).then((pkg: any) => {
  if (conf.has(pkg.name)) {
    // Skip checking if a valid entry exists
    return;
  }

  return checkNpm(pkg).then((res) => {
    // Store the latest version in the cache for one day
    conf.set(res.name, res.latest, { maxAge: ONE_DAY });

    if (!semver.eq(res.latest, res.current)) {
      return markLatest(extensionPath, res.latest);
    }
  });
});

// `Update available: ${res.current} → ${res.latest}. Run \`npm install -g ${res.name}\``
