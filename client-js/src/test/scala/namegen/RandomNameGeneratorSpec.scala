package namegen

import org.scalatest.flatspec.AnyFlatSpec

/**
 * Silly test, just wanted to see if I can write scala tests in a scalajs project
 */
class RandomNameGeneratorSpec extends AnyFlatSpec :
  behavior of RandomNameGenerator.getClass.getName

  it should "generate a name" in
    assert(RandomNameGenerator.randomName().length>0)
