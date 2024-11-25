import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import MarsRoverCard from "./HelloWorld.vue";

describe("MarsRoverCard", () => {
  it("renders the correct text", () => {
    const wrapper = mount(MarsRoverCard, {
      props: {
        msg: "Hello, Mars!",
      },
    });

    expect(wrapper.text()).toContain("Mars Rover");
  });
});
