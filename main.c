#include <stdio.h>
#include <string.h>

void printCat(const char* phrase, int isAngry) {
    const char* catSay = "\
      ／＞　 フ\n\
     |  %c  %c |\n\
   ／` ミ＿xノ    %s\n\
 /　　 　　 |\n\
/　 ヽ　　 ﾉ\n";

    printf(catSay, isAngry ? '\\' : '_', isAngry ? '/' : '_', phrase);
}

int main(int argc, char *argv[]) {
    int isAngry = 0;
    int angryIndex = -1;

    for (int i = 1; i < argc; ++i) {
        if (strcmp(argv[i], "--angry") == 0) {
            isAngry = 1;
            angryIndex = i;
            break;
        }
    }

    if (isAngry) {
        for (int i = angryIndex; i < argc - 1; ++i) {
            argv[i] = argv[i + 1];
        }
        argc--;
    }

    char words[1024] = "< ";
    for (int i = 1; i < argc; ++i) {
        strcat(words, argv[i]);
        if (i < argc - 1) {
            strcat(words, " ");
        }
    }

    printCat(words, isAngry);

    return 0;
}