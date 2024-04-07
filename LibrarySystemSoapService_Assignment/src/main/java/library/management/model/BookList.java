package library.management.model;



public class BookList{

	private String bookId;
	private String bookName;
	private String authorName;
	private String status;
	
	public BookList() {
		
	}
	

	public String getBookId() {
		return bookId;
	}


	public void setBookId(String bookId) {
		this.bookId = bookId;
	}


	public String getBookName() {
		return bookName;
	}
	public void setBookName(String bookName) {
		this.bookName = bookName;
	}
	public String getAuthorName() {
		return authorName;
	}
	public void setAuthorName(String authorName) {
		this.authorName = authorName;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	@Override
	public String toString() {
		return "BookList [bookId=" + bookId + ", bookName=" + bookName + ", authorName=" + authorName + ", status="
				+ status + ", getBookId()=" + getBookId() + ", getBookName()=" + getBookName() + ", getAuthorName()="
				+ getAuthorName() + ", getStatus()=" + getStatus() + ", getClass()=" + getClass() + ", hashCode()="
				+ hashCode() + ", toString()=" + super.toString() + "]";
	}
	
	
	
	
	

}
