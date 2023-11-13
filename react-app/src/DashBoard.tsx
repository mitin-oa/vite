import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import ShortHeader from "./components/shortHeader/shortHeader";
import { Footer } from "./components/footer/footer";
import { getUserDataForDashboard } from "./components/scripts/getUserDataForDashboard";

// * VK: Significant for the backend area. Please exercise caution when making alterations

export default function Dashboard() {
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
    <div className="app">
      <ShortHeader kind="short" />
      <section className="main-content">
        <div className="row">
          <p>Dashboard Panel</p>
          <p>Profile info</p>
          <p>Credit points</p>
          <p>Recent transactions (eg. 5 last transactions)</p>
          <p>Recent files (eg. 10 last files) with all the info of each</p>
          <p>Editor notes (recent/all editor notes)</p>
        </div>
      </section>
      <Footer kind="short" />
    </div>
  );
}
