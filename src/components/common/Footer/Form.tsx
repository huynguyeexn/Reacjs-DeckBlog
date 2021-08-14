export const FOOTER_SUBSCRIBE = () => {
  return (
    <div className="flex-col mt-4 sm:flex-row md:flex md:justify-end">
      <input
        type="text"
        placeholder="Your E-mail"
        className="w-full px-6 py-2 text-gray-900 rounded-none md:w-auto min-w-40 focus:outline-none"
      />
      <button className="w-full px-6 py-2 rounded-none md:w-auto bg-primary hover:bg-red-500">
        SUBSCRIBE
      </button>
    </div>
  );
};
