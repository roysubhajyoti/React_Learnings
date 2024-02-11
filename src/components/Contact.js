import { UserContext } from "../utils/UserContext";
import { useContext } from "react";
const Contact = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="w-full min-h-screen">
      <h1>enter all the details here</h1>
      <h1 className="font-bold text-black text-xl">
        please Contact with {user.name}-----{user.email}
      </h1>
    </div>
  );
};

export default Contact;
