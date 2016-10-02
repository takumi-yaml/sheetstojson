import {InitialSheet} from "./InitialSheet";
import {Block01Sheet} from "./Block01Sheet";
import {Block02Sheet} from "./Block02Sheet";
import {Block03MSheet} from "./Block03MSheet";
import {Block03GSheet} from "./Block03GSheet";

const key = '';
const ss = SpreadsheetApp.openById(key);
SpreadsheetApp.setActiveSpreadsheet(ss);
const ranges = {
  initial: "A2:B95",
  block01: "A2:C141",
  block02: "A2:B95",
  block03m: "A2:C95",
  block03g: "A2:D32",
};


global.main = function(){
  const initialSheet = new InitialSheet(ss, ranges.initial);
  const notes = initialSheet.getRoot();
  const block01Notes = getNotes(Block01Sheet, ranges.block01);
  const block02Notes = getNotes(Block02Sheet, ranges.block02);
  const block03MNotes = getNotes(Block03MSheet, ranges.block03m);
  const block03GNotes = getNotes(Block03GSheet, ranges.block03g);

  global.marge(notes, block01Notes, 'block01');
  global.marge(notes, block02Notes, 'block02');
  global.marge(notes, block03MNotes, 'block03_medical');
  global.marge(notes, block03GNotes, 'block03_generic');

  return notes;
};

global.getNotes = function(Sheet, range){
  const sheet = new Sheet(ss, range);
  return sheet.getNotes();
};

global.marge = function(root, blocks, blockName){
  for(let i in blocks){
    const basename = Object.keys(blocks[i])[0];
    root[basename][blockName].push( blocks[i][basename] );
  }
  return root;
};

global.doGet = function(){
  const json = global.main();
  return ContentService.createTextOutput(JSON.stringify(json));
};

