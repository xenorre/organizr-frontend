import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import AuthForm from "@/components/AuthForm";

describe("AuthForm", () => {
  it("displays validation error when email is empty", async () => {
    render(<AuthForm mode="sign-in" onSubmit={jest.fn()} />);
    fireEvent.click(screen.getByRole("button"));
    expect(
      await screen.findByText(/email is required|email.*wymagany/i)
    ).toBeInTheDocument();
  });

  it("calls onSubmit with correct data", async () => {
    const onSubmit = jest.fn();
    render(<AuthForm mode="sign-in" onSubmit={onSubmit} />);
    fireEvent.input(screen.getByPlaceholderText("you@example.com"), {
      target: { value: "test@example.com" },
    });
    fireEvent.input(screen.getByPlaceholderText("Your password"), {
      target: { value: "Test123!" },
    });
    fireEvent.click(screen.getByRole("button"));
    await waitFor(() => expect(onSubmit).toHaveBeenCalled());
  });
});
