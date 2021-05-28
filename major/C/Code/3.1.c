/*
 *
 *显示年月日
 *
 */

#include <stdio.h>

int main(void){

	int m,d,y;

	printf("输入日期：");
	scanf("%d/%d/%d",&m,&d,&y);

	printf("输出日期：%d%-0.2d%.2d\n",y,m,d);

	return 0;
}


