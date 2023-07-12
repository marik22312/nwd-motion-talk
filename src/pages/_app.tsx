import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter()
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Component {...pageProps} key={router.route}/>
    </AnimatePresence>
  );
}
