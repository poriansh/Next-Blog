import Image from "next/image";

function Avatar({src, width = 24, height = 24}) {
  return (
    <Image
      src={src || "/img/avatar.png"}
      placeholder="blur"
      blurDataURL="/img/avatar.png"
      width={width}
      height={height}
      className="rounded-full ring-1 ring-appsecondary-300 ml-2"
      alt={src || "عکس کاربری"}
    />
  );
}
export default Avatar;
