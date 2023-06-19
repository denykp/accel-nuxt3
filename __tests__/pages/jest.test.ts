// import { describe, test } from "ts-jest";
import { url, setup } from "@nuxt/test-utils";
// import axios from "axios";
import jest from "../pages/jest.vue";

describe("Page Content", async () => {
  await setup({ server: true });

  // console.log("axios", axios.HttpStatusCode);

  it("should return 'Unit Test menggunakan Jest'", async () => {
    const html = await url("/jest");
    console.log(html);

    expect("a").toBe("a");
  });
});

// import { mount } from "@vue/test-utils";
// // import { setup } from "@nuxt/test-utils";
// import jest from "../../pages/jest.vue";

// describe("NuxtLogo", async () => {
//   // await setup({ browser: true });

//   it("should contain", () => {
//     const wrapper = mount(jest);
//     expect(wrapper.text()).toContain("Unit Test menggunakan Jest");
//   });
// });
