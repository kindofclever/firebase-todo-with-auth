import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoggingIn, setIsLoggingIn] = useState(true);

  const { login, signUp, currentUser } = useAuth();

  const loginHandler = async () => {
    console.log(currentUser);
    if (!email || !password) {
      setError("Please provide an email address and a password");
      return;
    }
    if (isLoggingIn) {
      try {
        await login(email, password);
      } catch (error) {
        setError("Email adress or password are incorrect...");
      }
      return;
    }
    try {
      await signUp(email, password);
    } catch (error) {
      console.log(error);
      // setError("");
    }
    return;
  };

  return (
    <div className="flex-1 flex flex-col justify-center items-center gap-2 md:gap-4">
      <h2 className="uppercase select-none text-[#ca1503]">
        {isLoggingIn ? "Login" : "Register"}
      </h2>
      {error ? (
        <div className="w-full max-w-[40ch] text-[#fcffff] text-center py-5 p-3 border-2 border-[#fcffff] border-dotted">
          {error}
        </div>
      ) : (
        <></>
      )}
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        className="outline-none p-2 w-full max-w-[40ch] duration-300 border-b-2 md:border-b-4 border-solid
        border-[#fcffff] focus:border-[#ca1503] bg-[#fcffff] placeholder-[#ca1503] placeholder-opacity-50"
        placeholder="Enter your email address here..."
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        className="outline-none p-2 w-full max-w-[40ch] duration-300 border-b-2 md:border-b-4 
        border-solid border-[#fcffff] focus:border-[#ca1503] bg-[#fcffff] placeholder-[#ca1503] placeholder-opacity-50"
        placeholder="Enter your password here..."
      />
      <button
        onClick={loginHandler}
        className="w-full max-w-[40ch] p-2 bg-[#fcffff] text-[#ca1503] duration-300 relative
        after:absolute after:top-0 after:right-full after:bg-[#ca1503] after:z-10 after:w-full after:h-full overflow-hidden 
        hover:after:translate-x-full after:duration-300 hover:text-[#fcffff]">
        <p className="relative z-20 font-bold">Send</p>
      </button>
      <div className="flex flex-col justify-center items-center">
        {isLoggingIn ? (
          // eslint-disable-next-line react/no-unescaped-entities
          <p>You don't have an account?</p>
        ) : (
          <p>You already have an account?</p>
        )}
        <p
          className="font-bold text-[#ca1503] duration-300 hover:scale-110 hover:text-[#fcffff] cursor-pointer"
          onClick={() => setIsLoggingIn(!isLoggingIn)}>
          {isLoggingIn ? "Register here..." : "Login here..."}
        </p>
      </div>
    </div>
  );
};

export default Login;
//hello
