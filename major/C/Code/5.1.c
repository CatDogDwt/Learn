/*
 *
 *位数
 *
 */

#include <stdio.h>

int main(void){

	int num;

	printf("输入一个数字：");
	scanf("%d",&num);

	if(num < 10)
		printf("一位\n");
	else if (num < 100)
		printf("两位\n");
	else if (num < 1000)
		printf("三位\n");
	else if (num < 10000)
		printf("四位\n");
	else
		printf("只能判断四位\n");


	return 0;
}
