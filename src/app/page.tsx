import Maincontent from "./components/__organisms/maincontent/maincontent";
import Sidebar from "./components/__organisms/sidebar/sidebar";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-5 lg:flex-row w-full">
        <div className="w-full lg:w-[400px]">
          <Sidebar />
        </div>
        <div className="w-full flex-1">
          <Maincontent />
        </div>
      </div>
    </>
  );
}
