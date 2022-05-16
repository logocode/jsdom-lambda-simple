import jsdom from "jsdom";
export const { window } = new jsdom.JSDOM("");

export async function handler() {
  console.log("Hello World");
}
