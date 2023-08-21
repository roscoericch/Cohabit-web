import Header from "@/components/header/Header";

const page = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-[10%_90%] max-h-screen overflow-y-scroll">
      <Header>
        <h4 className="text-[#25324B] text-[25px] font-[700]">Settings</h4>
      </Header>
    </div>
  );
};

export default page;
