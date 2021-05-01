from standard.StandardSecurity import StandardSecurity


class ARS_SHELL_CRYPT(StandardSecurity):

    METHOD_CRYPT = 0
    METHOD_DECRYPT = 1

    def char_to_achar(self, f_char, method, _spacing):
        n_char = ""

        if method == self.METHOD_CRYPT:
            for i in range(len(super().CHAR_LIST)):
                if super().CHAR_LIST[i] == f_char:
                    if i >= _spacing:
                        while True:
                            if i + _spacing in super().CHAR_LIST.keys():
                                n_char = super().CHAR_LIST[i + _spacing]
                                break
                            elif (i + _spacing) - len(super().CHAR_LIST) in super().CHAR_LIST.keys():
                                n_char = super().CHAR_LIST[(i + _spacing) - len(super().CHAR_LIST)]
                                break
                        break
                    elif i < _spacing:
                        while True:
                            if i + _spacing in super().CHAR_LIST.keys():
                                n_char = super().CHAR_LIST[i + _spacing]
                                break
                        break
        elif method == self.METHOD_DECRYPT:
            for i in range(len(super().CHAR_LIST)):
                if super().CHAR_LIST[i] == f_char:
                    if i >= _spacing:
                        while True:
                            if i - _spacing in super().CHAR_LIST.keys():
                                n_char = super().CHAR_LIST[i - _spacing]
                                break
                        break
                    elif i < _spacing:
                        while True:
                            if i - _spacing in super().CHAR_LIST.keys():
                                n_char = super().CHAR_LIST[i - _spacing]
                                break
                            elif (i - _spacing) + len(super().CHAR_LIST) in super().CHAR_LIST.keys():
                                n_char = super().CHAR_LIST[(i - _spacing) + len(super().CHAR_LIST)]
                                break
                        break
        return n_char