import { createContext } from "react";

export const UserContext = createContext({
  user: {
    name: "SJR",
    email: "SJR@google.com",
  },
});

UserContext.displayName = "UserContext";
