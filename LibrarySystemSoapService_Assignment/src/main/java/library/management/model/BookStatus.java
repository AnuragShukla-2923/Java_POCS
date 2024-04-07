package library.management.model;


public class BookStatus{
	
	private String issueId;
	private String issueDate;
	private String bookId;
	private String bookName;
	private String issuedFor;  //customer Name
	private String  issuedAddress;   //customer Address
	private String contactNo;
	private String returnedDate;
	
	
	
	public String getIssueId() {
		return issueId;
	}
	public void setIssueId(String issueId) {
		this.issueId = issueId;
	}
	public String getIssueDate() {
		return issueDate;
	}
	public void setIssueDate(String issueDate) {
		this.issueDate = issueDate;
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
	public String getIssuedFor() {
		return issuedFor;
	}
	public void setIssuedFor(String issuedFor) {
		this.issuedFor = issuedFor;
	}
	public String getIssuedAddress() {
		return issuedAddress;
	}
	public void setIssuedAddress(String issuedAddress) {
		this.issuedAddress = issuedAddress;
	}
	public String getContactNo() {
		return contactNo;
	}
	public void setContactNo(String contactNo) {
		this.contactNo = contactNo;
	}
	public String getReturnedDate() {
		return returnedDate;
	}
	public void setReturnedDate(String returnedDate) {
		this.returnedDate = returnedDate;
	}
	@Override
	public String toString() {
		return "BookStatus [issueId=" + issueId + ", issueDate=" + issueDate + ", bookId=" + bookId + ", bookName="
				+ bookName + ", issuedFor=" + issuedFor + ", issuedAddress=" + issuedAddress + ", contactNo="
				+ contactNo + ", returnedDate=" + returnedDate + "]";
	}
	
	
	

}
