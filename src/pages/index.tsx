import Head from "next/head";
import Image from "next/image";
import { Roboto } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { motion } from "framer-motion";
import Link from 'next/link';
import { use } from "react";
import { useRouter } from "next/router";
import { useKeyboardNavigation } from "@/hooks/useKeyboardNavigation";

const inter = Roboto({subsets: ['latin'], weight: '400'});

export default function Home() {
  const router = useRouter();
  useKeyboardNavigation({
    steps: [
      () => router.push('/who-am-i'),
    ]
  });
  return (
    <motion.div
    className={inter.className}
    style={{
      position: 'absolute'
    }}
      initial={{ top: 0 }}
      exit={{top: -100 }}
      transition={{
        duration: 0.75,
      }}
    >
      <div>
        <div>
          
        <div>
          <h1>Better UX with animated UI</h1>
        </div>
        <h2>The tale of the animated page transition</h2>
        </div>
        <div>
          <Link href="/who-am-i">Next</Link>
        </div>
      </div>
    </motion.div>
  );
}
