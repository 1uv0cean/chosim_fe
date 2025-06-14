const Home = () => {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center justify-center">
        <h1 className="text-[32px] sm:text-[48px] font-bold text-center">
          初心
        </h1>
        <p className="text-[16px] sm:text-[20px] text-center">
          이곳은 초심을 잃지 않기 위한 공간입니다.
        </p>
        <a
          href="/write"
          className="px-6 py-3 bg-white text-black rounded-lg hover:bg-black hover:text-white transition-colors"
        >
          초심 찾기
        </a>
      </main>
    </div>
  );
};

export default Home;
