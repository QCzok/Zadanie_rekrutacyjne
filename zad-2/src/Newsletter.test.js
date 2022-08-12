import { render, fireEvent } from "@testing-library/react";
import Newsletter from "./Newsletter";

describe("zad 2", () => {
  test("form submit", () => {
    const email = "john.doe@example.com";

    const onSubmit = jest.fn();

    const { getByRole } = render(<Newsletter onSubmit={onSubmit} />);

    fireEvent.change(getByRole("textbox"), {
      target: {
        value: email,
      },
    });

    fireEvent.click(getByRole("button"));

    expect(onSubmit).toHaveBeenCalledWith(email);
  });
});
