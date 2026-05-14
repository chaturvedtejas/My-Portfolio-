import { PropsWithChildren, useState } from "react";
import LoadingContext from "./loadingContext";
import Loading from "../components/Loading";

export const LoadingProvider = ({ children }: PropsWithChildren) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loading, setLoading] = useState(0);

  const value = {
    isLoading,
    setIsLoading,
    setLoading,
  };

  return (
    <LoadingContext.Provider value={value}>
      {isLoading && <Loading percent={loading} />}
      <main className="main-body">{children}</main>
    </LoadingContext.Provider>
  );
};
