import NavBar from "./navbar";
import Dashboard from "./dashboard";

export default function Home() {
  return (
    <main className="flex flex-col items-center opacity-100">
    <NavBar/>
    <Dashboard/>
    </main>
  );
}
