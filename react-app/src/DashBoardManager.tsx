import { useEffect, useState } from "react";

import { Footer } from "./components/footer/footer";
import HeaderMenu from "./components/header/header";
// * VK: Significant for the backend area. Please exercise caution when making alterations
import { getUserDataForDashboard } from "./components/scripts/getUserDataForDashboard";
import { sendHandleOrderRequest } from "./components/scripts/handleOrderRequest";

import Button from "./components/Button";
import ModalWindow from "./components/modal/modal";
import SignInForm from "./components/modal/SignUpForm";
import Select from "react-select";
import DownLoadFile from "./components/DownloadFile";
import ChangeProfileForm from "./components/modal/ChangeProfileForm";

export default function DashBoardManager({
  kind,
  onSignIn,
  handleSignIn,
  modalIsOpen,
  setIsOpen,
  onSignUp,
  handleSignUp,
  setUserProfileData,
}: any) {
  // * ↓ VK: Significant for the backend area. Please exercise caution when making alterations
  const [userDataForDashboard, setUserDataForDashboard] = useState<any | null>(
    null
  );
  const [selectOptions, setSelectOptions]: any[] = useState([]);

  useEffect(() => {
    const requestData = async () => {
      try {
        // Запрос комбинированных данных о пользователе при загрузке компонента
        const serverAnswer = await getUserDataForDashboard();
        console.log(serverAnswer);
        setUserDataForDashboard(serverAnswer);
        // Сохраняем данные в состоянии
        const newSelectOptions = serverAnswer.data.unassignedOrders.map(
          (e: any) => {
            return { value: e.order_id, label: `Order Id #${e.order_id}` };
          }
        );
        setSelectOptions(newSelectOptions);
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

  async function AssignOrder(orderId: string, points_cost: string) {
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
          onSignUp={onSignUp}
          setUserProfileData={setUserProfileData}
          handleSignUp={handleSignUp}
        />
        <section className="main-content flex-column">
          <div className="row">
            <h2>Manager Dashboard Panel</h2>
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
                        ? userDataForDashboard.data.managerData[0].username
                        : 0}
                    </td>
                    <td>
                      <ModalWindow
                        title={"Change profile data"}
                        childComp={
                          <ChangeProfileForm
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
                  ? userDataForDashboard.data.unassignedOrders
                      .slice(
                        -10,
                        userDataForDashboard.data.unassignedOrders.length
                      )
                      .sort((a: any, b: any) =>
                        a.created_at.date > b.created_at.date ? 1 : -1
                      )
                      .map((e: any) => (
                        <tr>
                          <td>{userDataForDashboard ? e.client_id : ""}</td>
                          <td>{userDataForDashboard ? e.status : ""}</td>
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
                            <Button
                              children={"Start processing"}
                              color={"orange"}
                              style={"table-btn"}
                              disable={true}
                              onClick={() => {
                                "handleOrder(e.order_id, e.points_cost);";
                              }}
                            />
                          </td>
                          <td>
                            {e.order_status !== "pending" ? (
                              <Button
                                children={
                                  e.completed ? "Download" : "Not completed"
                                }
                                color={"orange"}
                                style={"table-btn"}
                                onClick={() =>
                                  "<DownLoadFile fileName={e.name} />"
                                }
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

          <div className="row">
            <p>Editors workload table</p>
            <table className="table dashboard-table">
              <tbody>
                <tr>
                  <td>Editor</td>
                  <td>Current in-work orders number</td>
                  <td>
                    Current working pages number (sum of pages for orders)
                  </td>
                  <td>Assign order</td>
                  <td>Rating (by clients)</td>
                </tr>
                {userDataForDashboard
                  ? userDataForDashboard.data.editorsWorkload.map((e: any) => (
                      <tr>
                        <td>{userDataForDashboard ? e.editor_name : ""}</td>
                        <td>{userDataForDashboard ? e.total_orders : ""}</td>
                        <td>{userDataForDashboard ? e.total_pages : ""}</td>

                        <td>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <Select options={selectOptions} />
                            <Button
                              children={"Assign Order"}
                              color={"orange"}
                              style={"table-btn"}
                              onClick={() => AssignOrder}
                            />
                          </div>
                        </td>
                        <td>...</td>
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
