/*
 *
 *计算最少数量金币来付款
 *
 */

#include <stdio.h>

int main(void){

	int count;

	printf("请输入人民币面额：");
	scanf("%d",&count);

	printf("20元：%d\n",count/20);
	 
	printf("10元：%d\n",(count - count/20*20)/10);
	 
	printf("5元：%d\n",(count - (count - count/20*20)/10*10 + count/20*20)/5);
	
	printf("1元：%d\n",(count - (count - count/20*20)/10*10 + count/20*20)/1);
	
	return 0;
 }
