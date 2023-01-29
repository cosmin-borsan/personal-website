import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import PreviewSuspense from "../../components/PreviewSuspense";
import PreviewBlogList from "../../components/PreviewBlogList";
import BlogList from "../../components/BlogList";
import { Suspense } from "react";
import Navbar from "../../components/Navbar";
import About from "../../components/About";
import Resume from "../../components/Resume";
import Portfolio from "../../components/Portfolio";
import Blog from "../../components/Blog";
import Contact from "../../components/Contact";

const query = groq`
    *[_type=='post'] {
        ...,
        author->,
        categories[]->
    } | order(_createAt desc)
`;

export const revalidate = 60;

async function HomePage() {
    if (previewData()) {
        return (
            <PreviewSuspense
                fallback={
                    <div role="status">
                        <p className="text-center text-lg animate-pulse text-[#F7AB0A]"> Loading Preview Data...</p>
                    </div>
                }
            >
                <PreviewBlogList query={query} />
            </PreviewSuspense>
        );
    }

    const posts = await client.fetch(query);
    return (
        <>
            <About />

            <Resume />

            <Portfolio />

            <Suspense
                fallback={
                    <div role="status">
                        <p className="text-center text-lg animate-pulse text-[#F7AB0A]"> Loading Preview Data...</p>
                    </div>
                }
            >
                <Blog posts={posts} />
            </Suspense>
            <Contact />
            {/* <BlogList posts={posts} /> */}
        </>
    );
}

export default HomePage;
