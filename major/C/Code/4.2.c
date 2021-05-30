/*
 *
 *逆序打印
 *
 */

#include <stdio.h>

int main(void){

        int num;

        printf("输入一个三位数：");
        scanf("%d",&num);

        printf("逆序打印：%d\n",num%100%10*100+num%100/10*10+num/100);

        return 0;
}

