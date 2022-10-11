import React from "react";
import { screen, render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

it("renders", ()=>{
    const { asFragment } = render(<App/>);
    expect(asFragment()).toMatchSnapshot();
})