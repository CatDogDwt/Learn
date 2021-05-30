/*
 *
 *重写upc.c
 *
 */

#include <stdio.h>

int main(void){

	int lastfive,headfive,n,first_sum,second_sum,total;

	printf("请输入前11位产品代码：");
	scanf("%1d%5d%5d",&n,&headfive,&lastfive);

	first_sum = n + headfive/1000%10 + headfive%100/10 + lastfive/10000 + lastfive/100%10 + lastfive % 10; 
	second_sum = headfive / 10000 + headfive / 100 % 10 + headfive % 10 + lastfive / 1000 % 10 + lastfive/10%10;
	total =  first_sum*3+second_sum;

	printf("校验位为：%1d\n",9-((total-1)%10));

	return 0;
}
