/*
 *
 *计算最少数量金币来付款
 *
 */

#include <stdio.h>

int main(void){

	int count,tw,ten,five,one;

	printf("请输入人民币面额：\n");
	scanf("%d",&count);
	
	tw = count/20;
	count -= tw*20;
	
	ten = count/10;
	count -= ten*10;
	
	five = count/5;
	count -= five*5;
	
	one = count/1;
	printf("20元：%d\n10元：%d\n5元：%d\n1元：%d\n",tw,ten,five,one);
	
	return 0;
 }
