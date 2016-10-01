package str

import "strings"

//ReverseWord(:string)
//Input: "the sky is blue" => "blue is sky the".
//Note: Reduce them to a single space in the reversed string.
func ReverseWord(str string) string {
	lastIdx := len(str) - 1
	newStr := ""
	tmpStr := ""
	for i := lastIdx; i >= 0; i-- {
		if string(str[i]) != " " {
			tmpStr += string(str[i])
			continue
		} else if string(str[i]) == " " {
			newStr += revertString(tmpStr)
			newStr += " "
			tmpStr = ""
		}
	}
	newStr += revertString(tmpStr)
	return newStr
}

func revertString(str string) string {
	newStr := ""
	for j := len(str) - 1; j >= 0; j-- {
		newStr += string(str[j])
	}
	return newStr
}

//ValidPalindrome(string) bool
//Given a string, determine if it is a palindrome,
//e.g. "A man, a plan, a canal: Panama" is a palindrome.
//e.g. "race a car" is not a palindrome.
//Note: considering only alphanumeric characters and ignoring cases.
//Have you consider that the string might be empty?
//This is a good question to ask during an interview.
//For the purpose of this problem,
//we define empty string as valid palindrome.
//Challenge: O(n) time without extra memory.
//Hint: Use two indices
func ValidPalindrom(str string) bool {
	last := len(str) - 1
	first := 0
	for first <= len(str)/2 && last >= len(str)/2 {
		for !isChar(str[first]) {
			first++
		}
		for !isChar(str[last]) {
			last--
		}
		if strings.ToLower(string(str[first])) != strings.ToLower(string(str[last])) {
			return false
		}
		first++
		last--
	}
	return true
}

func isChar(char byte) bool {
	if (char >= 'a' && char <= 'z') ||
		(char >= 'A' && char <= 'Z') {
		return true
	}
	return false
}

//LongestPalindromicSubstring(string):string
//You may assume that the maximum length of S is 1000,
//and there exists one unique longest palindromic substring.
//e.g. "abcdzdcab" => "cdzdc".
//Challenge : O(n2) time is acceptable. Can you do it in O(n) time.
func LongestPalindromicSubstring(str string) string {
	var result string
	for i := 0; i < len(str); i++ {
		for j := len(str) - 1; j >= i; j-- {
			if string(str[i]) != string(str[j]) {
				continue
			}
			if isPalindrome(str[i : j+1]) {
				if len(str[i:j+1]) > len(result) {
					result = str[i : j+1]
					break
				}
			}
		}
	}
	return result
}

func isPalindrome(str string) bool {
	for i := 0; i < len(str); i++ {
		lastIdx := len(str) - i - 1
		if string(str[i]) != string(str[lastIdx]) {
			return false
		}
	}
	return true
}

//Implement wildcard pattern matching with support for '?' and '*'.
//'?' Matches any single character.
//'*' Matches any sequence of characters (including the empty sequence).
//The matching should cover the entire input string (not partial).
//Example
//isMatch("aa","a") → false
//isMatch("aa","aa") → true
//isMatch("aaa","aa") → false
//isMatch("aa", "*") → true
//isMatch("aa", "a*") → true
//isMatch("ab", "?*") → true
//isMatch("aab", "c*a*b") → false
