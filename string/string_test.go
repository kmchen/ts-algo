package str

import "testing"

func TestFindSpace(t *testing.T) {
	str := "the sky is blue"
	expectedStr := "blue is sky the"
	result := ReverseWord(str)
	if result != expectedStr {
		t.Fatalf("Expected %s, got %s", expectedStr, result)
	}
}
