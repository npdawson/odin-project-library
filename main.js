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
	var tbody = tbl.querySelector("tbody");
	if (tbody) {
		tbl.removeChild(tbody);
	}
	tbody = document.createElement("tbody");
	tbl.appendChild(tbody);

	myLibrary.forEach((book) => {
		const row = tbody.insertRow();

		const title = row.insertCell()
		const author = row.insertCell();
		const pages = row.insertCell();
		const read = row.insertCell();

		const readYet = book.read ? "Read" : "Not read yet";

		title.textContent = book.title;
		author.textContent = book.author;
		pages.textContent = book.pages;
		read.textContent = readYet;
	});
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, true);
addBookToLibrary("Moby Dick", "Herman Melville", 688, false);

const addBookDialog = document.querySelector("#addBookDialog");

const addBookButton = document.querySelector("#addBookShowDialog");
addBookButton.addEventListener("click", () => {
	addBookDialog.showModal();
});

addBookDialog.addEventListener("close", () => {
	if (addBookDialog.returnValue == "Add") {
		const form = addBookDialog.querySelector("form");
		const titleInput = addBookDialog.querySelector("#title").value;
		const authorInput = addBookDialog.querySelector("#author").value;
		const pagesInput = addBookDialog.querySelector("#pages").value;
		const readInput = addBookDialog.querySelector("#read").checked;

		addBookToLibrary(titleInput, authorInput, pagesInput, readInput);
		displayLibrary();
		form.reset();
	}
});

displayLibrary();
