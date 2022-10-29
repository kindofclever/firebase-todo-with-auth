import Head from "next/head";
import Login from "../components/Login";
import UserDashboard from "../components/UserDashboard";
import { useAuth } from "../context/AuthContext";

export default function Home() {
  const { currentUser } = useAuth();
  return (
    <>
      <Head>
        <title>Todo | Home</title>
      </Head>
      {currentUser ? <UserDashboard /> : <Login />}
    </>
  );
}
