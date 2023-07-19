import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { motion } from "framer-motion";
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <motion.div
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
          <Link href="/slide1">Next</Link>
        </div>
      </div>
    </motion.div>
  );
}
