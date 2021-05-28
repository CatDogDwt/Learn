/*
*
*计算5%税率后的金额
*
*/

#include <stdio.h>

#define TAX 0.05

int main(void){
	
	float money,tax_add;
	
	printf("税前：");
	scanf("%f",&money);
	
	tax_add = money + money * TAX;
	
	printf("税后：%.2f",tax_add);
	
	return 0;
}
