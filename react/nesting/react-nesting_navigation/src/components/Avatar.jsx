import Image from "./Image.jsx";

export default function Avatar({ avatar }) {
  return (
    <button
      type="button"
      onClick={() => console.log("I could toggle a profile!")}
      aria-label="toggle profile"
    >
      <Image src={avatar} alt="avatar" />
    </button>
  );
}
