import { type ReactNode } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";
import { useNavigate } from "react-router-dom";

interface PaginationProps {
  pages: number;
  page: number;
}

export function PaginationSection({ pages, page }: PaginationProps) {
  if (pages > 500) {
    pages = 500;
  }

  const navigate = useNavigate();

  // Navigate between links without reloading the page
  function goToPage(pageNumber: number) {
    navigate(`?page=${pageNumber}`);
  }

  function renderPageNumbers() {
    const items: ReactNode[] = [];

    items.push(
      <PaginationItem key={1} className="hover:cursor-pointer">
        <PaginationLink onClick={() => goToPage(1)} isActive={page === 1}>
          1
        </PaginationLink>
      </PaginationItem>,
    );

    if (page > 3) {
      items.push(
        <PaginationItem key="ellipsis-start">
          <PaginationEllipsis />
        </PaginationItem>,
      );
    }

    const start = Math.max(2, page - 1);
    const end = Math.min(pages - 1, page + 1);

    for (let i = start; i <= end; i++) {
      items.push(
        <PaginationItem key={i} className="hover:cursor-pointer">
          <PaginationLink onClick={() => goToPage(i)} isActive={page === i}>
            {i}
          </PaginationLink>
        </PaginationItem>,
      );
    }

    if (page < pages - 2) {
      items.push(
        <PaginationItem key="ellipsis-end">
          <PaginationEllipsis />
        </PaginationItem>,
      );
    }

    items.push(
      <PaginationItem key="last-page" className="hover:cursor-pointer">
        <PaginationLink
          onClick={() => goToPage(pages)}
          isActive={page === pages}
        >
          {pages}
        </PaginationLink>
      </PaginationItem>,
    );

    return items;
  }

  return (
    <div className="flex justify-center items-center gap-8">
      <Pagination>
        <PaginationContent>
          <PaginationItem className="hover:cursor-pointer">
            <PaginationPrevious
              onClick={() => goToPage(Math.min(page - 1, pages))}
              aria-disabled={page === 1}
              tabIndex={page === 1 ? -1 : undefined}
              className={
                page === 1 ? "pointer-events-none opacity-50" : undefined
              }
            />
          </PaginationItem>
          {renderPageNumbers()}
          <PaginationItem className="hover:cursor-pointer">
            <PaginationNext
              onClick={() => goToPage(Math.min(page + 1, pages))}
              aria-disabled={page === pages}
              tabIndex={page === pages ? -1 : undefined}
              className={
                page === pages ? "pointer-events-none opacity-50" : undefined
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
