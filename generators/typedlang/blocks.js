/**
 * @fileoverview Generating TypedLang for logic blocks.
 * @author q.neutron@gmail.com (Quynh Neutron)
 */
'use strict';

goog.provide('Blockly.TypedLang.blocks');

goog.require('Blockly.TypedLang');

Blockly.TypedLang['empty_scene_typed'] = function(block) {
    var argument1 = Blockly.TypedLang.valueToCode(block, 'PARAM0',
      Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
    var argument2 = Blockly.TypedLang.valueToCode(block, 'PARAM1',
      Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
    var code = 'empty_scene ' + argument1 + ' ' + argument2;
  return [code, Blockly.TypedLang.ORDER_FUNCTION_CALL];
};

Blockly.TypedLang['rectangle_typed'] = function(block) {
  var arg1 = Blockly.TypedLang.valueToCode(block, 'PARAM0',
      Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
  var arg2 = Blockly.TypedLang.valueToCode(block, 'PARAM1',
      Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
  var color = Blockly.TypedLang.valueToCode(block, 'PARAM2',
      Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
  var code1 = block.getFieldValue('IMAGE') === 'RECTANGLE_OUTLINE' ? ' ~fill:false' : '' ;
  var code = 'rectangle ' + arg1 + ' ' + arg2 + code1 + ' ' + color;
  return [code, Blockly.TypedLang.ORDER_FUNCTION_CALL];
};

Blockly.TypedLang['read_image_typed'] = function(block) {
  var param = Blockly.TypedLang.valueToCode(block, 'PARAM0',
      Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
  var width = Blockly.TypedLang.valueToCode(block, 'PARAM1',
      Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
  var height = Blockly.TypedLang.valueToCode(block, 'PARAM2',
      Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
  var code = 'read_image ' + param + ' ' + width + ' ' + height;
  return [code, Blockly.TypedLang.ORDER_FUNCTION_CALL];
};

Blockly.TypedLang['image_width_typed'] = function(block) {
  var param = Blockly.TypedLang.valueToCode(block, 'PARAM0',
      Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
  var code = 'image_width ' + param;
  return [code, Blockly.TypedLang.ORDER_FUNCTION_CALL];
};

Blockly.TypedLang['image_height_typed'] = function(block) {
  var param = Blockly.TypedLang.valueToCode(block, 'PARAM0',
      Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
  var code = 'image_height ' + param;
  return [code, Blockly.TypedLang.ORDER_FUNCTION_CALL];
};

Blockly.TypedLang['overlay_typed'] = function(block) {
  var img = Blockly.TypedLang.valueToCode(block, 'PARAM0',
      Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
  var pair = Blockly.TypedLang.valueToCode(block, 'PARAM1',
      Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
  var scene = Blockly.TypedLang.valueToCode(block, 'PARAM2',
      Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
  var code = 'overlay ' + img + ' ' + pair + ' ' + scene;
  return [code, Blockly.TypedLang.ORDER_FUNCTION_CALL];
};

Blockly.TypedLang['place_image_typed'] = function(block) {
  var img = Blockly.TypedLang.valueToCode(block, 'PARAM0',
      Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
  var pair = Blockly.TypedLang.valueToCode(block, 'PARAM1',
      Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
  var scene = Blockly.TypedLang.valueToCode(block, 'PARAM2',
      Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
  var code = 'place_image ' + img + ' ' + pair + ' ' + scene;
  return [code, Blockly.TypedLang.ORDER_FUNCTION_CALL];
};

Blockly.TypedLang['place_images_typed'] = function(block) {
  var imglist = Blockly.TypedLang.valueToCode(block, 'PARAM0',
      Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
  var pairlist = Blockly.TypedLang.valueToCode(block, 'PARAM1',
      Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
  var scene = Blockly.TypedLang.valueToCode(block, 'PARAM2',
      Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
  var code = 'place_images ' + imglist + ' ' + pairlist + ' ' + scene;
  return [code, Blockly.TypedLang.ORDER_FUNCTION_CALL];
};

Blockly.TypedLang['andmap_typed'] = function(block) {
  var fun = Blockly.TypedLang.valueToCode(block, 'PARAM0',
      Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
  var alist = Blockly.TypedLang.valueToCode(block, 'PARAM1',
      Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
  var code = 'andmap ' + fun + ' ' + alist;
  return [code, Blockly.TypedLang.ORDER_FUNCTION_CALL];
};

Blockly.TypedLang['ormap_typed'] = function(block) {
  var fun = Blockly.TypedLang.valueToCode(block, 'PARAM0',
      Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
  var list = Blockly.TypedLang.valueToCode(block, 'PARAM1',
      Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
  var code = 'ormap ' + fun + ' ' + list;
  return [code, Blockly.TypedLang.ORDER_FUNCTION_CALL];
};

Blockly.TypedLang['sum_typed'] = function(block) {
  var list = Blockly.TypedLang.valueToCode(block, 'PARAM0',
      Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
  var code = 'sum ' + list;
  return [code, Blockly.TypedLang.ORDER_FUNCTION_CALL];
};

Blockly.TypedLang['circle_typed'] = function(block) {
  // circle or circle_outline.
 var a = Blockly.TypedLang.valueToCode(block, 'PARAM0',
   Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
 var color = Blockly.TypedLang.valueToCode(block, 'PARAM1',
   Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
 var code1 = block.getFieldValue('IMAGE') === 'CIRCLE_OUTLINE' ? ' ~fill:false' : '' ;
 var code = 'circle ' + a + ' ' + color + code1;
 return [code, Blockly.TypedLang.ORDER_FUNCTION_CALL];
};

Blockly.TypedLang['line_typed'] = function(block) {
  var pairlist = Blockly.TypedLang.valueToCode(block, 'PARAM0',
      Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
  var color = Blockly.TypedLang.valueToCode(block, 'PARAM1',
      Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
  var code = 'line ' + pairlist + ' ' + color;
  return [code, Blockly.TypedLang.ORDER_FUNCTION_CALL];
};

Blockly.TypedLang['polygon_typed'] = function(block) {
  var pairlist = Blockly.TypedLang.valueToCode(block, 'PARAM0',
      Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
  var color = Blockly.TypedLang.valueToCode(block, 'PARAM1',
      Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
  var code1 = block.getFieldValue('IMAGE') === 'POLYGON_OUTLINE' ? ' ~fill:false' : '' ;
  var code = 'polygon ' + pairlist + ' ' + color + code1;
  return [code, Blockly.TypedLang.ORDER_FUNCTION_CALL];
};

Blockly.TypedLang['make_color_typed'] = function(block) {
  var r = Blockly.TypedLang.valueToCode(block, 'PARAM0',
      Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
  var g = Blockly.TypedLang.valueToCode(block, 'PARAM1',
      Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
  var b = Blockly.TypedLang.valueToCode(block, 'PARAM2',
      Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
  var code = 'make_color ' + r + ' ' + g + ' ' + b;
  return [code, Blockly.TypedLang.ORDER_FUNCTION_CALL];
};

Blockly.TypedLang['make_color2_typed'] = function(block) {
  var r = Blockly.TypedLang.valueToCode(block, 'PARAM0',
      Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
  var g = Blockly.TypedLang.valueToCode(block, 'PARAM1',
      Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
  var b = Blockly.TypedLang.valueToCode(block, 'PARAM2',
      Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
  var a = Blockly.TypedLang.valueToCode(block, 'PARAM3',
      Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
  var code = 'make_color ' + r + ' ' + g + ' ' + b + ' ~alpha:' + a;
  return [code, Blockly.TypedLang.ORDER_FUNCTION_CALL];
};

Blockly.TypedLang['color_typed'] = function(block) {
    var fieldValue = block.getFieldValue('COLOR');
    var code = (fieldValue == 'RED') ? 'red'
	: (fieldValue == 'BLUE') ? 'blue'
	: (fieldValue == 'BLACK') ? 'black'
	: (fieldValue == 'WHITE') ? 'white'
	: (fieldValue == 'YELLOW') ? 'yellow'
	: (fieldValue == 'GREEN') ? 'green'
	: (fieldValue == 'PINK') ? 'pink'
	: 'cyan';
    return ['Color.' + code, Blockly.TypedLang.ORDER_ATOMIC];
};

Blockly.TypedLang['text_typed'] = function(block) {
  var a = Blockly.TypedLang.valueToCode(block, 'PARAM0',
      Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
  var b = Blockly.TypedLang.valueToCode(block, 'PARAM1',
      Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
  var color = Blockly.TypedLang.valueToCode(block, 'PARAM2',
      Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
  var code = 'text ' + a + ' ' + b + ' ' + color;
  return [code, Blockly.TypedLang.ORDER_FUNCTION_CALL];
};

Blockly.TypedLang['logic_boolean_typed'] = function(block) {
  // Boolean values true and false.
  var code = (block.getFieldValue('BOOL') == 'TRUE') ? 'true' : 'false';
  return [code, Blockly.TypedLang.ORDER_ATOMIC];
};

Blockly.TypedLang['not_operator_typed'] = function(block) {
  // Boolean operator "not".
  var argument = Blockly.TypedLang.valueToCode(block, 'A',
      Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
  var code = 'not ' + argument;
  return [code, Blockly.TypedLang.ORDER_FUNCTION_CALL];
};

Blockly.TypedLang['logic_operator_typed'] = function(block) {
  // Boolean operators && and ||.
  var OPERATORS = {
    'AND': [' && ', Blockly.TypedLang.ORDER_LOGICAL_AND],
    'OR': [' || ', Blockly.TypedLang.ORDER_LOGICAL_OR]
  };
  var tuple = OPERATORS[block.getFieldValue('OP_BOOL')];
  var operator = tuple[0];
  var order = tuple[1];
  var argument0 = Blockly.TypedLang.valueToCode(block, 'PARAM0', order) || '?';
  var argument1 = Blockly.TypedLang.valueToCode(block, 'PARAM1', order) || '?';
  var code = argument0 + operator + argument1;
  for (var i = 2; i < block.itemCount_; i++) {
    var argument = Blockly.TypedLang.valueToCode(block, 'PARAM' + i,
        order) || '?';
    code += operator + argument;
  }
  return [code, order];
};

Blockly.TypedLang['logic_compare_typed'] = function(block) {
  // Comparison operator.
  var OPERATORS = {
    'EQ': [' = ', Blockly.TypedLang.ORDER_RELATIONAL],
    'NEQ': [' <> ', Blockly.TypedLang.ORDER_RELATIONAL],
    'LT': [' < ', Blockly.TypedLang.ORDER_RELATIONAL],
    'LTE': [' <= ', Blockly.TypedLang.ORDER_RELATIONAL],
    'GT': [' > ', Blockly.TypedLang.ORDER_RELATIONAL],
    'GTE': [' >= ', Blockly.TypedLang.ORDER_RELATIONAL],
  };
  var tuple = OPERATORS[block.getFieldValue('OP')];
  var operator = tuple[0];
  var order = tuple[1];
  var argument0 = Blockly.TypedLang.valueToCode(block, 'A', order) || '?';
  var argument1 = Blockly.TypedLang.valueToCode(block, 'B', order) || '?';
  var code = argument0 + operator + argument1;
  return [code, order];
};

Blockly.TypedLang['logic_ternary_typed'] = function(block) {
  // Ternary operator.
  var value_if = Blockly.TypedLang.valueToCode(block, 'IF',
      Blockly.TypedLang.ORDER_EXPR) || '?';
  var value_then = Blockly.TypedLang.valueToCode(block, 'THEN',
      Blockly.TypedLang.ORDER_THEN) || '?';
  var code = 'if ' + value_if + ' then ' + value_then;
  for (var i = 0; i < block.itemCount_; i++) {
    var value_elseif = Blockly.TypedLang.valueToCode(block, 'ELSEIF' + i,
        Blockly.TypedLang.ORDER_EXPR) || '?';
    var value_then = Blockly.TypedLang.valueToCode(block, 'THEN' + i,
        Blockly.TypedLang.ORDER_EXPR) || '?';
    code += '\n  else if ' + value_elseif + ' then ' + value_then;
  }
  var value_else = Blockly.TypedLang.valueToCode(block, 'ELSE',
      Blockly.TypedLang.ORDER_ELSE) || '?';
  code += '\n  else ' + value_else;
  return [code, Blockly.TypedLang.ORDER_EXPR];
};

Blockly.TypedLang['int_typed'] = function(block) {
  // int value.
  var code = parseInt(block.getFieldValue('INT'));
  var order = code < 0 ? Blockly.TypedLang.ORDER_SUBTRACTION
            : Blockly.TypedLang.ORDER_ATOMIC;
  return [code, order];
};

Blockly.TypedLang['max_int_typed'] = function(block) {
  // max_int or min_int.
  var code = block.getFieldValue('INT') === 'MAX_INT' ? 'max_int' : 'min_int';
  return [code, Blockly.TypedLang.ORDER_ATOMIC];
}

Blockly.TypedLang['int_arithmetic_typed'] = function(block) {
  // Basic arithmetic operators
  var OPERATORS = {
    'ADD_INT': [' + ', Blockly.TypedLang.ORDER_ADDITION],
    'MINUS_INT': [' - ', Blockly.TypedLang.ORDER_SUBTRACTION],
    'MULTIPLY_INT': [' * ', Blockly.TypedLang.ORDER_MULTIPLICATION],
    'DIVIDE_INT': [' / ', Blockly.TypedLang.ORDER_DIVISION],
    'MOD_INT': [' mod ', Blockly.TypedLang.ORDER_MOD]
  };
  var tuple = OPERATORS[block.getFieldValue('OP_INT')];
  var operator = tuple[0];
  var order = tuple[1];
  var argument0 = Blockly.TypedLang.valueToCode(block, 'A', order) || '?';
  var argument1 = Blockly.TypedLang.valueToCode(block, 'B', order) || '?';
  var code = argument0 + operator + argument1;
  return [code, order];
};

Blockly.TypedLang['int_abs_typed'] = function(block) {
  // int function "abs".
  var argument = Blockly.TypedLang.valueToCode(block, 'A',
      Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
  var code = 'abs ' + argument;
  return [code, Blockly.TypedLang.ORDER_FUNCTION_CALL];
};

Blockly.TypedLang['int_of_float_typed'] = function(block) {
  var param = Blockly.TypedLang.valueToCode(block, 'PARAM0',
      Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
  var code = 'int_of_float ' + param;
  return [code, Blockly.TypedLang.ORDER_FUNCTION_CALL];
};

Blockly.TypedLang['float_typed'] = function(block) {
  // float value.
  var code = block.getFieldValue('Float');
  return [code, Blockly.TypedLang.ORDER_ATOMIC];
};

Blockly.TypedLang['infinity_typed'] = function(block) {
  // infinity, neg_infinity or nan.
  var fieldValue = block.getFieldValue('FLOAT');
  var code = fieldValue === 'INFINITY' ? 'infinity'
      : fieldValue === 'NEG_INFINITY' ? 'neg_infinity'
      : 'nan';
  return [code, Blockly.TypedLang.ORDER_ATOMIC];
}

Blockly.TypedLang['float_arithmetic_typed'] = function(block) {
  // Basic arithmetic operators
  var OPERATORS = {
    'ADD_FLOAT': [' +. ', Blockly.TypedLang.ORDER_ADDITION],
    'MINUS_FLOAT': [' -. ', Blockly.TypedLang.ORDER_SUBTRACTION],
    'MULTIPLY_FLOAT': [' *. ', Blockly.TypedLang.ORDER_MULTIPLICATION],
    'DIVIDE_FLOAT': [' /. ', Blockly.TypedLang.ORDER_DIVISION],
    'POWER_FLOAT': [' ** ', Blockly.TypedLang.ORDER_POWER]
  };
  var tuple = OPERATORS[block.getFieldValue('OP_FLOAT')];
  var operator = tuple[0];
  var order = tuple[1];
  var argument0 = Blockly.TypedLang.valueToCode(block, 'A', order) || '?';
  var argument1 = Blockly.TypedLang.valueToCode(block, 'B', order) || '?';
  var code = argument0 + operator + argument1;
  return [code, order];
};

Blockly.TypedLang['float_sqrt_typed'] = function(block) {
  // float function "sqrt".
  var argument = Blockly.TypedLang.valueToCode(block, 'A',
      Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
  var code = 'sqrt ' + argument;
  return [code, Blockly.TypedLang.ORDER_FUNCTION_CALL];
};

Blockly.TypedLang['float_of_int_typed'] = function(block) {
  var param = Blockly.TypedLang.valueToCode(block, 'PARAM0',
      Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
  var code = 'float_of_int ' + param;
  return [code, Blockly.TypedLang.ORDER_FUNCTION_CALL];
};

Blockly.TypedLang['string_typed'] = function(block) {
  var value = block.getFieldValue('STRING');
  var literal = JSON.stringify(value);
  return [literal, Blockly.TypedLang.ORDER_ATOMIC];
};

Blockly.TypedLang['concat_string_typed'] = function(block) {
  var left = Blockly.TypedLang.valueToCode(block, 'A',
      Blockly.TypedLang.ORDER_CONCAT_STRING) || '?';
  var right = Blockly.TypedLang.valueToCode(block, 'B',
      Blockly.TypedLang.ORDER_CONCAT_STRING) || '?';
  var code = left + ' ^ ' + right;
  return [code, Blockly.TypedLang.ORDER_CONCAT_STRING];
};

Blockly.TypedLang['string_of_int_typed'] = function(block) {
  var param = Blockly.TypedLang.valueToCode(block, 'PARAM0',
      Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
  var code = 'string_of_int ' + param;
  return [code, Blockly.TypedLang.ORDER_FUNCTION_CALL];
};

Blockly.TypedLang['string_of_float_typed'] = function(block) {
  var param = Blockly.TypedLang.valueToCode(block, 'PARAM0',
      Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
  var code = 'string_of_float ' + param;
  return [code, Blockly.TypedLang.ORDER_FUNCTION_CALL];
};

Blockly.TypedLang['string_of_bool_typed'] = function(block) {
  var param = Blockly.TypedLang.valueToCode(block, 'PARAM0',
      Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
  var code = 'string_of_bool ' + param;
  return [code, Blockly.TypedLang.ORDER_FUNCTION_CALL];
};

Blockly.TypedLang['option_none_typed'] = function(block) {
  return ['None', Blockly.TypedLang.ORDER_ATOMIC];
};

Blockly.TypedLang['option_some_typed'] = function(block) {
  var param = Blockly.TypedLang.valueToCode(block, 'PARAM',
      Blockly.TypedLang.ORDER_CONSTANT_CONSTRUCTOR) || '?';
  var code = 'Some ' + param;
  return [code, Blockly.TypedLang.ORDER_CONSTANT_CONSTRUCTOR];
};

Blockly.TypedLang['lists_create_with_typed'] = function(block) {
  // Create a list with any number of elements of any type.
  var elements = new Array(block.itemCount_);
  for (var i = 0; i < block.itemCount_; i++) {
    elements[i] = Blockly.TypedLang.valueToCode(block, 'ADD' + i,
        Blockly.TypedLang.ORDER_SEMI) || '?';
  }
  var code = '[' + elements.join('; ') + ']';
  return [code, Blockly.TypedLang.ORDER_ATOMIC];
};

Blockly.TypedLang['list_empty_typed'] = function(block) {
  return ['[]', Blockly.TypedLang.ORDER_ATOMIC];
};

Blockly.TypedLang['list_cons_typed'] = function(block) {
  var first = Blockly.TypedLang.valueToCode(block, 'FIRST',
      Blockly.TypedLang.ORDER_CONS) || '?';
  var rest = Blockly.TypedLang.valueToCode(block, 'CONS',
      Blockly.TypedLang.ORDER_CONS) || '?';
  var code = first + ' :: ' + rest;
  return [code, Blockly.TypedLang.ORDER_CONS];
};

Blockly.TypedLang['list_assoc_typed'] = function(block) {
  var first = Blockly.TypedLang.valueToCode(block, 'PARAM0',
      Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
  var rest = Blockly.TypedLang.valueToCode(block, 'PARAM1',
      Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
  var code = 'List.assoc ' + first + ' ' + rest;
  return [code, Blockly.TypedLang.ORDER_FUNCTION_CALL];
};

Blockly.TypedLang['list_append_typed'] = function(block) {
  var left = Blockly.TypedLang.valueToCode(block, 'PARAM0',
      Blockly.TypedLang.ORDER_APPEND_LIST) || '?';
  var right = Blockly.TypedLang.valueToCode(block, 'PARAM1',
      Blockly.TypedLang.ORDER_APPEND_LIST) || '?';
  var code = left + ' @ ' + right;
  return [code, Blockly.TypedLang.ORDER_APPEND_LIST];
};

Blockly.TypedLang['list_fold_left_typed'] = function(block) {
  var fun = Blockly.TypedLang.valueToCode(block, 'PARAM0',
      Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
  var a = Blockly.TypedLang.valueToCode(block, 'PARAM1',
      Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
  var blist = Blockly.TypedLang.valueToCode(block, 'PARAM2',
      Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
  var code = 'List.fold_left ' + fun + ' ' + a + ' ' + blist;
  return [code, Blockly.TypedLang.ORDER_FUNCTION_CALL];
};

Blockly.TypedLang['list_fold_right_typed'] = function(block) {
  var fun = Blockly.TypedLang.valueToCode(block, 'PARAM0',
      Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
  var blist = Blockly.TypedLang.valueToCode(block, 'PARAM1',
      Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
  var a = Blockly.TypedLang.valueToCode(block, 'PARAM2',
      Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
  var code = 'List.fold_right ' + fun + ' ' + blist + ' ' + a;
  return [code, Blockly.TypedLang.ORDER_FUNCTION_CALL];
};

Blockly.TypedLang['list_fold_left2_typed'] = function(block) {
  var fun = Blockly.TypedLang.valueToCode(block, 'PARAM0',
      Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
  var a = Blockly.TypedLang.valueToCode(block, 'PARAM1',
      Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
  var blist = Blockly.TypedLang.valueToCode(block, 'PARAM2',
      Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
  var clist = Blockly.TypedLang.valueToCode(block, 'PARAM3',
      Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
  var code = 'List.fold_left2 ' + fun + ' ' + a + ' ' + blist + ' ' + clist;
  return [code, Blockly.TypedLang.ORDER_FUNCTION_CALL];
};

Blockly.TypedLang['list_fold_right2_typed'] = function(block) {
  var fun = Blockly.TypedLang.valueToCode(block, 'PARAM0',
      Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
  var alist = Blockly.TypedLang.valueToCode(block, 'PARAM1',
      Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
  var blist = Blockly.TypedLang.valueToCode(block, 'PARAM2',
      Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
  var c = Blockly.TypedLang.valueToCode(block, 'PARAM3',
      Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
  var code = 'List.fold_right2 ' + fun + ' ' + alist + ' ' + blist + ' ' + c;
  return [code, Blockly.TypedLang.ORDER_FUNCTION_CALL];
};

Blockly.TypedLang['list_filter_typed'] = function(block) {
  var left = Blockly.TypedLang.valueToCode(block, 'PARAM0',
      Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
  var right = Blockly.TypedLang.valueToCode(block, 'PARAM1',
      Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
  var code = 'List.filter ' + left + ' ' + right;
  return [code, Blockly.TypedLang.ORDER_FUNCTION_CALL];
};

Blockly.TypedLang['list_length_typed'] = function(block) {
  var alist = Blockly.TypedLang.valueToCode(block, 'PARAM0',
      Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
  var code = 'List.length ' + alist;
  return [code, Blockly.TypedLang.ORDER_FUNCTION_CALL];
};

Blockly.TypedLang['list_map_typed'] = function(block) {
  var fun = Blockly.TypedLang.valueToCode(block, 'PARAM0',
      Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
  var alist = Blockly.TypedLang.valueToCode(block, 'PARAM1',
      Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
  var code = 'List.map ' + fun + ' ' + alist;
  return [code, Blockly.TypedLang.ORDER_FUNCTION_CALL];
};

Blockly.TypedLang['list_map2_typed'] = function(block) {
  var fun = Blockly.TypedLang.valueToCode(block, 'PARAM0',
      Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
  var alist = Blockly.TypedLang.valueToCode(block, 'PARAM1',
      Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
  var blist = Blockly.TypedLang.valueToCode(block, 'PARAM2',
      Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
  var code = 'List.map2 ' + fun + ' ' + alist + ' ' + blist;
  return [code, Blockly.TypedLang.ORDER_FUNCTION_CALL];
};

Blockly.TypedLang['list_partition_typed'] = function(block) {
  var param0 = Blockly.TypedLang.valueToCode(block, 'PARAM0',
      Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
  var param1 = Blockly.TypedLang.valueToCode(block, 'PARAM1',
      Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
  var code = 'List.partition ' + param0 + ' ' + param1;
  return [code, Blockly.TypedLang.ORDER_FUNCTION_CALL];
};

Blockly.TypedLang['random_int_typed'] = function(block) {
  // function Random.int.
  var argument = Blockly.TypedLang.valueToCode(block, 'PARAM0',
      Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
  var code = 'Random.int ' + argument;
  return [code, Blockly.TypedLang.ORDER_FUNCTION_CALL];
};

Blockly.TypedLang['random_float_typed'] = function(block) {
  // function Random.float.
  var argument = Blockly.TypedLang.valueToCode(block, 'PARAM0',
      Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
  var code = 'Random.float ' + argument;
  return [code, Blockly.TypedLang.ORDER_FUNCTION_CALL];
};

Blockly.TypedLang['pair_create_typed'] = function(block) {
  var fst = Blockly.TypedLang.valueToCode(block, 'FIRST',
      Blockly.TypedLang.ORDER_COMMA) || '?';
  var snd = Blockly.TypedLang.valueToCode(block, 'SECOND',
      Blockly.TypedLang.ORDER_COMMA) || '?';
  var code = '(' + fst + ', ' + snd + ')';
  return [code, Blockly.TypedLang.ORDER_ATOMIC];
};

Blockly.TypedLang['pair_first_typed'] = function(block) {
  var arg = Blockly.TypedLang.valueToCode(block, 'FIRST',
      Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
  var code = 'fst ' + arg;
  return [code, Blockly.TypedLang.ORDER_FUNCTION_CALL];
};

Blockly.TypedLang['pair_second_typed'] = function(block) {
  var arg = Blockly.TypedLang.valueToCode(block, 'SECOND',
      Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
  var code = 'snd ' + arg;
  return [code, Blockly.TypedLang.ORDER_FUNCTION_CALL];
};

Blockly.TypedLang['function_app_typed'] = function(block) {
  var code = block.getField('VAR').getVariableName();
  var params = [];
  for (var i = 0; i < block.paramCount_; i++) {
    var p = Blockly.TypedLang.valueToCode(block, 'PARAM' + i,
        Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
    params.push(p);
  }
  if (params.length == 0) {
    return [code, Blockly.TypedLang.ORDER_ATOMIC];
  }
  code += ' ' + params.join(' ');
  return [code, Blockly.TypedLang.ORDER_FUNCTION_CALL];
};

Blockly.TypedLang['lambda_typed'] = function(block) {
  var varname = block.typedValue['VAR'].getVariableName();
  var body = Blockly.TypedLang.valueToCode(block, 'RETURN',
      Blockly.TypedLang.ORDER_ARROW) || '?';
  var code = 'fun ' + varname + ' -> ' + body;
  return [code, Blockly.TypedLang.ORDER_EXPR];
};

Blockly.TypedLang['lambda_app_typed'] = function(block) {
  var left = Blockly.TypedLang.valueToCode(block, 'FUN',
      Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
  var right = Blockly.TypedLang.valueToCode(block, 'ARG',
      Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
  var code = left + ' ' + right;
  return [code, Blockly.TypedLang.ORDER_FUNCTION_CALL];
};

Blockly.TypedLang['match_typed'] = function(block) {
  if (block.itemCount_ == 0) {
    return ['', Blockly.TypedLang.ORDER_ATOMIC];
  }
  var input = Blockly.TypedLang.valueToCode(block, 'INPUT',
      Blockly.TypedLang.ORDER_EXPR) || '?';
  var code = 'match ' + input + ' with';
  for (var i = 0; i < block.itemCount_; i++) {
    var pattern = Blockly.TypedLang.valueToCode(block, 'PATTERN' + i,
        Blockly.TypedLang.ORDER_EXPR) || '?';
    var output = Blockly.TypedLang.valueToCode(block, 'OUTPUT' + i,
        Blockly.TypedLang.ORDER_EXPR) || '?';
    code += '\n  | ' + pattern + ' -> ' + output;
  }
  return [code, Blockly.TypedLang.ORDER_EXPR];
};

Blockly.TypedLang['variables_get_typed'] = function(block) {
  var varname = block.typedReference['VAR'].getVariableName();
  return [varname, Blockly.TypedLang.ORDER_ATOMIC];
};

Blockly.PrintSemiSemi = false;

Blockly.TypedLang['let_typed'] = function(block) {
  var args = [];
  for (var i = 0; i < block.argumentCount_; i++) {
    var argn = 'ARG' + i;
    var val = block.typedValue[argn];
    args.push(val.getVariableName());
  }
  var varname = block.typedValue['VAR'].getVariableName();
  var arg = args.length == 0 ? '' : ' ' + args.join(' ');
  var exp1 = Blockly.TypedLang.valueToCode(block, 'EXP1',
      Blockly.TypedLang.ORDER_NONE) || '?';
        // ORDER_NONE = no parenthesis needed for exp1

  var code = 'let ';
  if (block.isRecursive()) code += 'rec ';
  if (args.length == 0) {
    code += varname + ' = ' + exp1;
  } else {
    code += varname + arg + ' =\n  ' + exp1;
  }

  if (block.getIsStatement()) {
    if (Blockly.PrintSemiSemi) {
      code += ';;';
    }
    code += '\n';
    return code;
  }
  var exp2 = Blockly.TypedLang.valueToCode(block, 'EXP2',
      Blockly.TypedLang.ORDER_IN) || '?';
  code += '\n  in ' + exp2;
  return [code, Blockly.TypedLang.ORDER_EXPR];
};

Blockly.TypedLang['let_fun_pattern_typed'] = function(block) {
  var args = [];
  for (var i = 0; i < block.argumentCount_; i++) {
    var pattern = Blockly.TypedLang.valueToCode(block, 'ARG' + i,
        Blockly.TypedLang.ORDER_EXPR) || '?';
    args.push(pattern);
  }
  var varname = block.typedValue['VAR'].getVariableName();
  var arg = args.length == 0 ? '' : ' ' + args.join(' ');
  var exp1 = Blockly.TypedLang.valueToCode(block, 'EXP1',
      Blockly.TypedLang.ORDER_NONE) || '?';
        // ORDER_NONE = no parenthesis needed for exp1

  var code = 'let ';
  if (block.isRecursive()) code += 'rec ';
  if (args.length == 0) {
    code += varname + ' = ' + exp1;
  } else {
    code += varname + arg + ' =\n  ' + exp1;
  }

  if (block.getIsStatement()) {
    if (Blockly.PrintSemiSemi) {
      code += ';;';
    }
    code += '\n';
    return code;
  }
  var exp2 = Blockly.TypedLang.valueToCode(block, 'EXP2',
      Blockly.TypedLang.ORDER_IN) || '?';
  code += '\n  in ' + exp2;
  return [code, Blockly.TypedLang.ORDER_EXPR];
};

Blockly.TypedLang['letrec_typed'] = function(block) {
  return Blockly.TypedLang['let_typed'].call(this, block);
};

Blockly.TypedLang['letstatement_typed'] = function(block) {
  return Blockly.TypedLang['let_typed'].call(this, block);
};

Blockly.TypedLang['letstatement_fun_pattern_typed'] = function(block) {
  return Blockly.TypedLang['let_fun_pattern_typed'].call(this, block);
};

Blockly.TypedLang['dummy_statement_typed'] = function(block) {
  var code = Blockly.TypedLang.valueToCode(block, 'VALUE',
      Blockly.TypedLang.ORDER_ATOMIC) || '?';
  return code;
};

Blockly.TypedLang['big_bang_typed'] = function(block) {
  var initialWorldVar = Blockly.TypedLang.valueToCode(block, 'INITIAL_WORLD',
      Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
  var code = ';; big_bang ' + initialWorldVar;
  if (block.nameCount_ >= 1) {
    code += '\n' + '  ' + '~name:';
    var nameVar = Blockly.TypedLang.valueToCode(block, 'NAME',
        Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
    code += nameVar;
  }
  if (block.widthCount_ >= 1) {
    code += '\n' + '  ' + '~width:';
    var widthVar = Blockly.TypedLang.valueToCode(block, 'WIDTH',
        Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
    code += widthVar;
  }
  if (block.heightCount_ >= 1) {
    code += '\n' + '  ' + '~height:';
    var heightVar = Blockly.TypedLang.valueToCode(block, 'HEIGHT',
        Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
    code += heightVar;
  }
  if (block.drawCount_ >= 1) {
    code += '\n' + '  ' + '~to_draw:';
    var drawVar = Blockly.TypedLang.valueToCode(block, 'DRAW',
        Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
    code += drawVar;
  }
  if (block.tickCount_ >= 1) {
    code += '\n' + '  ' + '~on_tick:';
    var tickVar = Blockly.TypedLang.valueToCode(block, 'TICK',
        Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
    code += tickVar;
  }
  if (block.mouseCount_ >= 1) {
    code += '\n' + '  ' + '~on_mouse:';
    var mouseVar = Blockly.TypedLang.valueToCode(block, 'MOUSE',
        Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
    code += mouseVar;
  }
  if (block.keypressCount_ >= 1) {
    code += '\n' + '  ' + '~on_key_press:';
    var keypressVar = Blockly.TypedLang.valueToCode(block, 'KEYPRESS',
        Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
    code += keypressVar;
  }
  if (block.keyreleaseCount_ >= 1) {
    code += '\n' + '  ' + '~on_key_release:';
    var keyreleaseVar = Blockly.TypedLang.valueToCode(block, 'KEYRELEASE',
        Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
    code += keyreleaseVar;
  }
  if (block.rateCount_ >= 1) {
    code += '\n' + '  ' + '~rate:';
    var rateVar = Blockly.TypedLang.valueToCode(block, 'RATE',
        Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
    code += rateVar;
  }
  if (block.stopCount_ >= 1) {
    code += '\n' + '  ' + '~stop_when:';
    var stopVar = Blockly.TypedLang.valueToCode(block, 'STOP',
        Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
    code += stopVar;
  }
  if (block.drawlastCount_ >= 1) {
    code += '\n' + '  ' + '~to_draw_last:';
    var drawlastVar = Blockly.TypedLang.valueToCode(block, 'DRAWLAST',
        Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
    code += drawlastVar;
  }
  if (Blockly.PrintSemiSemi) {
    code += '\n  ~onload:false;;\n';
  }
  return code;
};

Blockly.TypedLang['defined_recordtype_typed'] = function(block) {
  if (block.itemCount_ == 0) {
    return '';
  }
  var field = block.getField('DATANAME');
  var dataName = field.getVariableName();
  var code = 'type ' + dataName + ' = {\n';
  for (var i = 0; i < block.itemCount_; i++) {
    var recordField = block.getField('FIELD' + i);
    code += '  ' + recordField.getVariableName();
    code += ' : ';
    var typeCtor = Blockly.TypedLang.valueToCode(block, 'FIELD_INP' + i,
        Blockly.TypedLang.ORDER_SEMI) || '?';
    code += typeCtor;
    if (recordField.inlineComment) {
      code += ';\t(* ' + recordField.inlineComment + ' *)\n';
    } else {
      code += ';\n';
    }
  }
  if (Blockly.PrintSemiSemi) {
    code += '};;\n';
  } else {
    code += '}\n';
  }
  return code;
};

Blockly.TypedLang.recordTypeUtil_ = function(pairs) {
  if (pairs.length == 0) {
    return '';
  }
  var code = '{';
  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i];
    var fieldName = pair[0];
    var fieldInput = pair[1];
    code += fieldName;
    code += ' = ';
    code += fieldInput;
    if (i != pairs.length - 1) {
      code += '; ';
    }
  }
  code += '}';
  return code;
};

Blockly.TypedLang['create_record_typed'] = function(block) {
  var pairs = [];
  for (var i = 0; i < block.fieldCount_; i++) {
    var recordField = block.getField('FIELD' + i);
    var fieldName = recordField.getVariableName();
    var fieldInput = Blockly.TypedLang.valueToCode(block, 'FIELD_INP' + i,
        Blockly.TypedLang.ORDER_SEMI) || '?';
    pairs.push([fieldName, fieldInput]);
  }
  return [Blockly.TypedLang.recordTypeUtil_(pairs),
      Blockly.TypedLang.ORDER_ATOMIC];
};

Blockly.TypedLang['defined_datatype_typed'] = function(block) {
  if (block.itemCount_ == 0) {
    // The constructor definition is empty.
    return '';
  }
  var field = block.getField('DATANAME');
  var dataName = field.getText();
  var code = 'type ' + dataName + ' =';
  for (var i = 0; i < block.itemCount_; i++) {
    var typeCtor = Blockly.TypedLang.valueToCode(block, 'CTR_INP' + i,
        Blockly.TypedLang.ORDER_SEMI) || '?';
    var ctorField = block.getField('CTR' + i);
    code += '\n  | ' + ctorField.getVariableName();
    if (typeCtor) {
      code += ' of ' + typeCtor;
    }
  }
  if (Blockly.PrintSemiSemi) {
    code += ';;';
  }
  code += '\n';
  return code;
};

Blockly.TypedLang['create_construct_typed'] = function(block) {
  var params = [];
  for (var i = 0, input; input = block.inputList[i]; i++) {
    var m = input.name && input.name.match(/PARAM(\d+)/);
    if (!m) {
      continue;
    }
    var param = Blockly.TypedLang.valueToCode(block, input.name,
        Blockly.TypedLang.ORDER_ATOMIC) || '?';
    params.push(param);
  }
  var field = block.getField('CONSTRUCTOR');
  var code = field.getVariableName();
  if (params.length != 0) {
    code += ' (' + params.join(', ') + ')';
  }
  return [code, Blockly.TypedLang.ORDER_ATOMIC];
};

Blockly.TypedLang['int_type_typed'] = function(block) {
  return ['int', Blockly.TypedLang.ORDER_ATOMIC];
};

Blockly.TypedLang['float_type_typed'] = function(block) {
  return ['float', Blockly.TypedLang.ORDER_ATOMIC];
};

Blockly.TypedLang['bool_type_typed'] = function(block) {
  return ['bool', Blockly.TypedLang.ORDER_ATOMIC];
};

Blockly.TypedLang['string_type_typed'] = function(block) {
  return ['string', Blockly.TypedLang.ORDER_ATOMIC];
};

Blockly.TypedLang.tupleTypeUtil_ = function(block, names) {
  var tuples = '';
  for (var i = 0, name; name = names[i]; i++) {
    var item = Blockly.TypedLang.valueToCode(block, name,
        Blockly.TypedLang.ORDER_MULTIPLICATION) || '?';
    tuples += item;
    if (i != names.length - 1) {
      tuples += ' * ';
    }
  }
  var parentBlock = block.getParent();
  var isTopLevel = !!parentBlock &&
      (parentBlock.type === 'defined_datatype_typed' ||
       parentBlock.type === 'defined_recordtype_typed');
  var code = '';
  if (!isTopLevel) {
    code += '(';
  }
  code += tuples;
  if (!isTopLevel) {
    code += ')';
  }
  return code;
};

Blockly.TypedLang['pair_type_constructor_typed'] = function(block, names) {
  var code = Blockly.TypedLang.tupleTypeUtil_(block, ['LEFT', 'RIGHT']);
  return [code, Blockly.TypedLang.ORDER_ATOMIC];
};

Blockly.TypedLang['triple_type_constructor_typed'] = function(block) {
  var code = Blockly.TypedLang.tupleTypeUtil_(block,
      ['ITEM0', 'ITEM1', 'ITEM2']);
  return [code, Blockly.TypedLang.ORDER_ATOMIC];
};

Blockly.TypedLang['alist_type_constructor_typed'] = function(block) {
  var param = Blockly.TypedLang.valueToCode(block, 'ITEM',
      Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
  return [param + ' list', Blockly.TypedLang.ORDER_FUNCTION_CALL];
};

Blockly.TypedLang['aoption_type_constructor_typed'] = function(block) {
  var param = Blockly.TypedLang.valueToCode(block, 'ITEM',
      Blockly.TypedLang.ORDER_FUNCTION_CALL) || '?';
  return [param + ' option', Blockly.TypedLang.ORDER_FUNCTION_CALL];
};

Blockly.TypedLang['user_record_type_typed'] = function(block) {
  var code = block.getField('NAME').getText();
  return [code, Blockly.TypedLang.ORDER_ATOMIC];
};

Blockly.TypedLang['variable_pattern_typed'] = function(block) {
  var code = block.getField('VAR').getVariableName();
  return [code, Blockly.TypedLang.ORDER_ATOMIC];
};

Blockly.TypedLang['empty_construct_pattern_typed'] = function(block) {
  return ['[]', Blockly.TypedLang.ORDER_ATOMIC];
};

Blockly.TypedLang['cons_construct_pattern_typed'] = function(block) {
  var order = Blockly.TypedLang.ORDER_CONS;
  var first = Blockly.TypedLang.valueToCode(block, 'FIRST', order) || '?';
  var cons = Blockly.TypedLang.valueToCode(block, 'CONS', order) || '?';
  return [first + ' :: ' + cons, order];
};

Blockly.TypedLang['option_none_pattern_typed'] = function(block) {
  return ['None', Blockly.TypedLang.ORDER_ATOMIC];
};

Blockly.TypedLang['option_some_pattern_typed'] = function(block) {
  var order = Blockly.TypedLang.ORDER_CONSTANT_CONSTRUCTOR;
  var param = Blockly.TypedLang.valueToCode(block, 'PARAM', order) || '?';
  return ['Some ' + param, order];
};

Blockly.TypedLang['pair_pattern_typed'] = function(block) {
  var order = Blockly.TypedLang.ORDER_ATOMIC;
  var left = Blockly.TypedLang.valueToCode(block, 'LEFT', order) || '?';
  var right = Blockly.TypedLang.valueToCode(block, 'RIGHT', order) || '?';
  return ['(' + left + ', ' + right + ')', order];
};

Blockly.TypedLang['record_pattern_typed'] = function(block) {
  var pairs = [];
  for (var i = 0; i < block.fieldCount_; i++) {
    var recordField = block.getField('FIELD' + i);
    var fieldName = recordField.getVariableName();
    var order = Blockly.TypedLang.ORDER_NONE;
    var fieldInput = Blockly.TypedLang.valueToCode(block, 'FIELD_INP' + i,
	order) || '?';
    pairs.push([fieldName, fieldInput]);
  }
  return [Blockly.TypedLang.recordTypeUtil_(pairs),
      Blockly.TypedLang.ORDER_ATOMIC];
};
