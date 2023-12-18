import { useState } from "react";

interface Props {
  order_id: number;
  onChange: any;
  userDataForDashboard: any;
  setUserDataForDashboard?: any;
}

export default function InputText({
  order_id,
  userDataForDashboard,
  setUserDataForDashboard,
}: any) {
  const [addInformation, setAddInformation] = useState("Add information");

  function handleInputText() {
    const index = userDataForDashboard.data.orderData.findIndex(
      (e: any) => e.order_id === order_id
    );
    userDataForDashboard.data.orderData[index] = {
      ...userDataForDashboard.data.orderData[index],
      add_information: addInformation,
    };
    console.log(userDataForDashboard);
    setUserDataForDashboard(userDataForDashboard);
  }

  return (
    <>
      <div className="form-group mb-3">
        <textarea
          className="form-control"
          name="addInformation"
          id="addInformation"
          rows={4}
          placeholder="Enter text"
          value={addInformation}
          onChange={(e: any) => {
            setAddInformation(e.target.value);
            handleInputText();
          }}
        ></textarea>
      </div>
    </>
  );
}
