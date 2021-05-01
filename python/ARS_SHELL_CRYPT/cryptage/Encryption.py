from security.SecurityLevel import SecurityLevel


class Encryption(SecurityLevel):

    def __init__(self, string, sec_lvl, c_data = []):
        self.string = string
        self.sec_lvl = sec_lvl
        self.crypt_data = {
            "encrypted": "",
            "decrypted": ""
        }
        if c_data != []: self.crypt_data = c_data
        self.sec_data = super().serialize_sec_data(sec_lvl)

    def str_encrypt(self):
        sec = self.sec_data
        encrypt = ""

        for i in range(len(self.string)):
            encrypt += super().char_to_achar(self.string[i], super().METHOD_CRYPT, sec["spacing"])
        self.crypt_data["encrypted"] = encrypt
        return encrypt + sec["first_str_break"] + encrypt[::-1] + sec["second_str_break"]

    def str_decrypt(self):
        sec = self.sec_data
        hash = self.crypt_data["encrypted"].split("`")[0]
        decrypt = ""

        for i in range(len(hash)):
            decrypt += super().char_to_achar(hash[i], super().METHOD_DECRYPT, sec["spacing"])
        self.crypt_data["decrypted"] = decrypt
        return decrypt