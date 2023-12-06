import { useEffect, useState } from "react";

import { Footer } from "./components/footer/footer";
import HeaderMenu from "./components/header/header";
// * VK: Significant for the backend area. Please exercise caution when making alterations
import { getUserDataForDashboard } from "./components/scripts/getUserDataForDashboard";
import { sendHandleOrderRequest } from "./components/scripts/handleOrderRequest";

import Button from "./components/Button";
import ModalWindow from "./components/modal/modal";
import SignInForm from "./components/modal/SignUpForm";
import { Link } from "react-router-dom";

export default function Dashboard({
  kind,
  onSignIn,
  handleSignIn,
  modalIsOpen,
  setIsOpen,
  handleSignUp,
  setUserProfileData,
}: any) {
  // * ↓ VK: Significant for the backend area. Please exercise caution when making alterations
  const [userDataForDashboard, setUserDataForDashboard] = useState<any | null>(
    null
  );

  useEffect(() => {
    const requestData = async () => {
      try {
        // Запрос комбинированных данных о пользователе при загрузке компонента
        const serverAnswer = await getUserDataForDashboard();
        console.log(serverAnswer);
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
  }

  async function handleOrder(orderId: string, points_cost: string) {
    //How pass order_id to server handle with order?
    const serverAnswer = await sendHandleOrderRequest(orderId, points_cost);

    alert(serverAnswer.message);

    let answer = serverAnswer.message === "Low balance" ? true : false;

    const index = userDataForDashboard.data.fileData.findIndex(
      (e: any) => e.order_id === orderId
    );

    userDataForDashboard.data.fileData[index] = {
      ...userDataForDashboard.data.fileData[index],
      order_status: "paid",
    };

    //console.log(userDataForDashboard);
    setUserDataForDashboard(userDataForDashboard);
  }

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
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
          setUserProfileData={setUserProfileData}
          handleSignUp={handleSignUp}
        />
        <section className="main-content flex-column">
          <div className="row">
            <h2>Dashboard Panel</h2>
          </div>
          <div className="row">
            <div className="col-md-6 leftColumn" id="leftColumn">
              <p>Profile info</p>
              <table className="table">
                <tbody>
                  <tr>
                    <td>User name</td>
                    <td>
                      {userDataForDashboard
                        ? userDataForDashboard.data.userData[0].username
                        : 0}
                    </td>
                    <td>
                      <ModalWindow
                        title={"Change"}
                        childComp={
                          <SignInForm
                            onSignUp={handleSignUp}
                            onCloseModal={closeModal}
                            setUserProfileData={setUserProfileData}
                          />
                        }
                        modalIsOpen={modalIsOpen}
                        openModal={openModal}
                        closeModal={closeModal}
                        btnModalStyle="table-btn"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
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
                      <td>
                        <Link className="nav__link nav__text" to="/BuyCredits">
                          <Button
                            children={"Buy credits"}
                            color={"orange"}
                            style="table-btn"
                            onClick={() => ""}
                          />
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="col-md-6 rightColumn">
              <p>Recent transactions (eg. 5 last transactions)</p>
              <table className="table">
                <tbody>
                  <tr>
                    <td>Transaction</td>
                    <td>Date</td>
                    <td>Status</td>
                    <td>Cost in credits</td>
                  </tr>

                  {userDataForDashboard
                    ? userDataForDashboard.data.paymentsData.map((e: any) => (
                        <tr>
                          <td>
                            {userDataForDashboard ? e.paypal_order_id : ""}
                          </td>
                          <td>
                            {userDataForDashboard
                              ? e.created_at.toLocaleString().split("T")[0]
                              : ""}
                          </td>
                          <td>{userDataForDashboard ? e.status : ""}</td>
                          <td>{userDataForDashboard ? e.amount : ""}</td>
                        </tr>
                      ))
                    : ""}
                </tbody>
              </table>
            </div>
          </div>

          <div className="row">
            <p>Recent files (eg. 10 last files) with all the info of each</p>
            <table className="table dashboard-table">
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>Status</td>
                  <td>Date</td>
                  <td>Manage</td>
                  <td>Download</td>
                </tr>
                {userDataForDashboard
                  ? userDataForDashboard.data.fileData
                      .slice(-10, userDataForDashboard.data.fileData.length)
                      .sort((a: any, b: any) =>
                        a.created_at.date > b.created_at.date ? 1 : -1
                      )
                      .map((e: any) => (
                        <tr>
                          <td>{userDataForDashboard ? e.original_name : ""}</td>
                          <td>{userDataForDashboard ? e.order_status : ""}</td>
                          <td>
                            {userDataForDashboard
                              ? e.created_at.toString().split("T")[0] +
                                " " +
                                e.created_at
                                  .toString()
                                  .split("T")[1]
                                  .split(".")[0]
                              : ""}
                          </td>
                          <td>
                            {e.order_status === "pending" ? (
                              e.points_cost <
                              userDataForDashboard.data.userData[0].points ? (
                                <Button
                                  children={"Start processing"}
                                  color={"orange"}
                                  style={"table-btn"}
                                  disable={true}
                                  onClick={() => {
                                    handleOrder(e.order_id, e.points_cost);
                                  }}
                                />
                              ) : (
                                <>
                                  <a>Not enough credits</a>
                                </>
                              )
                            ) : (
                              <></>
                            )}
                          </td>
                          <td>
                            {e.order_status !== "pending" ? (
                              <Button
                                children={
                                  e.completed ? "Download" : "Not completed"
                                }
                                color={"orange"}
                                style={"table-btn"}
                                onClick={function (): void {
                                  throw new Error("Function not implemented.");
                                }}
                              />
                            ) : (
                              <></>
                            )}
                          </td>
                        </tr>
                      ))
                  : ""}
              </tbody>
            </table>
          </div>
        </section>
      </div>
      <Footer kind="short" />
    </>
  );
}

{
  /* <form
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
              </form>*/
}
