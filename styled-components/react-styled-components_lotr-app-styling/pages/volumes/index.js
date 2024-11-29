import Link from "next/link";
import { introduction, volumes } from "../../lib/data";
import styled from "styled-components";

export default function Volumes() {
  return (
    <>
      <StyledHeadline>The Lord of the Rings</StyledHeadline>
      <p>{introduction}</p>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.id}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

const StyledHeadline = styled.h1`
  font-size: var(--headline1-size);
  font-family: var(--font-family);
  /* font-weight: var(--headline1-weight); */
  line-height: var(--headline1-line-height);
`;
