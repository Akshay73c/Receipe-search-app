export function Title() {
  return (
    <div className="flex justify-center flex-col max-w-max mx-auto">
      <div className="bg-yellow-400 rounded-lg border  m-3 p-12 shadow bg-warning font-thin">
        <div className="display-1 text-8xl flex flex-col lg:flex-row py-4 px-4 whitespace-pre">
          <div>Receipe </div>
          <div className="">Search </div>
          <div>API </div>
        </div>
        <div className="text-2xl pb-4">
          This Edamam recipe API has the data of tens of thousands of foods,
          including international dishes.<br></br> Enter <strong>ANY</strong>{" "}
          sort of food (e.g.: pasta, chicken enchilada, dumpling, etc.) to see
          its magic.
        </div>
      </div>
    </div>
  );
}
