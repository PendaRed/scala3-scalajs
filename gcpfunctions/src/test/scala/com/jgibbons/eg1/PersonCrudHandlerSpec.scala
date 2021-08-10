package com.jgibbons.eg1

import com.jgibbons.eg1.dto.PersonDto
import org.scalatest.flatspec.AnyFlatSpec

class PersonCrudHandlerSpec extends AnyFlatSpec {
  behavior of PersonCrudHandler.getClass.getName

  it should "decode body" in {
    val r = PersonCrudHandler.decodeBody("""{"forename":"f", "surname":"s", "email":"a@b.c"}""")
    assertResult(PersonDto("f", "s", "a@b.c"))(r)
  }

  it should "throw error for empty field body" in {
    assertThrows[Exception] {
      PersonCrudHandler.decodeBody("""{"forename":"", "surname":"s", "email":"a@b.c"}""")
    }
  }

  it should "throw error for bad json" in {
    assertThrows[Exception] {
      PersonCrudHandler.decodeBody("""{"forenmail":"a@b.c"}""")
    }
  }
}
