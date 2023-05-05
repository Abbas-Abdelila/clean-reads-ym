import ProfileHeader from "@/components/ProfileHeader";
import Image from "next/image";
import dynamic from "next/dynamic";
import type { Metadata } from "next";

type Params = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params: { slug } }: Params): Metadata {
  return {
    title: `${slug} | Medium`,
    description: "Discover Ideas and Stories that Matters to You",
  };
}

const PostPage = ({ params: { slug } }: Params): JSX.Element => {
  const Content = dynamic(() => import(`@/app/(default)/contents/${slug}.mdx`), {
    ssr: false,
  });

  return (
    <>
      <div className={`px-20 flex gap-20 my-16 divide-x`}>
        <div className="w-[65%]">
          <ProfileHeader />
          <article className="prose lg:prose-md max-w-4xl">
            <Content />
          </article>
        </div>

        <div className="w-[35%] fixed right-0 flex flex-col px-8">
          <div className="profile flex flex-col space-y-3">
            <Image
              src="/images/abbas-profile.jpg"
              height="88"
              width={88}
              alt="Profile Picture"
              className="rounded-full"
            />
            <h1 className="text-[16px] font-semibold">Abbas Abdelila</h1>
            <p className="text-[16px] text-slate-500 text-light">
              2.2k followers
            </p>
            <p className="text-[14px] text-slate-500 text-light">
              Entrepreneur
            </p>
            <div className="flex space-x-5">
              <button className="px-4 py-2 bg-green-500 text-white rounded-3xl">
                Follow
              </button>
              <button className="px-4 py-2 bg-green-500 text-white rounded-3xl">
                M
              </button>
            </div>
          </div>

          <div className="mt-10">
            <h1 className="text-[16px] font-semibold">More from Medium</h1>
            <div className="mt-5"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostPage;
