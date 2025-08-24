const AppLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="pt-[163px] sm:pt-[174px]">{children}</div>;
};

export default AppLayout;
