import Image from "next/image";
function CaverImg({coverImageUrl,title}) {
  return (
    <div className="relative aspect-video overflow-hidden rounded-lg">
      <Image
        src={coverImageUrl}
        alt={title}
        fill
        quality={100}
        priority
        className="object-cover object-center w-full h-auto hover:scale-105 transition-all duration-300 rounded-lg"
      />
    </div>
  );
}

export default CaverImg
