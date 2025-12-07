class Book {
    constructor(title, author, pages) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = false
    }

	info() {
		var info = this.title + " by " + this.author + ", " + this.pages + " pages"
		var readInfo = this.read ? ", read it" : ", not read yet"
		return info + readInfo
	}
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295)
console.log(theHobbit.info())
