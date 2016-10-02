import {Sheet} from "./Sheet";

export class InitialSheet extends Sheet {
  constructor(spreadsheet, range) {
    super(spreadsheet);
    this._sheetName = 'title';
    this._activate();
    this.range = this._sheet.getRange(range);
    this.values = this.range.getValues();
  }

  _getNote(row) {
    const _temp = {};
    const basename = this.values[row][0];
    _temp[basename] = {
      basename: this.values[row][0],
      title: this.values[row][1],
      block01: [],
      block02: [],
      block03_medical: [],
      block03_generic: []
    };
    return _temp;
  }

  getRoot() {
    const maxNum = this.range.getNumRows();
    const _root = {};
    for (let i in this.values){
      const _note = this._getNote(i);
      const _basename = Object.keys(_note)[0];
      _root[_basename] = _note[_basename];
    }
    return _root;
  }

}


