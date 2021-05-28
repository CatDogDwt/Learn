/*
 *
 *格式化产品信息
 *
 */

#include <stdio.h>

int main(void){

	int item,m,d,y;
	float price;

	printf("请输入产品码：");
	scanf("%d",&item);
	
	printf("请输入单价：");
	scanf("%f",&price);

	printf("请输入生产日期：");
	scanf("%d/%d/%d",&m,&d,&y);

	printf("\nItem\tUnit\tPurchase\n\tPrice\tDate\n%-d\t$%6.2f\t%.2d/%.2d/%.4d\n",item,price,m,d,y);

	return 0;
}
