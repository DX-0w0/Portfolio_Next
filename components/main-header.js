import Link from 'next/link'

export default function MainHeader() {
  return (
    <ul className='flex items-center justify-end gap-4'>
      <li>
        <Link href='/'>Home</Link>
      </li>
      <li>
        <Link href='/about'>About</Link>
      </li>
      <li>
        <Link href='/resume'>Resume</Link>
      </li>
    </ul>
  )
}
