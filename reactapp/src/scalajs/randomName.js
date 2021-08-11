'use strict';
import * as $j_internal$002d0 from "./internal-0.js";
function $p_Lnamegen_RandomNameGenerator$__rndInt__I__I($thiz, max) {
  return $j_internal$002d0.$doubleToInt(($thiz.Lnamegen_RandomNameGenerator$__f_rnd.nextDouble__D() * max))
}
function $p_Lnamegen_RandomNameGenerator$__str__sci_List__T($thiz, s) {
  var n = $p_Lnamegen_RandomNameGenerator$__rndInt__I__I($thiz, s.length__I());
  return $j_internal$002d0.$as_T($j_internal$002d0.$f_sc_LinearSeqOps__apply__I__O(s, n))
}
/** @constructor */
function $c_Lnamegen_RandomNameGenerator$() {
  this.Lnamegen_RandomNameGenerator$__f_first = null;
  this.Lnamegen_RandomNameGenerator$__f_mid = null;
  this.Lnamegen_RandomNameGenerator$__f_last = null;
  this.Lnamegen_RandomNameGenerator$__f_rnd = null;
  $n_Lnamegen_RandomNameGenerator$ = this;
  $j_internal$002d0.$m_s_package$();
  var elems = $j_internal$002d0.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d0.$d_T.getArrayOf().constr)(["jon", "ton", "sar", "fly", "tom", "geo", "hen", "emi", "ali", "ell", "greg"]));
  this.Lnamegen_RandomNameGenerator$__f_first = $j_internal$002d0.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems);
  $j_internal$002d0.$m_s_package$();
  var elems$1 = $j_internal$002d0.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d0.$d_T.getArrayOf().constr)(["at", "ist", "or"]));
  this.Lnamegen_RandomNameGenerator$__f_mid = $j_internal$002d0.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$1);
  $j_internal$002d0.$m_s_package$();
  var elems$2 = $j_internal$002d0.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002d0.$d_T.getArrayOf().constr)(["hon", "y", "ah", "nne", "as", "rge", "ry", "ly", "air", "iot", "y"]));
  this.Lnamegen_RandomNameGenerator$__f_last = $j_internal$002d0.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems$2);
  this.Lnamegen_RandomNameGenerator$__f_rnd = new $c_ju_Random(new $j_internal$002d0.$c_RTLong(10, 0))
}
$c_Lnamegen_RandomNameGenerator$.prototype = new $j_internal$002d0.$h_O();
$c_Lnamegen_RandomNameGenerator$.prototype.constructor = $c_Lnamegen_RandomNameGenerator$;
/** @constructor */
function $h_Lnamegen_RandomNameGenerator$() {
  /*<skip>*/
}
$h_Lnamegen_RandomNameGenerator$.prototype = $c_Lnamegen_RandomNameGenerator$.prototype;
$c_Lnamegen_RandomNameGenerator$.prototype.randomName__T = (function() {
  return ((("" + $p_Lnamegen_RandomNameGenerator$__str__sci_List__T(this, this.Lnamegen_RandomNameGenerator$__f_first)) + ((this.Lnamegen_RandomNameGenerator$__f_rnd.nextDouble__D() < 0.21) ? $p_Lnamegen_RandomNameGenerator$__str__sci_List__T(this, this.Lnamegen_RandomNameGenerator$__f_mid) : "")) + $p_Lnamegen_RandomNameGenerator$__str__sci_List__T(this, this.Lnamegen_RandomNameGenerator$__f_last))
});
var $d_Lnamegen_RandomNameGenerator$ = new $j_internal$002d0.$TypeData().initClass({
  Lnamegen_RandomNameGenerator$: 0
}, false, "namegen.RandomNameGenerator$", {
  Lnamegen_RandomNameGenerator$: 1,
  O: 1
});
$c_Lnamegen_RandomNameGenerator$.prototype.$classData = $d_Lnamegen_RandomNameGenerator$;
var $n_Lnamegen_RandomNameGenerator$;
function $m_Lnamegen_RandomNameGenerator$() {
  if ((!$n_Lnamegen_RandomNameGenerator$)) {
    $n_Lnamegen_RandomNameGenerator$ = new $c_Lnamegen_RandomNameGenerator$()
  };
  return $n_Lnamegen_RandomNameGenerator$
}
/** @constructor */
function $c_ju_Random(seed_in) {
  this.ju_Random__f_seedHi = 0;
  this.ju_Random__f_seedLo = 0;
  this.ju_Random__f_nextNextGaussian = 0.0;
  this.ju_Random__f_haveNextNextGaussian = false;
  this.ju_Random__f_haveNextNextGaussian = false;
  this.setSeed__J__V(seed_in)
}
$c_ju_Random.prototype = new $j_internal$002d0.$h_O();
$c_ju_Random.prototype.constructor = $c_ju_Random;
/** @constructor */
function $h_ju_Random() {
  /*<skip>*/
}
$h_ju_Random.prototype = $c_ju_Random.prototype;
$c_ju_Random.prototype.setSeed__J__V = (function(seed_in) {
  var lo = ((-554899859) ^ seed_in.RTLong__f_lo);
  var hi = (5 ^ seed_in.RTLong__f_hi);
  var hi$1 = (65535 & hi);
  var lo$1 = (((lo >>> 24) | 0) | (hi$1 << 8));
  this.ju_Random__f_seedHi = lo$1;
  this.ju_Random__f_seedLo = (16777215 & lo);
  this.ju_Random__f_haveNextNextGaussian = false
});
$c_ju_Random.prototype.next__I__I = (function(bits) {
  var oldSeedHi = this.ju_Random__f_seedHi;
  var oldSeedLo = this.ju_Random__f_seedLo;
  var loProd = ((1.5525485E7 * oldSeedLo) + 11.0);
  var hiProd = ((1502.0 * oldSeedLo) + (1.5525485E7 * oldSeedHi));
  var x = (loProd / 1.6777216E7);
  var newSeedHi = (16777215 & (($j_internal$002d0.$uI((x | 0)) + (16777215 & $j_internal$002d0.$uI((hiProd | 0)))) | 0));
  var newSeedLo = (16777215 & $j_internal$002d0.$uI((loProd | 0)));
  this.ju_Random__f_seedHi = newSeedHi;
  this.ju_Random__f_seedLo = newSeedLo;
  var result32 = ((newSeedHi << 8) | (newSeedLo >> 16));
  return ((result32 >>> ((32 - bits) | 0)) | 0)
});
$c_ju_Random.prototype.nextDouble__D = (function() {
  return (((1.34217728E8 * this.next__I__I(26)) + this.next__I__I(27)) / 9.007199254740992E15)
});
var $d_ju_Random = new $j_internal$002d0.$TypeData().initClass({
  ju_Random: 0
}, false, "java.util.Random", {
  ju_Random: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_ju_Random.prototype.$classData = $d_ju_Random;
let $e_namegen = (function() {
  return $m_Lnamegen_RandomNameGenerator$().randomName__T()
});
export { $e_namegen as namegen };
//# sourceMappingURL=randomName.js.map
