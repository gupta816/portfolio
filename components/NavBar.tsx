import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <span className="font-bold text-lg">Tushar Kumar</span>
        <div className="space-x-6 flex flex-wrap">
          <Link href="/">Home</Link>
          <Link href="/#aboutme">About Me</Link>
          <Link href="/#projects">Projects</Link>
          <Link href="/#skills">Skills</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
