#include <iostream>
#include "utils/Utils.cpp"

int main() {
    std::string test = "oui.je.veux";
    std::vector<std::string> hash = explode(test, '.');

    std::cout << hash.at(0) << std::endl;

    return 0;
}


