import { getByTestId, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "./Login";

const regexPassword = /^(?=.*?[A-Za-z])(?=.*?\d).{8,}$/;

describe("Input field testing", () => {
  test("email input", () => {
    //Arrange
    render(<Login />);
    //Assert
    const emailElement = screen.getByTestId("email-input");
    expect(emailElement).toBeInTheDocument();
    expect(emailElement).toHaveAttribute("type", "email");
  });

  test("testing valid email", () => {
    //Arrange
    render(<Login />);
    //Assert
    const emailElement = screen.getByTestId("email-input");
    userEvent.type(emailElement, "abc@mail.com");

    expect(emailElement).toHaveValue("abc@mail.com");
    expect(screen.queryByTestId("email-error")).not.toBeInTheDocument();
  });
});

test("testing password", () => {
  render(<Login />);
  const passElement = screen.getByTestId("pass-input");
  expect(passElement).toBeInTheDocument();
  expect(passElement).toHaveAttribute("type", "password");
});

test("testing valid password", () => {
  render(<Login />);
  const passElement = screen.getByTestId("pass-input");
  let password = "pass/@123&";
  expect(regexPassword.test(password)).toBe(true);
});

// test("testing invalid password", () => {
//   //Arrange
//   render(<Login />);

//   //Act
//   const passElement = screen.getByTestId("pass-input");
//   userEvent.type(passElement, "pass");
//   //Assert
 
//   const passerrorElement = getByText("pass-error");
//   expect(passElement).toHaveValue("pass");
//   expect(passerrorElement).toBeInTheDocument();
//   //expect(screen.queryByTestId("pass-error").textContent).toEqual("Invalid password");
// });

test("submit button",()=>{
  render(<Login/>)
//const button = screen.getByTestId('button')  
expect(screen.getByTestId("button")).toHaveTextContent("Login")
})
