import Maincontent from "./components/__organisms/maincontent/maincontent";
import Sidebar from "./components/__organisms/sidebar/sidebar";

export default function Home() {
  return (
    <>
      <div className="flex gap-2">
        <Sidebar />
        <Maincontent />
      </div>
    </>
  );
}
