
package com.library.service.entitiy.service.jaxws;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;

/**
 * This class was generated by Apache CXF 3.3.6
 * Mon May 08 12:40:00 IST 2023
 * Generated source version: 3.3.6
 */

@XmlRootElement(name = "getByAuthorNameResponse", namespace = "http://service.entitiy.service.library.com/")
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "getByAuthorNameResponse", namespace = "http://service.entitiy.service.library.com/")

public class GetByAuthorNameResponse {

    @XmlElement(name = "return")
    private library.management.model.BookList _return;

    public library.management.model.BookList getReturn() {
        return this._return;
    }

    public void setReturn(library.management.model.BookList new_return)  {
        this._return = new_return;
    }

}

