
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

@XmlRootElement(name = "getAllByTakenDate", namespace = "http://service.entitiy.service.library.com/")
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "getAllByTakenDate", namespace = "http://service.entitiy.service.library.com/")

public class GetAllByTakenDate {

    @XmlElement(name = "arg0")
    private java.lang.String arg0;

    public java.lang.String getArg0() {
        return this.arg0;
    }

    public void setArg0(java.lang.String newArg0)  {
        this.arg0 = newArg0;
    }

}

