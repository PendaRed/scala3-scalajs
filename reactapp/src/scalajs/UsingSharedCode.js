'use strict';
import * as $j_internal$002d0 from "./internal-0.js";
/** @constructor */
function $c_Lcom_jgibbons_eg1_logic_PersonValidator$() {
  /*<skip>*/
}
$c_Lcom_jgibbons_eg1_logic_PersonValidator$.prototype = new $j_internal$002d0.$h_O();
$c_Lcom_jgibbons_eg1_logic_PersonValidator$.prototype.constructor = $c_Lcom_jgibbons_eg1_logic_PersonValidator$;
/** @constructor */
function $h_Lcom_jgibbons_eg1_logic_PersonValidator$() {
  /*<skip>*/
}
$h_Lcom_jgibbons_eg1_logic_PersonValidator$.prototype = $c_Lcom_jgibbons_eg1_logic_PersonValidator$.prototype;
$c_Lcom_jgibbons_eg1_logic_PersonValidator$.prototype.validate__Lcom_jgibbons_eg1_dto_PersonDto__Z = (function(p) {
  var this$1 = p.Lcom_jgibbons_eg1_dto_PersonDto__f_forename;
  if ((!(this$1 === ""))) {
    var this$2 = p.Lcom_jgibbons_eg1_dto_PersonDto__f_surname;
    var $$x1 = (!(this$2 === ""))
  } else {
    var $$x1 = false
  };
  if ($$x1) {
    var this$3 = p.Lcom_jgibbons_eg1_dto_PersonDto__f_email;
    return (!(this$3 === ""))
  } else {
    return false
  }
});
var $d_Lcom_jgibbons_eg1_logic_PersonValidator$ = new $j_internal$002d0.$TypeData().initClass({
  Lcom_jgibbons_eg1_logic_PersonValidator$: 0
}, false, "com.jgibbons.eg1.logic.PersonValidator$", {
  Lcom_jgibbons_eg1_logic_PersonValidator$: 1,
  O: 1
});
$c_Lcom_jgibbons_eg1_logic_PersonValidator$.prototype.$classData = $d_Lcom_jgibbons_eg1_logic_PersonValidator$;
var $n_Lcom_jgibbons_eg1_logic_PersonValidator$;
function $m_Lcom_jgibbons_eg1_logic_PersonValidator$() {
  if ((!$n_Lcom_jgibbons_eg1_logic_PersonValidator$)) {
    $n_Lcom_jgibbons_eg1_logic_PersonValidator$ = new $c_Lcom_jgibbons_eg1_logic_PersonValidator$()
  };
  return $n_Lcom_jgibbons_eg1_logic_PersonValidator$
}
/** @constructor */
function $c_Lcom_jgibbons_usingsharred_UsingSharedCode$() {
  /*<skip>*/
}
$c_Lcom_jgibbons_usingsharred_UsingSharedCode$.prototype = new $j_internal$002d0.$h_O();
$c_Lcom_jgibbons_usingsharred_UsingSharedCode$.prototype.constructor = $c_Lcom_jgibbons_usingsharred_UsingSharedCode$;
/** @constructor */
function $h_Lcom_jgibbons_usingsharred_UsingSharedCode$() {
  /*<skip>*/
}
$h_Lcom_jgibbons_usingsharred_UsingSharedCode$.prototype = $c_Lcom_jgibbons_usingsharred_UsingSharedCode$.prototype;
$c_Lcom_jgibbons_usingsharred_UsingSharedCode$.prototype.handleUserInput__T__T__T__T = (function(fname, sname, email) {
  var p = new $c_Lcom_jgibbons_eg1_dto_PersonDto(fname, sname, email);
  var r = ($m_Lcom_jgibbons_eg1_logic_PersonValidator$().validate__Lcom_jgibbons_eg1_dto_PersonDto__Z(p) ? ($j_internal$002d0.$m_s_package$(), new $c_s_util_Right(p)) : ($j_internal$002d0.$m_s_package$(), new $c_s_util_Left("Please enter the correct details")));
  return r.toString__T()
});
var $d_Lcom_jgibbons_usingsharred_UsingSharedCode$ = new $j_internal$002d0.$TypeData().initClass({
  Lcom_jgibbons_usingsharred_UsingSharedCode$: 0
}, false, "com.jgibbons.usingsharred.UsingSharedCode$", {
  Lcom_jgibbons_usingsharred_UsingSharedCode$: 1,
  O: 1
});
$c_Lcom_jgibbons_usingsharred_UsingSharedCode$.prototype.$classData = $d_Lcom_jgibbons_usingsharred_UsingSharedCode$;
var $n_Lcom_jgibbons_usingsharred_UsingSharedCode$;
function $m_Lcom_jgibbons_usingsharred_UsingSharedCode$() {
  if ((!$n_Lcom_jgibbons_usingsharred_UsingSharedCode$)) {
    $n_Lcom_jgibbons_usingsharred_UsingSharedCode$ = new $c_Lcom_jgibbons_usingsharred_UsingSharedCode$()
  };
  return $n_Lcom_jgibbons_usingsharred_UsingSharedCode$
}
/** @constructor */
function $c_Lcom_jgibbons_eg1_dto_PersonDto(forename, surname, email) {
  this.Lcom_jgibbons_eg1_dto_PersonDto__f_forename = null;
  this.Lcom_jgibbons_eg1_dto_PersonDto__f_surname = null;
  this.Lcom_jgibbons_eg1_dto_PersonDto__f_email = null;
  this.Lcom_jgibbons_eg1_dto_PersonDto__f_forename = forename;
  this.Lcom_jgibbons_eg1_dto_PersonDto__f_surname = surname;
  this.Lcom_jgibbons_eg1_dto_PersonDto__f_email = email
}
$c_Lcom_jgibbons_eg1_dto_PersonDto.prototype = new $j_internal$002d0.$h_O();
$c_Lcom_jgibbons_eg1_dto_PersonDto.prototype.constructor = $c_Lcom_jgibbons_eg1_dto_PersonDto;
/** @constructor */
function $h_Lcom_jgibbons_eg1_dto_PersonDto() {
  /*<skip>*/
}
$h_Lcom_jgibbons_eg1_dto_PersonDto.prototype = $c_Lcom_jgibbons_eg1_dto_PersonDto.prototype;
$c_Lcom_jgibbons_eg1_dto_PersonDto.prototype.productIterator__sc_Iterator = (function() {
  return new $c_s_Product$$anon$1(this)
});
$c_Lcom_jgibbons_eg1_dto_PersonDto.prototype.hashCode__I = (function() {
  var this$2 = $j_internal$002d0.$m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
});
$c_Lcom_jgibbons_eg1_dto_PersonDto.prototype.equals__O__Z = (function(x$0) {
  if ((this === x$0)) {
    return true
  } else if ((x$0 instanceof $c_Lcom_jgibbons_eg1_dto_PersonDto)) {
    var x$0$2 = $as_Lcom_jgibbons_eg1_dto_PersonDto(x$0);
    return (((this.Lcom_jgibbons_eg1_dto_PersonDto__f_forename === x$0$2.Lcom_jgibbons_eg1_dto_PersonDto__f_forename) && (this.Lcom_jgibbons_eg1_dto_PersonDto__f_surname === x$0$2.Lcom_jgibbons_eg1_dto_PersonDto__f_surname)) && (this.Lcom_jgibbons_eg1_dto_PersonDto__f_email === x$0$2.Lcom_jgibbons_eg1_dto_PersonDto__f_email))
  } else {
    return false
  }
});
$c_Lcom_jgibbons_eg1_dto_PersonDto.prototype.toString__T = (function() {
  return $j_internal$002d0.$m_sr_ScalaRunTime$()._toString__s_Product__T(this)
});
$c_Lcom_jgibbons_eg1_dto_PersonDto.prototype.productArity__I = (function() {
  return 3
});
$c_Lcom_jgibbons_eg1_dto_PersonDto.prototype.productPrefix__T = (function() {
  return "PersonDto"
});
$c_Lcom_jgibbons_eg1_dto_PersonDto.prototype.productElement__I__O = (function(n) {
  switch (n) {
    case 0: {
      return this.Lcom_jgibbons_eg1_dto_PersonDto__f_forename;
      break
    }
    case 1: {
      return this.Lcom_jgibbons_eg1_dto_PersonDto__f_surname;
      break
    }
    case 2: {
      return this.Lcom_jgibbons_eg1_dto_PersonDto__f_email;
      break
    }
    default: {
      throw $j_internal$002d0.$ct_jl_IndexOutOfBoundsException__T__(new $j_internal$002d0.$c_jl_IndexOutOfBoundsException(), ("" + n))
    }
  }
});
function $as_Lcom_jgibbons_eg1_dto_PersonDto(obj) {
  return (((obj instanceof $c_Lcom_jgibbons_eg1_dto_PersonDto) || (obj === null)) ? obj : $j_internal$002d0.$throwClassCastException(obj, "com.jgibbons.eg1.dto.PersonDto"))
}
function $isArrayOf_Lcom_jgibbons_eg1_dto_PersonDto(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lcom_jgibbons_eg1_dto_PersonDto)))
}
function $asArrayOf_Lcom_jgibbons_eg1_dto_PersonDto(obj, depth) {
  return (($isArrayOf_Lcom_jgibbons_eg1_dto_PersonDto(obj, depth) || (obj === null)) ? obj : $j_internal$002d0.$throwArrayCastException(obj, "Lcom.jgibbons.eg1.dto.PersonDto;", depth))
}
var $d_Lcom_jgibbons_eg1_dto_PersonDto = new $j_internal$002d0.$TypeData().initClass({
  Lcom_jgibbons_eg1_dto_PersonDto: 0
}, false, "com.jgibbons.eg1.dto.PersonDto", {
  Lcom_jgibbons_eg1_dto_PersonDto: 1,
  O: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1
});
$c_Lcom_jgibbons_eg1_dto_PersonDto.prototype.$classData = $d_Lcom_jgibbons_eg1_dto_PersonDto;
/** @constructor */
function $c_s_util_Either() {
  /*<skip>*/
}
$c_s_util_Either.prototype = new $j_internal$002d0.$h_O();
$c_s_util_Either.prototype.constructor = $c_s_util_Either;
/** @constructor */
function $h_s_util_Either() {
  /*<skip>*/
}
$h_s_util_Either.prototype = $c_s_util_Either.prototype;
/** @constructor */
function $c_s_Product$$anon$1(outer) {
  this.s_Product$$anon$1__f_c = 0;
  this.s_Product$$anon$1__f_cmax = 0;
  this.s_Product$$anon$1__f_$outer = null;
  if ((outer === null)) {
    throw $j_internal$002d0.$m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
  } else {
    this.s_Product$$anon$1__f_$outer = outer
  };
  this.s_Product$$anon$1__f_c = 0;
  this.s_Product$$anon$1__f_cmax = outer.productArity__I()
}
$c_s_Product$$anon$1.prototype = new $j_internal$002d0.$h_sc_AbstractIterator();
$c_s_Product$$anon$1.prototype.constructor = $c_s_Product$$anon$1;
/** @constructor */
function $h_s_Product$$anon$1() {
  /*<skip>*/
}
$h_s_Product$$anon$1.prototype = $c_s_Product$$anon$1.prototype;
$c_s_Product$$anon$1.prototype.hasNext__Z = (function() {
  return (this.s_Product$$anon$1__f_c < this.s_Product$$anon$1__f_cmax)
});
$c_s_Product$$anon$1.prototype.next__O = (function() {
  var result = this.s_Product$$anon$1__f_$outer.productElement__I__O(this.s_Product$$anon$1__f_c);
  this.s_Product$$anon$1__f_c = ((1 + this.s_Product$$anon$1__f_c) | 0);
  return result
});
var $d_s_Product$$anon$1 = new $j_internal$002d0.$TypeData().initClass({
  s_Product$$anon$1: 0
}, false, "scala.Product$$anon$1", {
  s_Product$$anon$1: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_s_Product$$anon$1.prototype.$classData = $d_s_Product$$anon$1;
/** @constructor */
function $c_s_util_Left(value) {
  this.s_util_Left__f_value = null;
  this.s_util_Left__f_value = value
}
$c_s_util_Left.prototype = new $h_s_util_Either();
$c_s_util_Left.prototype.constructor = $c_s_util_Left;
/** @constructor */
function $h_s_util_Left() {
  /*<skip>*/
}
$h_s_util_Left.prototype = $c_s_util_Left.prototype;
$c_s_util_Left.prototype.productPrefix__T = (function() {
  return "Left"
});
$c_s_util_Left.prototype.productArity__I = (function() {
  return 1
});
$c_s_util_Left.prototype.productElement__I__O = (function(x$1) {
  return ((x$1 === 0) ? this.s_util_Left__f_value : $j_internal$002d0.$m_sr_Statics$().ioobe__I__O(x$1))
});
$c_s_util_Left.prototype.productIterator__sc_Iterator = (function() {
  return new $j_internal$002d0.$c_sr_ScalaRunTime$$anon$1(this)
});
$c_s_util_Left.prototype.hashCode__I = (function() {
  var this$2 = $j_internal$002d0.$m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
});
$c_s_util_Left.prototype.toString__T = (function() {
  return $j_internal$002d0.$m_sr_ScalaRunTime$()._toString__s_Product__T(this)
});
$c_s_util_Left.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else if ((x$1 instanceof $c_s_util_Left)) {
    var Left$1 = $as_s_util_Left(x$1);
    return $j_internal$002d0.$m_sr_BoxesRunTime$().equals__O__O__Z(this.s_util_Left__f_value, Left$1.s_util_Left__f_value)
  } else {
    return false
  }
});
function $as_s_util_Left(obj) {
  return (((obj instanceof $c_s_util_Left) || (obj === null)) ? obj : $j_internal$002d0.$throwClassCastException(obj, "scala.util.Left"))
}
function $isArrayOf_s_util_Left(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_util_Left)))
}
function $asArrayOf_s_util_Left(obj, depth) {
  return (($isArrayOf_s_util_Left(obj, depth) || (obj === null)) ? obj : $j_internal$002d0.$throwArrayCastException(obj, "Lscala.util.Left;", depth))
}
var $d_s_util_Left = new $j_internal$002d0.$TypeData().initClass({
  s_util_Left: 0
}, false, "scala.util.Left", {
  s_util_Left: 1,
  s_util_Either: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_s_util_Left.prototype.$classData = $d_s_util_Left;
/** @constructor */
function $c_s_util_Right(value) {
  this.s_util_Right__f_value = null;
  this.s_util_Right__f_value = value
}
$c_s_util_Right.prototype = new $h_s_util_Either();
$c_s_util_Right.prototype.constructor = $c_s_util_Right;
/** @constructor */
function $h_s_util_Right() {
  /*<skip>*/
}
$h_s_util_Right.prototype = $c_s_util_Right.prototype;
$c_s_util_Right.prototype.productPrefix__T = (function() {
  return "Right"
});
$c_s_util_Right.prototype.productArity__I = (function() {
  return 1
});
$c_s_util_Right.prototype.productElement__I__O = (function(x$1) {
  return ((x$1 === 0) ? this.s_util_Right__f_value : $j_internal$002d0.$m_sr_Statics$().ioobe__I__O(x$1))
});
$c_s_util_Right.prototype.productIterator__sc_Iterator = (function() {
  return new $j_internal$002d0.$c_sr_ScalaRunTime$$anon$1(this)
});
$c_s_util_Right.prototype.hashCode__I = (function() {
  var this$2 = $j_internal$002d0.$m_s_util_hashing_MurmurHash3$();
  return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
});
$c_s_util_Right.prototype.toString__T = (function() {
  return $j_internal$002d0.$m_sr_ScalaRunTime$()._toString__s_Product__T(this)
});
$c_s_util_Right.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else if ((x$1 instanceof $c_s_util_Right)) {
    var Right$1 = $as_s_util_Right(x$1);
    return $j_internal$002d0.$m_sr_BoxesRunTime$().equals__O__O__Z(this.s_util_Right__f_value, Right$1.s_util_Right__f_value)
  } else {
    return false
  }
});
function $as_s_util_Right(obj) {
  return (((obj instanceof $c_s_util_Right) || (obj === null)) ? obj : $j_internal$002d0.$throwClassCastException(obj, "scala.util.Right"))
}
function $isArrayOf_s_util_Right(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_util_Right)))
}
function $asArrayOf_s_util_Right(obj, depth) {
  return (($isArrayOf_s_util_Right(obj, depth) || (obj === null)) ? obj : $j_internal$002d0.$throwArrayCastException(obj, "Lscala.util.Right;", depth))
}
var $d_s_util_Right = new $j_internal$002d0.$TypeData().initClass({
  s_util_Right: 0
}, false, "scala.util.Right", {
  s_util_Right: 1,
  s_util_Either: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_s_util_Right.prototype.$classData = $d_s_util_Right;
let $e_handleUserInput = (function(arg, arg$2, arg$3) {
  var prep0 = $j_internal$002d0.$as_T(arg);
  var prep1 = $j_internal$002d0.$as_T(arg$2);
  var prep2 = $j_internal$002d0.$as_T(arg$3);
  return $m_Lcom_jgibbons_usingsharred_UsingSharedCode$().handleUserInput__T__T__T__T(prep0, prep1, prep2)
});
export { $e_handleUserInput as handleUserInput };
//# sourceMappingURL=UsingSharedCode.js.map
