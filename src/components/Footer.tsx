import logoFooter from "/logo-footer.svg";

export function Footer() {
  return (
    <footer className="w-full bg-[rgba(3,37,65,1)] flex items-center justify-center py-5">
      <img className="w-[130px] h-[94px]" src={logoFooter} />
    </footer>
  );
}
