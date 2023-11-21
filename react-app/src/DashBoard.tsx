import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import ShortHeader from "./components/shortHeader/shortHeader";
import { Footer } from "./components/footer/footer";

// * VK: Significant for the backend area. Please exercise caution when making alterations
import { getUserDataForDashboard } from "./components/scripts/getUserDataForDashboard";
import { HeaderMenu } from "./components/header/header";
import SignUpForm from "./components/modal/SignUpForm";

export default function Dashboard({
  kind,
  onSignIn,
  handleSignIn,
  modalIsOpen,
  setIsOpen,
}: any) {
  const isMobileScreen = useMediaQuery({ query: "(max-width: 1160px" });
  const isPhoneScreen = useMediaQuery({ query: "(max-width: 760px" });

  // * ↓ VK: Significant for the backend area. Please exercise caution when making alterations
  const [userDataForDashboard, setUserDataForDashboard] = useState<any | null>(
    null
  );

  useEffect(() => {
    const requestData = async () => {
      try {
        // Запрос комбинированных данных о пользователе при загрузке компонента
        const serverAnswer = await getUserDataForDashboard();
        setUserDataForDashboard(serverAnswer); // Сохраняем данные в состоянии
      } catch (error) {
        console.error("An error occurred while loading data:", error);
      }
    };

    requestData(); // Вызываем асинхронную функцию внутри useEffect
  }, []);

  // Проверка наличия данных перед обработкой
  if (userDataForDashboard !== null && userDataForDashboard !== undefined) {
    console.log("userDataForDashboard", userDataForDashboard);
    console.log("email", userDataForDashboard.data.userData[0].email);
  }
  // * ↑ VK: Significant for the backend area. Please exercise caution when making alterations

  return (
    <>
      <div className="app">
        <HeaderMenu
          kind={kind}
          onSignIn={onSignIn}
          handleSignIn={handleSignIn}
          modalIsOpen={modalIsOpen}
          setIsOpen={setIsOpen}
          signedUp={false}
          handleSignUp={false}
        />
        <section className="main-content">
          <div className="row">
            <h2>Dashboard Panel</h2>
          </div>
          <div className="row">
            <div className="col-md-6" id="leftColumn">
              <p>Profile info</p>
              <form
                className="form mx-4 mb-4"
                action="/api/signup"
                method="post"
                id="reg-form"
              >
                <div className="col-xs-12">
                  <div className="form-group ">
                    <label htmlFor="username">User name:</label>
                    <input
                      type="text"
                      className="input-field"
                      id="username"
                      name="username"
                      placeholder="Enter user name"
                      defaultValue="user1"
                      required
                    />
                    <br />
                  </div>
                </div>
                <div className="col-xs-12">
                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      className="input-field"
                      id="email"
                      name="email"
                      placeholder="Enter email"
                      defaultValue={"client@example.com"}
                      value={
                        userDataForDashboard
                          ? userDataForDashboard.data.userData[0].email
                          : "client@example.com"
                      }
                      required
                    />
                    <br />
                  </div>
                </div>
                <div className="col-xs-12">
                  <div className="form-group">
                    <label htmlFor="phone">Phone number:</label>
                    <input
                      type="text"
                      className="input-field"
                      id="phone"
                      name="phone"
                      placeholder="Enter phone"
                      defaultValue="+3530000000"
                      value={
                        userDataForDashboard
                          ? userDataForDashboard.data.userData[0].phone
                          : "+3530000000"
                      }
                      required
                    />
                    <br />
                  </div>
                </div>
                <div className="col-xs-12">
                  <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                      type="password"
                      className="input-field"
                      id="password"
                      name="password"
                      placeholder="Enter password"
                      defaultValue="pass"
                      required
                    />
                  </div>
                </div>
              </form>
              <div className="row">
                <p>Credit points</p>
                <table className="table">
                  <tbody>
                    <tr>
                      <td>Credit points</td>
                      <td>
                        {userDataForDashboard
                          ? userDataForDashboard.data.userData[0].points
                          : 0}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="row">
                <p>Recent transactions (eg. 5 last transactions)</p>
                <table className="table">
                  <tbody>
                    <tr>
                      <td>Transaction</td>
                      <td>Date</td>
                      <td>Status</td>
                      <td>Cost in credits</td>
                      <td>Cost in Euro</td>
                    </tr>

                    {userDataForDashboard
                      ? userDataForDashboard.data.paymentsData.map((e: any) => (
                          <tr>
                            <td>
                              {userDataForDashboard ? e.paypal_order_id : ""}
                            </td>
                            <td>{userDataForDashboard ? e.created_at : ""}</td>
                            <td>{userDataForDashboard ? e.status : ""}</td>
                            <td>{userDataForDashboard ? e.amount : ""}</td>
                            <td>{userDataForDashboard ? e.amount * 20 : ""}</td>
                          </tr>
                        ))
                      : ""}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="col-md-6" id="rightColumn">
              <div className="row">
                <p>
                  Recent files (eg. 10 last files) with all the info of each
                </p>
                <table className="table">
                  <tbody>
                    <tr>
                      <td>Name</td>
                      <td>Cost in credits</td>
                    </tr>
                    <tr>
                      <td>{1}</td>
                      <td>{20}</td>
                    </tr>
                    <tr>
                      <td>{2}</td>
                      <td>{20}</td>
                    </tr>
                    <tr>
                      <td>{3}</td>
                      <td>{20}</td>
                    </tr>
                    <tr>
                      <td>{4}</td>
                      <td>{20}</td>
                    </tr>
                    <tr>
                      <td>{5}</td>
                      <td>{20}</td>
                    </tr>
                    <tr>
                      <td>{6}</td>
                      <td>{20}</td>
                    </tr>
                    <tr>
                      <td>{7}</td>
                      <td>{20}</td>
                    </tr>
                    <tr>
                      <td>{8}</td>
                      <td>{20}</td>
                    </tr>
                    <tr>
                      <td>{9}</td>
                      <td>{20}</td>
                    </tr>
                    <tr>
                      <td>{10}</td>
                      <td>{20}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="row">
                <p>Editor notes (recent/all editor notes)</p>
                <table className="table dashboard-table">
                  <tbody>
                    <tr>
                      <td>Name of document</td>
                      <td>Notes</td>
                    </tr>
                    <tr>
                      <td>{1}</td>
                      <td>{"Dfbjbd dfvjd kv gjdk c.,vm xvjopef[f "}</td>
                    </tr>
                    <tr>
                      <td>{2}</td>
                      <td>{"Dfbjbd dfvjd kv gjdk c.,vm xvjopef[f "}</td>
                    </tr>
                    <tr>
                      <td>{3}</td>
                      <td>{"Dfbjbd dfvjd kv gjdk c.,vm xvjopef[f "}</td>
                    </tr>
                    <tr>
                      <td>{4}</td>
                      <td>{"Dfbjbd dfvjd kv gjdk c.,vm xvjopef[f "}</td>
                    </tr>
                    <tr>
                      <td>{5}</td>
                      <td>{"Dfbjbd dfvjd kv gjdk c.,vm xvjopef[f "}</td>
                    </tr>
                    <tr>
                      <td>{6}</td>
                      <td>{"Dfbjbd dfvjd kv gjdk c.,vm xvjopef[f "}</td>
                    </tr>
                    <tr>
                      <td>{7}</td>
                      <td>{"Dfbjbd dfvjd kv gjdk c.,vm xvjopef[f "}</td>
                    </tr>
                    <tr>
                      <td>{8}</td>
                      <td>{"Dfbjbd dfvjd kv gjdk c.,vm xvjopef[f "}</td>
                    </tr>
                    <tr>
                      <td>{9}</td>
                      <td>{"Dfbjbd dfvjd kv gjdk c.,vm xvjopef[f "}</td>
                    </tr>
                    <tr>
                      <td>{10}</td>
                      <td>{"Dfbjbd dfvjd kv gjdk c.,vm xvjopef[f "}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer kind="short" />
    </>
  );
}
