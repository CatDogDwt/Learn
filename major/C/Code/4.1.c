/*
 *
 *逆序打印
 *
 */

#include <stdio.h>

int main(void){

	int num;

	printf("输入一个两位数：");
	scanf("%d",&num);

	printf("逆序打印：%d\n",num%10*10+num/10);

	return 0;
}
