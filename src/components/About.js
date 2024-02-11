import { useContext } from "react";
import { UserContext } from "../utils/UserContext";

const About = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="w-full min-h-screen">
      <h1>About Us Page</h1>
      <h1>
        {user.name}-{user.email}
      </h1>
      <p> This is the Page about FoodVilla</p>
    </div>
  );
};

export default About;
