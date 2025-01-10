export const globalStyles = {
  container: "w-full flex flex-col gap-5 pb-8 pt-24 px-5 md:px-10",
  heading: "text-2xl font-semibold text-primary text-center",
  button:
    "w-full bg-primary py-2 text-white text-sm hover:bg-primary/50 transition-all ease-in-out duration-1000",
  buttonAlt:
    "w-full bg-gray-300 py-2 text-gray-600 text-sm hover:bg-gray-300/50 transition-all ease-in-out duration-1000",
  modal:
    "fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-40 transition-all ease-in-out duration-1000",
  modalContent: "bg-white w-96 p-5 flex flex-col gap-5",
  label: "text-xs font-light text-primary",
  input:
    "w-full p-2 border border-primary/30 outline-none text-sm text-primary",
  gridWrap:
    "w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 lg:gap-10",
  blurWrap:
    "w-full h-full absolute top-0 left-0 bg-black/50 hover:bg-black/20 transition-all ease-in-out duration-1000 backdrop-blur-sm flex items-center justify-center",
};
