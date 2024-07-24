import Link from "next/link";

function Header() {
  return (
   <div>
     <Link href="/dashboard" >
     PDF  <span className="text-indigo-600">Chatbot</span>
     
     </Link>
  </div>
  );
}

export default Header;