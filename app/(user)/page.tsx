import { redirect } from "next/navigation";

async function Home() {
    redirect("/about");
}

export default Home;
