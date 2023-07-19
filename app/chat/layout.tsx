import Chatbar from "./chatbar";
import Header from "./header";
import Sidebar from "./sidebar";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-gray-300">
      <div className="container">
        <div className="flex gap-5">
          <Sidebar />
          <div className="w-full">
            <Header />
            <div className="flex mt-5 gap-2">
              <Chatbar />
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
