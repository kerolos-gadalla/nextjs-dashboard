const moduleVar = [];

export default function Page() {
  moduleVar.push(new Date());
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <div className="flex w-full max-w-[400px] flex-col items-center justify-center p-4">
        <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
          <div className="w-32 text-white md:w-36">
            {/* <AcmeLogo /> */}
            {/* {process.env.NEXT_PUBLIC_API_URL} */}
            {/* <pre>{JSON.stringify(moduleVar, null, 2)}</pre> */}
          </div>
        </div>
      </div>
    </div>
  );
}
