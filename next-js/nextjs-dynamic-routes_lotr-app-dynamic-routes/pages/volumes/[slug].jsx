import Link from "next/link";
import { introduction } from "../../lib/data";
import { useRouter } from "next/router";
import { volumes } from "../../lib/data";
import Image from "next/image";

export default function Volumes() {
  const router = useRouter();
  const slug = router.query.slug;

  const currentVolume = volumes.find((movie) => movie.slug === slug);

  if (!currentVolume) {
    return null;
  }

  const { title, description, cover, books } = currentVolume;
  const currentIndex = volumes.findIndex((movie) => movie.slug === slug);
  const previousVolume = volumes[currentIndex - 1] || null;
  const nextVolume = volumes[currentIndex + 1] || null;

  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        {books.map(({ ordinal, title }) => (
          <li key={title}>
            {ordinal}: <strong>{title}</strong>
          </li>
        ))}
      </ul>
      <Image
        src={cover}
        alt={`Cover image of ${title}`}
        width={140}
        height={230}
      />
      {previousVolume ? (
        <div>
          <Link href={`/volumes/${previousVolume.slug}`}>
            ← Previous Volume: {previousVolume.title}
          </Link>
        </div>
      ) : null}
      {nextVolume ? (
        <div>
          <Link href={`/volumes/${nextVolume.slug}`}>
            Next Volume: {nextVolume.title} →
          </Link>
        </div>
      ) : null}
    </>
  );
}
