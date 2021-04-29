from cryptage.ARS_SHELL_CRYPT import ARS_SHELL_CRYPT


class Encryption(ARS_SHELL_CRYPT):

    def __init__(self, string, spacing, c_data = []):
        self.string = string
        self.spacing = spacing
        self.crypt_data = {
            "encrypted": "",
            "decrypted": ""
        }
        if c_data != []: self.crypt_data = c_data

    def str_encrypt(self):
        encrypt = ""

        for i in range(len(self.string)):
            encrypt += super().char_to_achar(self.string[i], super().METHOD_CRYPT, self.spacing)
        self.crypt_data["encrypted"] = encrypt
        return encrypt + "/-(_@25az" + encrypt[::-1] + "(_*%-$*="

    def str_decrypt(self):
        hash = self.crypt_data["encrypted"].split("/-(_@25az")[0]
        decrypt = ""

        for i in range(len(hash)):
            decrypt += super().char_to_achar(hash[i], super().METHOD_DECRYPT, self.spacing)
        self.crypt_data["decrypted"] = decrypt
        return decrypt