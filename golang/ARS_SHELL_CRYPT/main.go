package main

import (
	"fmt"

	"github.com/Neptune-IT/ARS_SHELL_CRYPT/cryptage"
	"github.com/Neptune-IT/ARS_SHELL_CRYPT/security"
)

func main() {
	e := cryptage.Encrypt("test", security.STANDARD_SEC_1)
	d := cryptage.Decrypt(e, security.STANDARD_SEC_1)
	fmt.Println(d)
}
