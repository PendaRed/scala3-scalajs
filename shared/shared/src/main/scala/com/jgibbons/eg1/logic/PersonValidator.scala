package com.jgibbons.eg1.logic

import com.jgibbons.eg1.dto.PersonDto

object PersonValidator :
  extension(p:PersonDto) {
    def validate: Boolean =
      !p.forename.isEmpty && !p.surname.isEmpty && !p.email.isEmpty
  }