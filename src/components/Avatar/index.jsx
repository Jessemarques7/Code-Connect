import Image from "next/image";

function Avatar({ name, imageSrc }) {
  return (
    <ul>
      <li>
        <Image src={imageSrc} alt="avatar" width={32} height={32} />
      </li>
      <li>@{name}</li>
    </ul>
  );
}

export default Avatar;
