import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import {store, persistor} from "@/redux/store";
import Layout from "../layout";

import "@/styles/globals.css";
import 'normalize.css/normalize.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </PersistGate>
    </Provider>
  )
}
