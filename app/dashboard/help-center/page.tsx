import Header from "@/components/header/Header";
import HelpCenter from "@/components/help-center/HelpCenter";
import Registry from "../registry";

const Page = () => {
  return (
    <Registry>
      <div className="grid grid-cols-1 grid-rows-[10%_90%] max-h-screen overflow-y-scroll">
        <Header>
          <h4 className="text-[#25324B] text-[25px] font-[700]">Help Center</h4>
        </Header>
        <HelpCenter />
      </div>
    </Registry>
  );
};

export default Page;