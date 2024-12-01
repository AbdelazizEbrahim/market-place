'use client';
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Session} from "next-auth";
import {signOut} from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {useState} from "react";

export default function Header({session}:{session:Session|null}) {
  const router = useRouter();
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <header className="border-b p-4 flex items-center justify-between h-16">
      <Link
        className="text-blue-600 font-bold text-2xl"
        href="/">
        Marketplace
      </Link>
      <nav className="flex items-center gap-4 *:rounded">
        
        <span className="border-r"></span>
        {!session?.user && (
          <>
            <button 
              onClick={() => router.push('/signup')}
              className="border-0 text-gray-600">Sign up</button>
            <button
              onClick={() => router.push('/signin')}
              className="bg-blue-600 text-white border-0 px-6 py-1">
              Login
            </button>
          </>
        )}
        {session?.user && (
          <>
            <div className="relative flex items-center">
              <div className="">
                <Link href="/newProduct" className="border border-blue-600 text-blue-600 inline-flex gap-1 items-center py-1 px-4 mr-4">
                  <FontAwesomeIcon icon={faPlus} className="h-4"/>
                  <span>Post Product</span>
                </Link>
              </div>
              <div className="">
                <Link href="/newAuction" className="border border-blue-600 text-blue-600 inline-flex gap-1 items-center py-1 px-4 mr-4">
                  <FontAwesomeIcon icon={faPlus} className="h-4"/>
                  <span>Add Auction</span>
                </Link>
              </div>
              <button onClick={() => setShowDropdown(prev => !prev)}>
                <Image
                  src={session.user.image as string} alt={'avatar'} width={36} height={36}
                  className={"rounded-md relative "+(showDropdown?'z-50':'')}
                />
              </button>
              {showDropdown && (
                <>
                  <div
                    onClick={() => setShowDropdown(false)}
                    className="bg-black/90 fixed inset-0 z-40"></div>
                  <div className="absolute z-50 right-0 top-9 bg-white rounded-md w-32 border">
                    <button
                      onClick={() => {
                        setShowDropdown(false);
                        router.push('/my-ads');
                      }}
                      className="p-2 block text-center w-full border border-black/50 rounded-lg" >Products</button>
                      <button
                      onClick={() => {
                        setShowDropdown(false);
                        router.push('/my-auction');
                      }}
                      className="p-2 block text-center w-full border border-black/50 rounded-lg" >Auctions</button>
                      <button
                      onClick={() => {
                        setShowDropdown(false);
                        router.push('/my-account');
                      }}
                      className="p-2 block text-center w-full border border-black/50 rounded-lg" >Account</button>
                    <button className="p-2 block w-full border border-black/50 rounded-lg" onClick={() => signOut()}>Logout</button>
                  </div>
                </>
              )}

            </div>
          </>
        )}
      </nav>
    </header>
  );
}