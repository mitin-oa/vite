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

export default function DashBoardEditor({
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

    console.log(userDataForDashboard);
    setUserDataForDashboard(userDataForDashboard);
  }

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  // * ↑ VK: Significant for the backend area. Please exercise caution when making alterations
  const [addInformation, setAddInformation] = useState("Add information");
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
            <h2>Editor Dashboard Panel</h2>
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
            </div>
          </div>
          <div className="row">
            <p>Table of orders</p>
            <table className="table dashboard-table">
              <tbody>
                <tr>
                  <td style={{ minWidth: "7vw" }}>File name</td>
                  <td>Pages</td>
                  <td>Client name</td>

                  <td>Date work started</td>
                  <td>Manage</td>
                  <td>Status</td>
                  <td>Download file</td>
                  <td>Upload Edited File</td>
                  <td>Notes or Flag to manager</td>
                </tr>
                {userDataForDashboard
                  ? userDataForDashboard.data.orderData
                      .slice(-10, userDataForDashboard.data.orderData.length)
                      .sort((a: any, b: any) =>
                        a.created_at.date > b.created_at.date ? 1 : -1
                      )
                      .map((e: any) => (
                        <tr key={e.order_id}>
                          <td>{userDataForDashboard ? e.original_name : ""}</td>
                          <td>
                            {userDataForDashboard ? e.number_of_pages : ""}
                          </td>
                          <td>{userDataForDashboard ? e.client_id : ""}</td>

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
                            {e.order_status === "paid" ? (
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

                          <td>{userDataForDashboard ? e.order_status : ""}</td>
                          <td>
                            {
                              (e.order_status = "paid" ? (
                                <Button
                                  children={
                                    e.completed ? "Download" : "Not completed"
                                  }
                                  color={"orange"}
                                  style={"table-btn"}
                                  onClick={function (): void {
                                    throw new Error(
                                      "Function not implemented."
                                    );
                                  }}
                                />
                              ) : (
                                <></>
                              ))
                            }
                          </td>
                          <td>
                            {
                              (e.order_status = "paid" ? (
                                <Button
                                  children={
                                    e.completed ? "Download" : "Not completed"
                                  }
                                  color={"orange"}
                                  style={"table-btn"}
                                  onClick={function (): void {
                                    throw new Error(
                                      "Function not implemented."
                                    );
                                  }}
                                />
                              ) : (
                                <></>
                              ))
                            }
                          </td>
                          <td style={{ minWidth: "30vw" }}>
                            <div className="form-group mb-3">
                              <textarea
                                className="form-control"
                                name="addInformation"
                                id="addInformation"
                                rows={4}
                                placeholder="Enter text"
                                value={addInformation}
                                onChange={(e) =>
                                  setAddInformation(e.target.value)
                                }
                              ></textarea>
                            </div>
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
