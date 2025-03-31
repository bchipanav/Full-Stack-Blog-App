import type { Post } from "@/lib/types/modelTypes";

type Props = {
  posts: Post[];
};
const Posts = (props: Props) => {
  return (
    <section>
      <h2 className="text-5xl text-center font-bold leading-tight text-gray-600">
        Latest Posts
      </h2>
      <div className="h-1 mx-auto bg-gradient-to-r from-sky-500 to-indigo-500 w-96 mb-9 rounded-t-md mt-5" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">post here</div>
    </section>
  );
};

export default Posts;
