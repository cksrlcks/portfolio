export function getPaginationItems<T>(
  allItems: T[],
  pageNumber: number,
  pageSize: number,
) {
  const totalPage = Math.ceil(allItems.length / pageSize);
  const chunkedItems = Array.from({ length: totalPage }, (_, index) =>
    allItems.slice(index * pageSize, index * pageSize + pageSize),
  );
  const paginationNumbers = Array.from(
    { length: totalPage },
    (_, index) => index + 1,
  );

  return {
    items: chunkedItems[pageNumber - 1],
    pageNumber,
    paginationNumbers,
  };
}
