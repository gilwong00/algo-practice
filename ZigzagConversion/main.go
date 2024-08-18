package main

import "strings"

/*
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);


Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I
Example 3:

Input: s = "A", numRows = 1
Output: "A"
**/

func convert(s string, numRows int) string {
	if numRows == 1 {
		return s
	}
	// we essentially want to create and store each row of string in its own array
	// the amount of rows is determined by the numRows argument.
	results := make([]string, numRows)
	/*
		isZagging tells us we hit the end our rows now its time to zag back
		ie for the string PAYPALISHIRING and numRows is 3, we want to create 3 rows
		p
		a
		y
		when looping through the string once we hit y, since y is the 3 character aka the value
		of the numRows argument, we now want to start our zag so the next letter should be
		appended to the previous row, the one beginning with the letter a. Once we append back
		to p, the first row, we repeat the process until we finish the string. We use a row
		row variable to keep track of where we are. the start is row 0 for p, row 1 for a and
		row 3 for y.
	*/
	isZagging := false
	// initializing the starting row
	row := 0
	for i := 0; i < len(s); i++ {
		results[row] += string(s[i])
		// this is what we use to determine when want to zag or not.
		// if zagging is false, then we increment according: 0 -> 1 -> 2
		// if zagging is true then we move in reverse 2 -> 1 -> 0 then
		// 0 -> 1 -> 2 again, in this case cause our numRows is 3.
		if row == 0 || row == numRows-1 {
			isZagging = !isZagging
		}
		if isZagging {
			row++
		} else {
			row--
		}
	}
	// joining strings together for result
	return strings.Join(results, "")
}
