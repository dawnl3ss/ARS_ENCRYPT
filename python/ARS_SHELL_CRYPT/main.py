from cryptage.Encryption import Encryption

encrypt = Encryption("string_to_crypt", Encryption.STANDARD_SPACING_SEC_1)
print(encrypt.str_encrypt())
print(encrypt.str_decrypt())