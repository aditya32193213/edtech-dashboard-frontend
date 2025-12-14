import spinner from "../assets/spinner.gif";

export default function Loader() {
  return (
    <div className="flex items-center justify-center py-16">
      <img
        src={spinner}
        alt="Loading..."
        className="w-14 h-14"
      />
    </div>
  );
}
