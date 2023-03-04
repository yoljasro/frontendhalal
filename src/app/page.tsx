// import { Main } from "@/components/Main";
import Image from "next/image";
import Head from "next/head";
import { Navbar } from "../components/Navbar";
import type { NextPage, GetStaticProps } from "next";
// import { Header } from "../components/Head";
// import { UserInfo } from "../components/UserInfo";
import styles from "../styles/Home.module.sass";
import { useRouter } from "next/router";
import { Header } from "../components/Header";
import { Partners } from "../components/Partners";
// import { Restaurants } from "../components/Restaurants";
import { Footer } from "../components/Footer";
import { Members } from "../components/Members";
// import { Travels } from "../components/Travels";
import { Restaurants } from "../components/Restaurants";
import { Main } from "../components/Main";
import { Chefs } from "../components/Chefs";
import { Productions } from "../components/Productions";

export default function Home() {
  return (
  <main>
     {/* </Head> */}
       {/* <Header/> */}
      {/* <Main/>  */}
      {/* <Main/> */}
      {/* <Navbar />  */}
      {/* <Header/>  */}
      {/* <Navbar/> */}
      {/* <Travels/>  */}
      {/* <Restaurants/>  */}
      {/* <Productions/>  */}
      {/* <Chefs/> */}
      {/* <Members/> */}
      {/* <Partners/> */}
      <Footer/> 
      </main>
  )
}
