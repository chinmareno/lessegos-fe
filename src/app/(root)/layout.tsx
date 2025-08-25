import Footer from "@/components/Footer";

const AppLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="pt-[121px] sm:pt-[174px]">
      {children}
      <Footer />
    </div>
  );
};

export default AppLayout;
