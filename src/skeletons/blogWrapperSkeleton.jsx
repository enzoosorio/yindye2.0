export default function BlogSkeleton() {
  return (
    <section className="w-11/12 md:w-full 2xl:w-[1080px] mx-auto mt-14 flex items-center justify-center flex-wrap gap-5">
      {[0, 1, 2, 3, 4, 5].map((value) => (
        <div
          key={value}
          className="w-auto md:w-[48%] h-40 border-2 shadow-xl mb-10 flex items-center justify-center"
        ></div>
      ))}
    </section>
  );
}
