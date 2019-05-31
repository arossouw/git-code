#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main()
{
    FILE *fpipe;
    char *command = "ls";
    char c = 0;
    size_t sz;

    if (0 == (fpipe = (FILE*)popen(command, "w")))
    {
        perror("popen() failed.");
        exit(1);
    }

    pclose(fpipe);

    while (fread(&c, sizeof c, 1, fpipe))
    {
        sz = snprintf(NULL, 0, "%c",  c);
    }

    printf("%c", c);
    return -1;
}
