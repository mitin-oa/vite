const SignInForm: React.FC = () => {
  return (
    <>
      <form>
        <p>User name:</p>
        <input />
        <p>Email:</p>
        <input />
        <p>Phone number:</p>
        <input />
        <p>Password:</p>
        <input />
        <button style={{ minWidth: "none", width: "100px", margin: "0 auto" }}>
          submit
        </button>
      </form>
    </>
  );
};

export default SignInForm;
