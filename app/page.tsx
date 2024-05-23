import Image from "next/image";
import {IntialPage} from "@/components/component/intial-page"
import {IntialScreen} from "@/components/component/intial-screen"
import {LoadingScreen} from "@/components/component/loading-screen"
import {ScoreScreen} from "@/components/component/score-screen"
export default function Home() {
  return (
    <>
    {/* <IntialScreen/> */}
    {/* <LoadingScreen/> */}
    <ScoreScreen/>
    </>
  );
}
