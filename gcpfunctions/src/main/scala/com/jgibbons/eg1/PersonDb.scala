package com.jgibbons.eg1

import com.jgibbons.eg1.dto.PersonDto
import com.typesafe.scalalogging.LazyLogging

object PersonDb extends LazyLogging {
  def create(p:PersonDto): Int =
    logger.info(s"Create called with [$p]")
    1

  def read(): List[PersonDto] =
    val p = List(PersonDto("Bilbo", "Baggins", "bb@shire.com"),
      PersonDto("Frodo", "Baggins", "fb@shire.com"))
    logger.info(s"Read returned [$p]")
    p

  def update(p:PersonDto): Int =
    logger.info(s"Update called with [$p]")
    1

  def delete(p:PersonDto): Int =
    logger.info(s"Delete called with [$p]")
    1
}
