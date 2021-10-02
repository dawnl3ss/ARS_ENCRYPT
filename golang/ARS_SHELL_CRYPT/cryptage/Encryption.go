package cryptage

import (
	"strings"

	"github.com/Neptune-IT/ARS_SHELL_CRYPT/security"
)

func Encrypt(str string, security security.SecurityLevel) string {
	newStr := ""
	for _, i := range str {
		newStr += string(encryptChar(i, security.Spacing))
	}
	return newStr + security.FirstStrBreak + newStr[:1] + security.SecondStrBreak
}
func Decrypt(str string, security security.SecurityLevel) string {
	newStr := ""
	hash := strings.Split(str, "`")[0]
	for _, char := range hash {
		newStr += string(decryptChar(char, security.Spacing))
	}
	return newStr
}
