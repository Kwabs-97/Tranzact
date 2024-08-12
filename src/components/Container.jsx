function Container({ children }) {
  return (
    <div
      className="w-screen h-screen flex items-center justify-center p-12
    "
    >
      {children}
    </div>
  );
}

export default Container;
