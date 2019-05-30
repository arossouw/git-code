#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(int argc, char *argv[])
{
    FILE *fpipe;
    char c = 0;
    size_t sz;
    int buf_size = 1024;
    char command[buf_size];

    if (argv[1] == NULL)
        exit(0);

    memset(command,'\0',sizeof(command));
    strcpy(command, "ps -fL -C ");
    strcat(command, argv[1]);
    strcat(command, "|awk '{print $2}' 2>/dev/null|egrep -e '^[0-9]'");

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
