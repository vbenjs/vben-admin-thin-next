import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import chalk from 'chalk';

export const isFunction = (arg: unknown): arg is (...args: any[]) => any =>
  typeof arg === 'function';

export const isRegExp = (arg: unknown): arg is RegExp =>
  Object.prototype.toString.call(arg) === '[object RegExp]';

export function isDevFn(mode: string): boolean {
  return mode === 'development';
}

export function isProdFn(mode: string): boolean {
  return mode === 'production';
}

/**
 * Whether to generate package preview
 */
export function isReportMode(): boolean {
  return process.env.REPORT === 'true';
}

/**
 * Whether to generate gzip for packaging
 */
export function isBuildGzip(): boolean {
  return process.env.VITE_BUILD_GZIP === 'true';
}

export interface ViteEnv {
  VITE_PORT: number;
  VITE_USE_MOCK: boolean;
  VITE_USE_PWA: boolean;
  VITE_PUBLIC_PATH: string;
  VITE_PROXY: [string, string][];
  VITE_GLOB_APP_TITLE: string;
  VITE_GLOB_APP_SHORT_NAME: string;
  VITE_USE_CDN: boolean;
  VITE_DROP_CONSOLE: boolean;
  VITE_BUILD_GZIP: boolean;
  VITE_DYNAMIC_IMPORT: boolean;
  VITE_LEGACY: boolean;
}

// Read all environment variable configuration files to process.env
export function wrapperEnv(envConf: any): ViteEnv {
  const ret: any = {};

  for (const envName of Object.keys(envConf)) {
    let realName = envConf[envName].replace(/\\n/g, '\n');
    realName = realName === 'true' ? true : realName === 'false' ? false : realName;
    if (envName === 'VITE_PORT') {
      realName = Number(realName);
    }
    if (envName === 'VITE_PROXY') {
      try {
        realName = JSON.parse(realName);
      } catch (error) {}
    }
    ret[envName] = realName;
    process.env[envName] = realName;
  }
  return ret;
}

/**
 * Get the environment variables starting with the specified prefix
 * @param match prefix
 * @param confFiles ext
 */
export function getEnvConfig(match = 'VITE_GLOB_', confFiles = ['.env', '.env.production']) {
  let envConfig = {};
  confFiles.forEach((item) => {
    try {
      const env = dotenv.parse(fs.readFileSync(path.resolve(process.cwd(), item)));

      envConfig = { ...envConfig, ...env };
    } catch (error) {}
  });
  Object.keys(envConfig).forEach((key) => {
    const reg = new RegExp(`^(${match})`);
    if (!reg.test(key)) {
      Reflect.deleteProperty(envConfig, key);
    }
  });
  return envConfig;
}

function consoleFn(color: string, message: any) {
  console.log(
    chalk.blue.bold('****************  ') +
      (chalk as any)[color].bold(message) +
      chalk.blue.bold('  ****************')
  );
}

/**
 * warnConsole
 * @param message
 */
export function successConsole(message: any) {
  consoleFn('green', '✨ ' + message);
}

/**
 * warnConsole
 * @param message
 */
export function errorConsole(message: any) {
  consoleFn('red', '✨ ' + message);
}

/**
 * warnConsole
 * @param message message
 */
export function warnConsole(message: any) {
  consoleFn('yellow', '✨ ' + message);
}

/**
 * Get user root directory
 * @param dir file path
 */
export function getCwdPath(...dir: string[]) {
  return path.resolve(process.cwd(), ...dir);
}
