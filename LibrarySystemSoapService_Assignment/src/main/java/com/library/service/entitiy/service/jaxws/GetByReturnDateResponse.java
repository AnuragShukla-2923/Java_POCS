
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

@XmlRootElement(name = "getByReturnDateResponse", namespace = "http://service.entitiy.service.library.com/")
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "getByReturnDateResponse", namespace = "http://service.entitiy.service.library.com/")

public class GetByReturnDateResponse {

    @XmlElement(name = "return")
    private java.util.List<library.management.model.BookStatus> _return;

    public java.util.List<library.management.model.BookStatus> getReturn() {
        return this._return;
    }

    public void setReturn(java.util.List<library.management.model.BookStatus> new_return)  {
        this._return = new_return;
    }

}

