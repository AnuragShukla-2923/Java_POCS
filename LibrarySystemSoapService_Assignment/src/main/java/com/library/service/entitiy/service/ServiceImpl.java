package com.library.service.entitiy.service;

import java.text.Format;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import javax.jws.WebMethod;
import javax.jws.WebService;

import library.management.model.BookList;
import library.management.model.BookStatus;


@WebService(targetNamespace = "http://service.entitiy.service.library.com/", portName = "ServiceImplPort", serviceName = "ServiceImplService")
public class ServiceImpl {
	List<BookList> booksList;
	List<BookStatus> bookStatuslist;

	public ServiceImpl() {

		booksList = new ArrayList<>();

		BookList book1 = new BookList();

		book1.setBookId(UUID.randomUUID().toString());
		book1.setBookName("Computer Science");
		book1.setAuthorName("M.R.K.Rao");
		book1.setStatus("Unavailable");

		BookList book2 = new BookList();
		book2.setBookId(UUID.randomUUID().toString());
		book2.setBookName("History");
		book2.setAuthorName("Bishal");
		book2.setStatus("Unavailable");

		BookList book3 = new BookList();
		book3.setBookId(UUID.randomUUID().toString());
		book3.setBookName("English");
		book3.setAuthorName("Arjun");
		book3.setStatus("Available");

		BookList book4 = new BookList();
		book4.setBookId(UUID.randomUUID().toString());
		book4.setBookName("Maths");
		book4.setAuthorName("Rahul S. Pal");
		book4.setStatus("Available");

		BookList book5 = new BookList();
		book5.setBookId(UUID.randomUUID().toString());
		book5.setBookName("Social Science");
		book5.setAuthorName("Viraj Singh");
		book5.setStatus("Available");

		booksList.add(book1);
		booksList.add(book2);
		booksList.add(book3);
		booksList.add(book4);
		booksList.add(book5);

		bookStatuslist = new ArrayList<>();

		BookStatus bookStatus = new BookStatus();
		bookStatus.setIssueId(UUID.randomUUID().toString());
		bookStatus.setIssueDate("27/04/2023");
		bookStatus.setBookId(booksList.get(0).getBookId());
		bookStatus.setBookName("Computer Science");
		bookStatus.setIssuedFor("Anurag Shukla");
		bookStatus.setIssuedAddress("Ram Nagar,Coimbatore");
		bookStatus.setContactNo("7569875764");
		bookStatus.setReturnedDate(null);

		BookStatus bookStatus1 = new BookStatus();
		bookStatus1.setIssueId(UUID.randomUUID().toString());
		bookStatus1.setIssueDate("25/04/2023");
		bookStatus1.setBookId(booksList.get(1).getBookId());
		bookStatus1.setBookName("History");
		bookStatus1.setIssuedFor("Sachin Singh");
		bookStatus1.setIssuedAddress("Ram Nagar,Coimbatore");
		bookStatus1.setContactNo("7569875764");
		bookStatus1.setReturnedDate(null);

		bookStatuslist.add(bookStatus);
		bookStatuslist.add(bookStatus1);

	}

//get/fetch:
//	fetch by Id.
	
	@WebMethod(operationName = "bookById", action = "urn:BookById")
	public BookList bookById(String bookId) {
		for (BookList list : booksList) {
			if (list.getBookId().equals(bookId)) {
				return list;
			}
		}
		return new BookList();
	}

//	fetch all Present books.
	
	@WebMethod(operationName = "allBooks", action = "urn:AllBooks")
	public List<BookList> allBooks() {
		return booksList;
	}

//	fetch all available books)
	
	@WebMethod(operationName = "allAvailableBooks", action = "urn:AllAvailableBooks")
	public List<BookList> allAvailableBooks() {
		List<BookList> returnList = new  ArrayList<BookList>();
		for (BookList list : booksList) {
			if ((list.getStatus()).equalsIgnoreCase("Available")) {
				returnList.add(list);
			}
		}
		return returnList;

	}

//	fetch all Unavailable books.
	
	@WebMethod(operationName = "allUnAvailableBooks", action = "urn:AllUnAvailableBooks")
	public List<BookList> allUnAvailableBooks() {
		List<BookList> returnList = new ArrayList<BookList>();
		for (BookList list : booksList) {
			if ((list.getStatus()).equalsIgnoreCase("Unavailable")) {
				returnList.add(list);
			}
		}
		return returnList;

	}

//	fetch by bookName.
	
	@WebMethod(operationName = "getByBookName", action = "urn:GetByBookName")
	public BookList getByBookName(String bookName) {
		for (BookList list : booksList) {
			if (list.getBookName().equalsIgnoreCase(bookName)) {
				return list;
			}
		}
		return new BookList();
	}

//	fetch by authorName.
	
	@WebMethod(operationName = "getByAuthorName", action = "urn:GetByAuthorName")
	public BookList getByAuthorName(String authorName) {
		for (BookList list : booksList) {
			if (list.getAuthorName().equalsIgnoreCase(authorName)) {
				return list;
			}
		}
		return new BookList();
	}

//create:
	
	@WebMethod(operationName = "createBookList", action = "urn:CreateBookList")
	public String createBookList(BookList bookList) {
		String success = "Something wrong on server";
		bookList.setBookId(UUID.randomUUID().toString());
		boolean added = booksList.add(bookList);
		if (added) {
			success = "Created Successfully!";
		}
		return success;
	}

//delete:
	
	@WebMethod(operationName = "deleteBookbyId", action = "urn:DeleteBookbyId")
	public String deleteBookbyId(String bookId) {
		String success = "Not found";
		for (BookList bookList : booksList) {
			if (bookList.getBookId().equals(bookId)) {
				int index_value = booksList.indexOf(bookList);
				booksList.remove(index_value);
				success = "Deleted!";
			}
		}
		return success;
	}

//update book status only(Available/Unavailble)
	@WebMethod(exclude = true)
	public String updateBookById(String bookId) {
		String success = "Error on server";
		for (BookList list : booksList) {
			if (list.getBookId().equals(bookId)) {
				String current_status = list.getStatus();
				if (current_status.equalsIgnoreCase("Unavailable")) {
					list.setStatus("Available");
					success = "Updated Successfully!";

				} else if (current_status.equalsIgnoreCase("Available")) {
					list.setStatus("Unavailable");
					success = "Updated Successfully!";

				}
			}


		}
		return success;
	}



//	For Book Status

//Fetch/get:Operations
//fetch all by takenDate
	
	@WebMethod(operationName = "getAllByTakenDate", action = "urn:GetAllByTakenDate")
	public List<BookStatus> getAllByTakenDate(String issueDate) {
		List<BookStatus> allBooks = new ArrayList<BookStatus>();
		for (BookStatus list : bookStatuslist) {
			if (list.getIssueDate().equals(issueDate)) {
				allBooks.add(list);
			}
		}
		return allBooks;
	}

//fetch all by returnDate
	
	@WebMethod(operationName = "getByReturnDate", action = "urn:GetByReturnDate")
	public List<BookStatus> getByReturnDate(String returnDate) {
		List<BookStatus> allBooks = new ArrayList<BookStatus>();
		for (BookStatus list : bookStatuslist) {
			if (list.getReturnedDate().equals(returnDate)) {
				allBooks.add(list);
			}
		}
		return allBooks;
	}

//fetch all the issue books.
	
	@WebMethod(operationName = "getAllBooks", action = "urn:GetAllBooks")
	public List<BookStatus> getAllBooks() {
		return bookStatuslist;
	}

//fetch by issueId.
	
	@WebMethod(operationName = "getByIssueId", action = "urn:GetByIssueId")
	public BookStatus getByIssueId(String issueId) {
		for (BookStatus list : bookStatuslist) {
			if (list.getIssueId().equals(issueId)) {
				return list;
			}
		}
		return new BookStatus();
	}

//fetch by bookId.
	
	@WebMethod(operationName = "getByBookId", action = "urn:GetByBookId")
	public BookStatus getByBookId(String bookId) {
		for (BookStatus list : bookStatuslist) {
			if (list.getBookId().equals(bookId)) {
				return list;
			}
		}
		return new BookStatus();
	}

	// Delete:will delete the entry
	
	@WebMethod(operationName = "deleteBookEntry", action = "urn:DeleteBookEntry")
	public String deleteBookEntry(String issueId) {
		String success = new String("Not found");
		for (BookStatus book : bookStatuslist) {
			if (book.getIssueId().equals(issueId)) {
				bookStatuslist.remove(bookStatuslist.indexOf(book));
				success = "Deleted!";
			}
		}
		return success;

	}

//Create:when a new book is getting issued,entry made here and booklist also updated
	
	@WebMethod(operationName = "createBookStatusEntry", action = "urn:CreateBookStatusEntry")
	public String createBookStatusEntry(BookStatus bookStatus) {
		String success = null;
		bookStatus.setIssueId(UUID.randomUUID().toString());
		bookStatus.setBookId(getByBookName(bookStatus.getBookName()).getBookId());
		
		Format formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		String s = formatter.format(new Date());
	    bookStatus.setIssueDate(s);
		
		boolean added = bookStatuslist.add(bookStatus);
		if (added) {
			updateBookById(bookStatus.getBookId());
			return success = "Created";
		} else if (!added) {
			return success = "Error while creating";
		} else {
			return success;
		}

	}

//Delete BookStatus by id	
	@WebMethod(operationName = "updateEntry", action = "urn:UpdateEntry")
	public String updateEntry(String issueId, String returnDate) {
		String success = new String("Not found");
		for (BookStatus bookStatus : bookStatuslist) {
			if (bookStatus.getIssueId().equals(issueId)) {
				bookStatus.setReturnedDate(returnDate);
				bookStatuslist.set(bookStatuslist.indexOf(bookStatus),bookStatus);
				BookList byBookName = getByBookName(bookStatus.getBookName());
				updateBookById(byBookName.getBookId());
				success = "Updated!";
			}
		}
		return success;

	}

}
