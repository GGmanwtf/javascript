import Link from 'next/link';

export default function FirstPost() {
  return (
    <>
      <h1>Let me introduce myself. I'm a college student. and I'm 24. thank you bye bye.</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
}