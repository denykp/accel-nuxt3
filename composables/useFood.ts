export const useFood = (name: string) =>
  new Promise((resolve, reject) => {
    if (name === "lemon") {
      resolve(name);
    } else if (name === "octopus") {
      reject(name);
    } else {
      reject("unknown");
    }
  });
