package str

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
