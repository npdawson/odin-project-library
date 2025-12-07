const myLibrary = [];

class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = false;
		this.id = crypto.randomUUID();
    }

	info() {
		var info = this.title + " by " + this.author + ", " + this.pages + " pages";
		var readInfo = this.read ? ", read it" : ", not read yet";
		return info + readInfo;
	}
}

function addBookToLibrary(title, author, pages, read) {
	var book = new Book(title, author, pages);
	book.read = read;
	myLibrary.push(book);
}

function displayLibrary() {
	const tbl = document.querySelector("#library");
	const tbody = document.createElement("tbody");
	tbl.appendChild(tbody);

	myLibrary.forEach((book) => {
		const row = document.createElement("tr");
		const title = document.createElement("td");
		title.appendChild(document.createTextNode(book.title));
		row.appendChild(title);
		const author = document.createElement("td");
		author.appendChild(document.createTextNode(book.author));
		row.appendChild(author);
		const pages = document.createElement("td");
		pages.appendChild(document.createTextNode(book.pages));
		row.appendChild(pages);
		const read = document.createElement("td");
		const readYet = book.read ? "Read" : "Not read yet";
		read.appendChild(document.createTextNode(readYet));
		row.appendChild(read);
		tbody.appendChild(row);
	});
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, true);
addBookToLibrary("Moby Dick", "Herman Melville", 688, false);

displayLibrary();
