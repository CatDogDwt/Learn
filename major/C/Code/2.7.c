/*
 *
 *还贷
 *
 */

#include <stdio.h>

int main(void){

	float money,tax,num,month_tax,interest;

	printf("输入贷款金额：");
	scanf("%f",&money);

	printf("输入利率：");
	scanf("%f",&tax);

	printf("每月还钱：");
	scanf("%f",&num);

	month_tax = tax * 0.01 / 12;
	interest = money - num;

	printf("第一个月：%.2f",interest + interest * month_tax);
	printf("第二个月：%.2f",(interest + interest * month_tax) - num + ((interest + interest * month_tax) - num) * month_tax);
	printf("第三个月：%.2f",((interest + interest * month_tax) - num + ((interest + interest * month_tax) - num) * month_tax) - num \
			+ ((interest + interest * month_tax) - num + ((interest + interest * month_tax) - num) * month_tax) * month_tax );

	return 0;
}
