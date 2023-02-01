import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import PreviewSuspense from "../../components/PreviewSuspense";
import PreviewBlogList from "../../components/PreviewBlogList";

export const revalidate = 60;

async function HomePage() {
    return (
        <>
            <div>home</div>
            {/* <BlogList posts={posts} /> */}
        </>
    );
}

export default HomePage;
