export default function Button({ buttonText, handleClick }) {
  return (
    <button
      className="w-56 inline-flex items-center justify-center drop-shadow-xl rounded-md border border-transparent transition ease-in-out delay-150 bg-[#F9E398] hover:-translate-y-1  hover:bg-[rgba(186,229,243)] duration-300 bg-yellow-200 px-4 py-2 m-3 text-base text-black shadow-sm"
      onClick={handleClick}
    >
      {buttonText}
    </button>
  );
}
