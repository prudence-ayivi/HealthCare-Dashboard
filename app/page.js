import NavBar from "./navbar";
import Dashboard from "./dashboard";


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen w-full p-4">
    <NavBar/>
    <Dashboard/>
    </main>
  );
}
