import Link from "next/link";

export default function CountryNames(){
    return (
        <div className="p-12">
     <h1 className="text-center bg-green-300">List of countries</h1>

      <ul className="text-center bg-green-200 p-12">
        <div>
        <li>
        <Link href="/country/pakistan">Pakistan</Link>

        </li>

       
        </div>

        <li>
            <Link href="/country/india">India</Link>
        </li>

        <li>
          <Link href="/country/russia">Russia</Link>    
        </li>

        <li>
        <Link href="/country/china">China</Link>
        </li>

        <li>
        <Link href="/country/japan">Japan</Link>
        </li>
      </ul>
        </div>
    );
        
    
}