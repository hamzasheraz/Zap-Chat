import "@/styles/globals.css";
import { ThemeProvider } from "@/theme";
import { Provider } from "react-redux";
import store from "@/redux/store";
import GlobalRouteChangeListener from "@/helpers/globalRouteChangeListener";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <GlobalRouteChangeListener/>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}
