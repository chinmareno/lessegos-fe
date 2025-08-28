import Footer from "@/components/Footer";

const AppLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="pt-[121px] md:pt-[192px]">
      {children}
      <Footer />
    </div>
  );
};

export default AppLayout;
