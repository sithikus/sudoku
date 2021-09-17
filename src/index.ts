import { SixBySixSudokuClass } from './sudokus/six-by-six-sudoku-class';
import { SudokuClass } from './sudokus/sudoku-class';
import { SukanoClass } from './sudokus/sukano-class';
import { UprightSixBySixSudokuClass } from './sudokus/upright-six-by-six-sudoku-class';

export { };

export function Sudoku(): SudokuClass;
export function Sudoku(): SudokuClass {
	return new SudokuClass();
}

export function Sukano(arg1: string | string[], arg2?: string | string[]): SukanoClass;
export function Sukano(...args: any[]): SukanoClass {
	if (args.length > 2) {
		throw new SyntaxError('Received an invalid number of arguments.');
	}
	if (args[0] instanceof Array && args[1] instanceof Array) {
		return new SukanoClass(args[0], args[1]);
	}
	if (args[0] instanceof Array) {
		return new SukanoClass(args[0].slice(0, args[0].length / 2), args[0].slice(args[0].length / 2));
	}

	if (typeof args[0] === 'string' && typeof args[1] === 'string') {
		return new SukanoClass(args[0].split('||'), args[1].split('||'));
	}
	if (typeof args[0] === 'string') {
		return new SukanoClass(
			args[0].split('||').slice(0, args[0].split('||').length / 2),
			args[0].split('||').slice(args[0].split('||').length / 2),
		);
	}
	return new SukanoClass([], []);
}
export function SixBySixSudoku(): SixBySixSudokuClass;
export function SixBySixSudoku(): SixBySixSudokuClass {
	return new SixBySixSudokuClass();
}
export function UprightSixBySixSudoku(): UprightSixBySixSudokuClass;
export function UprightSixBySixSudoku(): UprightSixBySixSudokuClass {
	return new UprightSixBySixSudokuClass();
}
