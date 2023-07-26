import { useLocation } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import Router from "./shared/Router";
import { QueryClient, QueryClientProvider } from "react-query";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { __isAuthenticated } from "./redux/modules/authSlice";

const queryClient = new QueryClient();
function App() {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const loginCheck = async () => {
      dispatch(__isAuthenticated());
    };
    loginCheck();
  }, [location]);

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Router />
    </QueryClientProvider>
  );
}

export default App;
