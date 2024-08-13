function Container({ children }) {
  return (
    <div
      className="w-screen h-screen flex items-center mt-20 flex-col
    "
    >
      {children}
    </div>
  );
}

export default Container;
