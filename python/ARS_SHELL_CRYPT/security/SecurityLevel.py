import random
from cryptage.ARS_SHELL_CRYPT import ARS_SHELL_CRYPT


class SecurityLevel(ARS_SHELL_CRYPT):

    def gen_sec_string(self, sec_lvl):
        sec_str = "`"

        for i in range(sec_lvl * 10):
            sec_str += super().CHAR_LIST[random.randint(0, len(super().CHAR_LIST) - 1)]
        return sec_str

    def serialize_sec_data(self, sec_lvl):
        if sec_lvl <= 4:
            return {
                "spacing": sec_lvl * 10,
                "first_str_break": self.gen_sec_string(sec_lvl),
                "second_str_break": self.gen_sec_string(sec_lvl)
            }
        else:
            return {
                "spacing": sec_lvl * 9,
                "first_str_break": self.gen_sec_string(sec_lvl),
                "second_str_break": self.gen_sec_string(sec_lvl)
            }