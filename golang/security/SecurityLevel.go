package security

import (
	"math/rand"
	"time"

	"github.com/Neptune-IT/ARS_SHELL_CRYPT/standard"
)

var STANDARD_SEC_1 = New(1)

var STANDARD_SEC_2 = New(2)
var STANDARD_SEC_3 = New(3)
var STANDARD_SEC_4 = New(4)

// indéchriffrable
var STANDARD_SEC_5 = New(5)

type SecurityLevel struct {
	Spacing        int
	FirstStrBreak  string
	SecondStrBreak string
}

func New(level int) SecurityLevel {
	var spacing int
	var firststrbreak, secondstrbreak string
	if level <= 4 {
		spacing = level * 10
		firststrbreak = genSecString(level)
		secondstrbreak = genSecString(level)
	} else {
		spacing = level * 9
	}
	return SecurityLevel{
		Spacing:        spacing,
		FirstStrBreak:  firststrbreak,
		SecondStrBreak: secondstrbreak,
	}
}
func genSecString(level int) string {
	rand.Seed(time.Now().UnixNano())
	var sec_str = "`"
	for i := 0; i != level; i++ {
		sec_str += string(standard.CHAR_LIST[rand.Intn(len(standard.CHAR_LIST)-1)])
	}
	return sec_str
}
