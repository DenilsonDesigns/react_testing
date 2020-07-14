import React from "react";
import { mount } from "enzyme";
import CommentBox from "../components/CommentBox/CommentBox";

let wrapped;

beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

afterEach(() => {
  wrapped.unmount();
});

it("has a textarea and a button", () => {
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(1);
});

describe("text area:", () => {
  beforeEach(() => {
    // simulating an onchange event
    wrapped.find("textarea").simulate("change", {
      target: {
        value: "new comment",
      },
    });
    wrapped.update();
  });

  it("users can type in textarea", () => {
    expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
  });

  it("when form is submitted, textarea gets emptied", () => {
    // simulate a "submit" form event
    wrapped.find("form").simulate("submit");
    wrapped.update();
    // check that wrapped is empty now.
    expect(wrapped.find("textarea").prop("value")).toEqual("");
  });
});
