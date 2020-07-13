import React from "react";
import { shallow } from "enzyme";
import App from "../App";

import CommentBox from "../components/CommentBox/CommentBox";
import CommentList from "../components/CommentList/CommentList";

let wrapped;
beforeEach(() => {
  wrapped = shallow(<App />);
});

it("shows one comment box", () => {
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it("shows a comment list", () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});
