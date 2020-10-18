// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";
// import "babel-polyfill";

// Mock Classes
class StorageMock {
  store: any;

  constructor() {
    this.store = {};
  }

  clear(): void {
    this.store = {};
  }

  getItem(key: string): string | null {
    return this.store[key] || null;
  }

  setItem(key: string, value: string): void {
    this.store[key] = value.toString();
  }

  removeItem(key: string): void {
    delete this.store[key];
  }
}

global.console.debug = function () {}; // NodeJS does not have console.debug, but React uses it.

Object.assign(global.window, "localStorage", new StorageMock());
Object.assign(global.window, "sessionStorage", new StorageMock());
Object.assign(
  global.navigator,
  "userAgent",
  "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.80 Mobile Safari/537.36"
);
