import Link from 'next/link';

export default function Appbar() {
  return (
    <div className="appBarContainer">
      <div className="appBar">
        <Link className='homeLink' href={"/"} >Tucker Bichsel</Link>
        <div>
          <Link className='link' href={"/resume"} >Resume</Link>
          <Link className='link' href={"/contactMe"} >Contact Me</Link>
        </div>
      </div>
    </div>
  )
}
