package str

import "testing"

func TestReverseWord(t *testing.T) {
	str := "the sky is blue"
	expectedStr := "blue is sky the"
	result := ReverseWord(str)
	if result != expectedStr {
		t.Fatalf("Expected %s, got %s", expectedStr, result)
	}
}

func TestValidPalindrome(t *testing.T) {

	str := "A man, a plan, a canal: Panama"
	result := ValidPalindrom(str)
	if result != true {
		t.Fatalf("Expected %v, got %v", true, result)
	}
	str = "race a car"
	result = ValidPalindrom(str)
	if result != false {
		t.Fatalf("Expected %v, got %v", false, result)
	}
}
