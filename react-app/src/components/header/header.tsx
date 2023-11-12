import { useState } from "react";
import "./header.scss";
import Logo from "../../../public/logo-white-ec720b-background-033c5a.png";
import { HashLink as Link } from "react-router-hash-link";
import { Navbar } from "../burger/navBar";
import ModalWindow from "../modal/modal";
import SignInForm from "../modal/SignUpForm";
import LogInForm from "../modal/LogInForm";

// * VK: Significant for the backend area. Please exercise caution when making alterations
import { sendLogInRequest } from '../scripts/logIn';

interface IHeaderProps {
  kind?: "full" | "short";
}

export function HeaderMenu({ kind }: IHeaderProps) {
  const [signedIn, onSignIn] = useState(false);

  // * ↓ VK: Significant for the backend area. Please exercise caution when making alterations
  async function handleSignIn(userData: { username: string; password: string }) {
    // * VK: userData содержит имя пользователя и пароль из формы
    const answer = await sendLogInRequest(userData);
    console.log(answer, 'answer');

    if (answer.status === 'success') {
      // * VK: Логика в случае успешной авторизации
      // console.log('Server response OK:', data);
      alert(answer.message);

      // * VK: Прежний код, который выполнялся после LogIn и вызова функции handleSignIn
      onSignIn(!signedIn);
      // * VK: Передача данных для закрытия модального окна
      setIsOpen(!modalIsOpen);

    } else {
      // * VK: Логика в случае неуспешной авторизации
      // console.log('Server response NOT OK:', data);
      if (answer.HTTP_status === 400) {
        // TODO VK: дополнить логику на случай неуспешной авторизации
        alert(answer.message);
      } else if (answer.HTTP_status === 400) {
        // TODO VK: дополнить логику на случай сбоя в работе сервера
        alert(answer.message);
      } else {
        // TODO VK: пересмотреть этот способ обработки ошибок, он не работает
        alert('Unknown error!');
      }
    }
  }
  // * ↑ VK: Significant for the backend area. Please exercise caution when making alterations


  const [signedUp, onSignUp] = useState(true);
  function handleSignUp() {
    onSignUp(!signedUp);
  }
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  console.log(signedIn, 'signedIn');
  console.log(signedUp);
  
  return (
    <header className={kind === "short" ? "header__short" : "header"}>
      <div className="wrapper">
        {kind === "full" ? (
          <div className="logo">
            <img className="logo__img" alt="LOGO" src={Logo}></img>
          </div>
        ) : (
          <></>
        )}
        {kind === "short" ? (
          <>
            <Link to="/">
              <button
                type="button"
                className={"btn btn-warning"}
                style={{ padding: "0px" }}
              >
                <img className="logo__img" alt="LOGO" src={Logo} />
              </button>
            </Link>
          </>
        ) : (
          <></>
        )}
        <ul className={kind === "short" ? "nav__short" : "nav"}>
          {signedIn ? (
            <>
              {kind === "full" ? (
                <>
                  <Link className="nav__link nav__text" to="AdminPanel">
                    Dashboard
                  </Link>
                  <Link className="nav__link nav__text" to="UpLoad">
                    File Upload
                  </Link>

                  <Link className="nav__link nav__text" to="BuyCredits">
                    Buy Credits
                  </Link>
                </>
              ) : (
                <></>
              )}

              <ModalWindow
              // * VK: This part of the code will be displayed if the variable signedIn == true
                title={"Log In"}
                childComp={
                  signedIn && signedUp ? (
                    <LogInForm
                      onSignIn={handleSignIn}
                      onSignUp={handleSignUp}
                    />
                  ) : (
                    <SignInForm onSignUp={handleSignUp} />
                  )
                }
                modalIsOpen={modalIsOpen}
                openModal={openModal}
                closeModal={closeModal}
              />
            </>
          ) : (
            <>
              {kind === "full" ? (
                <>
                  <Link className="nav__link nav__text" to="About">
                    About the service
                  </Link>
                  <Link className="nav__link nav__text" to="CalculateCost">
                    Calculate Cost
                  </Link>
                  <Link className="nav__link nav__text" to="UpLoad">
                    Upload Form
                  </Link>
                </>
              ) : (
                <></>
              )}
              <ModalWindow
                title={"Log In"}
                childComp={
                  !signedIn && signedUp ? (
                    <LogInForm
                      onSignIn={handleSignIn}
                      onSignUp={handleSignUp}
                    />
                  ) : (
                    <SignInForm
                      onSignUp={handleSignUp}
                      onCloseModal={closeModal}
                    />
                  )
                }
                modalIsOpen={modalIsOpen}
                openModal={openModal}
                closeModal={closeModal}
              />
            </>
          )}
        </ul>
        {kind === "short" ? <></> : <Navbar />}
      </div>
    </header>
  );
}
