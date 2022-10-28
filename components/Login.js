import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoggingIn, setIsLoggingIn] = useState(true);

  const loginHandler = () => {
    if (!email || !password) {
      setError("Please provide an email address and a password");
      return;
    }
  };

  return (
    <div className="flex-1 flex flex-col justify-center items-center gap-2 md:gap-4">
      <h2 className="uppercase select-none">
        {isLoggingIn ? "Login" : "Register"}
      </h2>
      {error ? (
        <div className="w-full max-w-[40ch] text-[#260446] text-center py-5 p-3 border-2 border-[#ffe9ce] border-dotted">
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
        border-[#ffe9ce] focus:border-[#8d339f] bg-[#ffe9ce] placeholder-[#260446] placeholder-opacity-50"
        placeholder="Enter your email address here..."
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        className="outline-none p-2 w-full max-w-[40ch] duration-300 border-b-2 md:border-b-4 
        border-solid border-[#ffe9ce] focus:border-[#8d339f] bg-[#ffe9ce] placeholder-[#260446] placeholder-opacity-50"
        placeholder="Enter your password here..."
      />
      <button
        onClick={loginHandler}
        className="w-full max-w-[40ch] p-2 bg-[#ffe9ce] text-[#8d339f] duration-300 relative
        after:absolute after:top-0 after:right-full after:bg-[#8d339f] after:z-10 after:w-full after:h-full overflow-hidden 
        hover:after:translate-x-full after:duration-300 hover:text-[#ffe9ce]">
        <p className="relative z-20">Send</p>
      </button>
      <p
        className="font-bold text-[#8d339f] duration-300 hover:scale-110 cursor-pointer"
        onClick={() => setIsLoggingIn(!isLoggingIn)}>
        {isLoggingIn ? "Register" : "Login"}
      </p>
    </div>
  );
};

export default Login;
