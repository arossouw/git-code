#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(void)
{
        char ln[1024], command[200];
        char *output[1000] = {"", ""}; 
        FILE *fp;   

        fp = popen ("ps aux", "r");
        if (fp == NULL) {
                perror("popen");
                exit(1);
        }
        while (fgets(ln, sizeof ln, fp) !=NULL){
               fputs(output[i], fp);
        }

        if (ferror(fp)) {
                perror ("fgets");
        }

        pclose(fp);                

        return 0;
}
