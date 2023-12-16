import PaginationButtons from "./PaginationButtons";
import useDataFetcher from "./useDataFetcher";
import UserProfile from "./UserProfile";

const Mentor = () => {
  const { loading, pages, totalPages, currentPage, setCurrentPage } =
    useDataFetcher();
  return (
    <div className="font-Poppins section">
      {loading ? (
        <div className="text-center text-5xl">Loading...</div>
      ) : (
        <>
          <div className="grid grid-cols-3 gap-10">
            {pages.map((page) => {
              return <UserProfile key={page.id} {...page} />;
            })}
          </div>
          <PaginationButtons
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </>
      )}
    </div>
  );
};
export default Mentor;