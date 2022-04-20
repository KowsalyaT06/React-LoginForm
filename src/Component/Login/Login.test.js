import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "./Login";

describe("Input field testing", () => {
  test("email input", () => {
    render(<Login />);
    const emailElement = screen.getByTestId("email-input");
    expect(emailElement).toBeInTheDocument();
    expect(emailElement).toHaveAttribute('type','email')
  });

  test("testing valid email",()=>{
      render(<Login/>);
      const emailElement=screen.getAllByTestId("email-input");
      userEvent.type(emailElement,"abc@mail.com")

      expect(screen.getByTestId("email-input")).toHaveValue("abc@mail.com")
      //expect(screen.getByTestId("email-input")).
      expect(screen.getByTestId("email-input")).toHaveValue("test@mail.com");
  })
});
