/*
 *
 *八进制显示
 *
 */

#include <stdio.h>

int main(void){

	int num,eight;

	printf("输入整数：");
	scanf("%d",&num);

	eight = num%8+num/8%8*10+num/8/8%8*100+num/8/8/8%8*1000+num/8/8/8/8%8*10000;

	printf("八进制输出：%.5d",eight);

	return 0;
}
