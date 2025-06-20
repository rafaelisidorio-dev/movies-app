import logo from "/logo.svg";
import { Footer } from "./Footer";

export function PageNotFound() {
  return (
    <>
      <header>
        <nav className="bg-[rgba(3,37,65,1)] py-5">
          <div className="flex items-center justify-center sm:gap-0 mx-5 md:mx-6">
            <img className="w-[154px] h-[20px]" src={logo} />
          </div>
        </nav>
      </header>

      <div className="h-full flex items-center justify-center">
        <div className="text-3xl font-bold">
          <h1 className="text-center">404</h1>
          <h2>Page Not Found</h2>
        </div>
      </div>

      <Footer />
    </>
  );
}
