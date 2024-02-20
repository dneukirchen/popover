import * as childProcess from 'child_process';
import * as util from 'util';
import { readFileSync } from 'fs';
import { DIST_PATH, DIST_PACKAGE_PATH } from './constants';

const exec = util.promisify(childProcess.exec);

async function gitTags() {
  const { version } = JSON.parse(readFileSync(DIST_PACKAGE_PATH, 'utf8'));
  console.log(`Tagging with ${version}`);

  const { stdout: tag } = await exec(`git tag v${version}`);
  const { stdout: push } = await exec(`git push --tags`);

  if (tag) {
    console.log(tag);
  }

  if (push) {
    console.log(push);
  }
}

async function libBuild() {
  console.log(`Building library`);

  await exec(`npm run build:prod`);
}

async function publish() {
  console.log(`Publishing`);

  const { stdout } = await exec(`npm publish ${DIST_PATH}`);

  console.log(stdout);
}

async function release() {
  await libBuild();
  await gitTags();
  await publish();
}

release();
