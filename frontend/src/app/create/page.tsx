export default function CreatePage() {
  return (
    <>
      <section className="min-h-screen">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-[#191919] rounded-lg shadow-xl border border-[##838382] md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="font-(family-name:--font-bebas) text-3xl font-bold text-white">
                CREATE NEW
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div className="flex gap-4 items-end">
                  <div className="flex-1">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-[#b8b8b8]"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="bg-[#3a3a3a] border border-[#525252] text-[#f0f0f0] text-sm rounded-lg block w-full p-2.5 placeholder-[#888888]"
                      placeholder="Name your coffee here"
                    />
                  </div>
                  <div className="w-24">
                    <label
                      htmlFor="price"
                      className="block mb-2 text-sm font-medium text-[#b8b8b8]"
                    >
                      Price
                    </label>
                    <input
                      type="number"
                      name="price"
                      id="price"
                      placeholder="0.00"
                      className="bg-[#3a3a3a] border border-[#525252] text-[#f0f0f0] text-sm rounded-lg block w-full p-2.5 placeholder-[#888888]"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="type" className="block mb-2 text-sm font-medium text-[#b8b8b8]">
                    Type
                  </label>
                  <div className="flex gap-4 justify-center items-center">
                    <button
                      type="button"
                      className="flex-1 text-white bg-[#454545] border border-[#5a5a5a] hover:bg-[#505050] font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                      Arabic
                    </button>
                    <button
                      type="button"
                      className="flex-1 text-white bg-[#454545] border border-[#5a5a5a] hover:bg-[#505050] font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                      Robusta
                    </button>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="urlimage"
                    className="block mb-2 text-sm font-medium text-[#b8b8b8]"
                  >
                    Upload image
                  </label>
                  <input
                    type="url"
                    name="image"
                    id="urlimage"
                    className="bg-[#3a3a3a] border border-[#525252] text-[#f0f0f0] text-sm rounded-lg block w-full p-2.5 placeholder-[#888888]"
                    placeholder="Paste image URL here"
                  />
                </div>
                <div>
                  <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium text-[#b8b8b8]"
                  >
                    Description
                  </label>
                  <input
                    type="text"
                    name="description"
                    id="description"
                    className="bg-[#3a3a3a] border border-[#525252] text-[#f0f0f0] text-sm rounded-lg block w-full p-2.5 placeholder-[#888888]"
                    placeholder="Add a description"
                  />
                </div>
                <div className="flex gap-4 justify-center items-center pt-4">
                  <button
                    type="button"
                    className="flex-1 text-white bg-[#4a4a4a] hover:bg-[#555555] font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Discard
                  </button>
                  <button
                    type="submit"
                    className="flex-1 text-white bg-[#4a4a4a] hover:bg-[#555555] font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                    Confirm
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
