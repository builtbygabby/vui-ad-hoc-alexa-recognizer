/*
 @author Ilya Shubentsov

 MIT License

 Copyright (c) 2017 Ilya Shubentsov

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
*/
"use strict";
module.exports = function(standardArgs, customArgs){ // eslint-disable-line no-unused-vars
  let intentName;
  let utterance;
  let priorResult;
  if(typeof standardArgs !== "undefined"){
    intentName = standardArgs.intentName;
    utterance = standardArgs.utterance;
    priorResult = standardArgs.priorResult;
  }
  let slotsToAdd;
  if(typeof customArgs !== "undefined" && customArgs !== null){
    slotsToAdd = customArgs.slotsToAdd;
  }
  else {
    return;
  }
  if(typeof priorResult !== "undefined" && priorResult !== null){
    if(typeof priorResult.slots === "undefined" || priorResult.slots === null){
      priorResult.slots = {};
    }
    for (let slot in slotsToAdd) {
      if (slotsToAdd.hasOwnProperty(slot)) {
        if(typeof priorResult.slots.slot === "undefined" || priorResult.slots.slot === null){
          priorResult.slots[slot] = slotsToAdd[slot];
        }
      }
    }
  }
};
