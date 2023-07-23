import Chatbar from "./chatbar";
import Header from "./header";
import Sidebar from "./sidebar";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className=" container  flex gap-5 bg-[#f1f1f1] p-10">
        <div className="w-[20%]">
          <Sidebar />
        </div>
        <div className="w-[80%] flex flex-col gap-5 h-screen">
          <Header />
          <div className="flex gap-2 flex-1">
            <div className="w-6/12">
              <Chatbar />
            </div>
            <div className="w-full h-full">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
