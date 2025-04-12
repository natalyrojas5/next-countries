const LayoutCountries = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="border-2 border-blue-600 p-5">
      <h4 className="text-2xl">Nav</h4>
      {children}
      <h4 className="text-2xl">Footer</h4>
    </main>
  );
};

export default LayoutCountries;
