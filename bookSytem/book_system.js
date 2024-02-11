let books = [];

function addBook() {
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);
    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        };
        books.push(book);
        showbooks();
        clearInputs();
    } else {
        alert('Please fill in all fields correctly.');
    }
}

function showbooks() {
    const booksDiv = books.map((book, index) =>
     `<h1>book Number: ${index + 1}</h1>
     <P><strong>Book Name: </strong>${book.name}</P>
     <p><strong>Author Name:</strong> ${book.authorName} </p>
     <p><strong>Book Description:</strong> ${book.bookDescription}</p>
     <p><strong>No. of Pages:</strong> ${book.pagesNumber} mins</p>`); 

    document.getElementById('books').innerHTML = booksDiv;
}

function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}
/*
function deletebookByID(event) {
    // Prevent default behavior of the click event 
    event.preventDefault();

    // Get the book ID from the event target (assuming it's stored in a data attribute)
    const bookID = event.target.dataset.bookId;

    // Find the index of the book with the given ID
    const index = books.findIndex(book => book.id === bookID);

    // If the book with the given ID is found
    if (index !== -1) {
        // Use splice to remove the book at the found index
        books.splice(index, 1);
        alert("Book has been deleted successfully.");
    } else {
        console.log("Book with ID", bookID, "not found.");
    }
}



// Ensure the DOM is loaded before attaching the event listener
document.addEventListener('DOMContentLoaded', () => {
    // Get the deleteBook button element
    const deletebook = document.querySelector('#deleteBook');

    // Check if deletebook element exists
    if (deletebook) {
        // Add event listener to the deleteBook button
        deletebook.addEventListener('click', deletebookByID);
    } else {
        console.error('Delete book button not found.');
    }
});
*/