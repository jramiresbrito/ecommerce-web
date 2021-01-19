const PaginationService = {
  execute(total_pages: number, current_page: number): Array<string> {
    let arr: Array<string> = [];

    arr.push('1');

    if (total_pages > 5) {
      if (current_page <= 3) {
        arr.push('2');
        arr.push('3');
        arr.push('...');
        arr.push(total_pages.toString());
      } else {
        arr.push('...');
        arr.push((current_page - 1).toString());
        arr.push(current_page.toString());

        if (current_page + 1 < total_pages)
          arr.push((current_page + 1).toString());

        if (current_page + 2 < total_pages) arr.push('...');

        if (current_page < total_pages) arr.push(total_pages.toString());
      }
    } else {
      for (let i = 2; i <= total_pages; i++) arr.push(i.toString());
    }

    return arr;
  },
};

export default PaginationService;
