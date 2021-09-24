import { Cell } from '../models/cell';
import { SudokuCage } from '../models/sudoku-cage';
import { KillerSudokuClass } from '../sudokus/killer-sudoku-class';

test('Killer Sudoku Constructor', () => {
	var sudoku = new KillerSudokuClass([
		new SudokuCage([new Cell(1, 1), new Cell(2, 1), new Cell(3, 1), new Cell(4, 1)], 18),
		new SudokuCage([new Cell(1, 2), new Cell(1, 3), new Cell(2, 2)], 16),
		new SudokuCage([new Cell(1, 4), new Cell(1, 5), new Cell(1, 6)], 9),
		new SudokuCage([new Cell(1, 7), new Cell(1, 8), new Cell(2, 8)], 8),
		new SudokuCage([new Cell(1, 9), new Cell(2, 9), new Cell(3, 9), new Cell(4, 9)], 21),
		new SudokuCage([new Cell(5, 1), new Cell(6, 1), new Cell(6, 2)], 15),
		new SudokuCage([new Cell(5, 9), new Cell(6, 9), new Cell(6, 8)], 18),
		new SudokuCage([new Cell(3, 2), new Cell(4, 2), new Cell(5, 2), new Cell(5, 3)], 16),
		new SudokuCage([new Cell(3, 8), new Cell(4, 8), new Cell(5, 8), new Cell(5, 7)], 23),
		new SudokuCage([new Cell(2, 5), new Cell(3, 5)], 8),
		new SudokuCage([new Cell(7, 1), new Cell(7, 2)], 8),
		new SudokuCage([new Cell(8, 1), new Cell(8, 2)], 10),
		new SudokuCage([new Cell(9, 1), new Cell(9, 2)], 14),
		new SudokuCage([new Cell(7, 8), new Cell(7, 9)], 10),
		new SudokuCage([new Cell(8, 8), new Cell(8, 9)], 13),
		new SudokuCage([new Cell(9, 8), new Cell(9, 9)], 11),
		new SudokuCage([new Cell(2, 3), new Cell(2, 4), new Cell(3, 3), new Cell(4, 3)], 28),
		new SudokuCage([new Cell(2, 6), new Cell(2, 7), new Cell(3, 7), new Cell(4, 7)], 28),
		new SudokuCage([new Cell(3, 4), new Cell(4, 4)], 9),
		new SudokuCage([new Cell(3, 6), new Cell(4, 6)], 8),
		new SudokuCage([new Cell(4, 5), new Cell(5, 5), new Cell(6, 5), new Cell(5, 4), new Cell(5, 6)], 34),
		new SudokuCage([new Cell(7, 5), new Cell(8, 5), new Cell(9, 5)], 12),
		new SudokuCage([new Cell(6, 3), new Cell(6, 4), new Cell(7, 4), new Cell(8, 4)], 17),
		new SudokuCage([new Cell(6, 6), new Cell(6, 7), new Cell(7, 6), new Cell(8, 6)], 17),
		new SudokuCage([new Cell(7, 3), new Cell(8, 3)], 11),
		new SudokuCage([new Cell(7, 7), new Cell(8, 7)], 8),
		new SudokuCage([new Cell(9, 3), new Cell(9, 4)], 11),
		new SudokuCage([new Cell(9, 6), new Cell(9, 7)], 4),
	]);

	expect(sudoku.rowCount).toBe(9);
	expect(sudoku.rowPerBox).toBe(3);
	expect(sudoku.columnCount).toBe(9);
	expect(sudoku.columnPerBox).toBe(3);

	expect(sudoku.rules.length).toBe(4);

	expect(sudoku.solve()).toBe(true);
	expect(sudoku.print()).toBe('8|7|6|3|2|4|5|1|9\n\
1|3|5|6|7|9|8|2|4\n\
2|4|9|8|1|5|7|3|6\n\
7|9|8|1|6|3|4|5|2\n\
5|2|1|4|8|7|9|6|3\n\
4|6|3|5|9|2|1|7|8\n\
3|5|7|2|4|8|6|9|1\n\
9|1|4|7|3|6|2|8|5\n\
6|8|2|9|5|1|3|4|7')
});
