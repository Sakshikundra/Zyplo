import {createContext, useContext, useEffect, useState} from "react";
import supabase from "@/db/supabase";

const UrlContext = createContext();

const UrlProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    setLoading(true);
    const {
      data: {user},
    } = await supabase.auth.getUser();
    setUser(user);
    setLoading(false);
  };

  useEffect(() => {
    fetchUser();

    const {
      data: {subscription},
    } = supabase.auth.onAuthStateChange(() => {
      fetchUser();
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <UrlContext.Provider value={{user, loading, fetchUser}}>
      {children}
    </UrlContext.Provider>
  );
};

export const UrlState = () => useContext(UrlContext);
export default UrlProvider;
