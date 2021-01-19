import { useState, useEffect } from 'react';
import Meta from '../../../dtos/Meta';
import StyledButton from '../StyledButton';
import PaginationService from '../../../util/PaginationService';

import { useRouter } from 'next/router';

const Pagination: React.FunctionComponent<Meta> = ({
  page,
  length,
  total,
  total_pages,
}) => {
  const [pagination, setPagination] = useState(['1']);
  const router = useRouter();

  //every time total_pages changes, the listing array should change too
  useEffect(() => {
    setPagination(PaginationService.execute(total_pages, page));
  }, [total_pages]);

  const handlePageClick = (page: string): void => {
    router.push(`${router.pathname}?page=${page}`);
  };

  const handleNextPageClick = (): void => {
    if (page < total_pages) {
      router.push(`${router.pathname}?page=${page + 1}`);
    }
  };

  const handlePreviusPageClick = (): void => {
    if (page > 1) {
      router.push(`${router.pathname}?page=${page - 1}`);
    }
  };

  return (
    <div className="pagination justify-content-end">
      <div className="pagination">
        <StyledButton
          action="<"
          type_button="blue"
          onClick={handlePreviusPageClick}
        />

        {pagination.map((item, index) =>
          item === '...' ? (
            '...'
          ) : (
            <StyledButton
              key={index}
              action={item}
              type_button="blue"
              active={page === Number(item)}
              onClick={() => handlePageClick(item)}
            />
          )
        )}

        <StyledButton
          action=">"
          type_button="blue"
          onClick={handleNextPageClick}
        />
      </div>
    </div>
  );
};

export default Pagination;
