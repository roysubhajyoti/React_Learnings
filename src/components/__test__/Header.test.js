import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/Store";
import { StaticRouter } from "react-router-dom/server";

test("Check Header logo on loading ", () => {
  //render Header in jsdom
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  // console.log(header);

  //check the logo
  const logo = header.getAllByTestId("logo");
  //why logo[0]  as we use getAllByTestId so we are getting all the occurance of logo
  expect(logo[0].src).toBe("http://localhost/dummy.png");
});

test("Check Online status  on loading ", () => {
  //render Header in jsdom
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  //check online
  const online = header.getByTestId("online-status");

  expect(online.innerHTML).toBe("OnlineStatus : 🟢");
});
test("Crt should have zero item  on loading ", () => {
  //render Header in jsdom
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  //check online
  const cart = header.getByTestId("cartlen");

  expect(cart.innerHTML).toBe("0");
});
