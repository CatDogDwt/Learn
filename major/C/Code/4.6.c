/*
 *
 *EAN.c
 *
 */

#include <stdio.h>

int main(void){

	int lastsix,headfive,n,first_sum,second_sum,total;

	printf("请输入13位EAN码");
	scanf("%1d%5d%6d",&n,&headfive,&lastsix);

	first_sum = n + headfive/1000%10 + headfive%100/10 + lastsix/100000 + lastsix/1000%10 + lastsix % 10; 
	second_sum = headfive / 10000 + headfive / 100 % 10 + headfive % 10 + lastsix / 10000 % 10 + lastsix/100%10 + lastsix%10;
	total =  first_sum+second_sum*3;

	printf("校验码为：%1d\n",9-((total-1)%10));

	return 0;
}
