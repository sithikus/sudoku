import { Cell } from './cell';
import '@sithikus/numbers';

export class SudokuCage {
	cells: Cell[];
	size: number;

	private _possibleValues: number[];

	public get possibleValues(): number[] {
		return this._possibleValues;
	}

	constructor(cells: Cell[], size: number) {
		this.cells = new Array();
		for (const cell of cells) {
			this.cells.push(new Cell(cell.row, cell.column));
		}
		this.size = size;
		this._possibleValues = [1, 2, 3, 4, 5, 6, 7, 8, 9]
			.getUniqueCombinations(this.size, this.cells.length) // Get unique possible solutions
			.reduce((arr, res) => [...new Set([...arr, ...res])], []); // convert to individual numbers
	}
}
