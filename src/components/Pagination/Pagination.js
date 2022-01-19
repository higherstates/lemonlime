import './Pagination.css'

export default function Pagination({ foodPerPage, totalFood, paginate, currentPage }) {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalFood / foodPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
    <nav aria-label="Pagination" className="pagination container">
        <ul>
            {pageNumbers.map(number => (
                <li key={number} className="page-item">
                    <button 
                        className={(currentPage === number ? "page-link active" : "page-link")}
                        onClick={() => paginate(number)}
                    >
                        {number}
                    </button>
                </li>
            ))}
        </ul>
    </nav>
  );
}
