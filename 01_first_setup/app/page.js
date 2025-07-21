import Link from "next/link";


export default function Home() {
  
  return (
   <div>
    <h1 >Hello</h1>

    <br>
    </br>
   
   <Link href="about">about</Link><br></br>
   <Link href="service">service</Link><br></br>
   <Link href="blogs">Blogs</Link>
   
   </div>
  );
}
