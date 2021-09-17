import { Cell } from './cell';

export class SudokuRow {
	cells: Cell[];
	rowNumber: number;

	constructor(columns: number, rowNumber: number) {
		this.cells = new Array();
		for (let i = 1; i <= columns; i++) {
			this.cells.push(new Cell(rowNumber, i));
		}
		this.rowNumber = rowNumber;
	}
}
