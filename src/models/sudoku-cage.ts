import { Cell } from './cell';

export class SudokuCage {
	cells: Cell[];
	size: number;

	constructor(cells: Cell[], size: number) {
		this.cells = new Array();
		for (let cell of cells) {
			this.cells.push(new Cell(cell.row, cell.column));
		}
		this.size = size;
	}
}
