#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(void)
{
        char ln[1024];
        FILE *fp;   
        char *command = "ps aux";

        fp = popen(command, "r");
        if (fp == NULL) {
                perror("popen");
                exit(1);
        }
        while (fgets(ln, sizeof ln, fp) !=NULL){
             printf("%s", ln);
        }

        if (ferror(fp)) {
                perror ("fgets");
        }

        pclose(fp);                

        return 0;
}
