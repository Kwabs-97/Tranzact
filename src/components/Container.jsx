function Container({ children }) {
  return (
    <div className="flex items-center justify-center flex-col gap-3">
      {children}
    </div>
  );
}

export default Container;
