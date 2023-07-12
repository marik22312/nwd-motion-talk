import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { motion } from "framer-motion";
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.75,
        }}
      >
        <main>
			<Link href="/slide1">Go To Slide 1</Link>
		</main>
      </motion.div>
    </>
  );
}
