package cryptage

import "github.com/Neptune-IT/ARS_SHELL_CRYPT/standard"

func decryptChar(char rune, spacing int) rune {
	var newChar rune
	for i, ch := range standard.CHAR_LIST {
		if ch == char {
			if i >= spacing {
				for true {
					if i-spacing <= len(standard.CHAR_LIST)-1 {
						newChar = standard.CHAR_LIST[i-spacing]
						break
					}
					break
				}
			} else if i < spacing {
				for true {
					if i-spacing <= len(standard.CHAR_LIST)-1 {
						newChar = standard.CHAR_LIST[i-spacing]
						break
					} else if (i-spacing)+len(standard.CHAR_LIST) <= len(standard.CHAR_LIST)-1 {
						newChar = standard.CHAR_LIST[(i-spacing)+len(standard.CHAR_LIST)]
						break
					}
					break
				}
			}
		}
	}
	return newChar
}
func encryptChar(char rune, spacing int) rune {
	var newChar rune
	for i, ch := range standard.CHAR_LIST {
		if ch == char {
			if i >= spacing {
				for true {
					if i+spacing <= len(standard.CHAR_LIST)-1 {
						newChar = standard.CHAR_LIST[i+spacing]
						break
					} else if (i+spacing)-len(standard.CHAR_LIST) <= len(standard.CHAR_LIST)-1 {
						newChar = standard.CHAR_LIST[(i+spacing)-len(standard.CHAR_LIST)]
						break
					}
					break
				}
			} else if i < spacing {
				for true {
					if i+spacing <= len(standard.CHAR_LIST)-1 {
						newChar = standard.CHAR_LIST[i+spacing]
						break
					}
					break
				}
			}
		}
	}
	return newChar
}
